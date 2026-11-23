/**
 * BGS — Serveur web léger (zéro dépendance)
 * ------------------------------------------------------------------
 * - Sert le site statique
 * - Expose POST /api/contact pour le formulaire
 * - Anti-spam : champ honeypot, délai minimal, limitation par IP, validation
 * - Enregistre les demandes dans data/leads.json
 * - Notifie éventuellement un webhook (CONTACT_WEBHOOK_URL)
 * - Espace administrateur : création de compte, connexion par session cookie
 * - Catalogue produits persistant : GET public, POST/PUT/DELETE protégés
 *
 * Démarrage : node server.js   (ou npm start)
 */
'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');

// Persistance : fichiers JSON en local, PostgreSQL (Neon) dès que DATABASE_URL est défini.
let pool = null;
if (process.env.DATABASE_URL) {
  try {
    const pg = require('pg');
    pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 3,
      idleTimeoutMillis: 10000
    });
  } catch (err) {
    console.error('[BGS] Module pg absent : lancez npm install. Fallback sur les fichiers locaux.');
  }
}

const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');
const ADMIN_FILE = path.join(DATA_DIR, 'admin.json');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const MAX_BODY = 12 * 1024; // 12 Ko
const MAX_PRODUCT_BODY = 3 * 1024 * 1024; // 3 Mo pour upload image produit (base64)
const RATE_WINDOW = 60 * 60 * 1000; // 1 heure
const RATE_MAX = 5;
const MIN_FILL_TIME = 1500;

const LOGIN_WINDOW = 15 * 60 * 1000;
const LOGIN_MAX = 10;
const SESSION_MS = 8 * 60 * 60 * 1000;
const COOKIE_NAME = 'bgs_admin';

const attempts = new Map();
const loginAttempts = new Map();
const sessions = new Map();

const CATEGORIES = ['fibre', 'reseau', 'telecom', 'satellite', 'informatique'];
const STOCKS = ['available', 'low', 'out'];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https:",
    "connect-src 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'"
  ].join('; ')
};

function send(res, status, body, type, extra) {
  const headers = Object.assign({}, SECURITY_HEADERS, { 'Content-Type': type || 'text/plain; charset=utf-8' }, extra || {});
  res.writeHead(status, headers);
  res.end(body);
}

function json(res, status, payload, extra) {
  send(res, status, JSON.stringify(payload), 'application/json; charset=utf-8',
    Object.assign({ 'Cache-Control': 'no-store' }, extra || {}));
}

function safePath(urlPath) {
  let decoded;
  try { decoded = decodeURIComponent(urlPath.split('?')[0]); } catch { return null; }
  if (decoded.includes('\0')) return null;
  const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, '');
  const full = path.resolve(ROOT, '.' + (normalized.startsWith('/') ? normalized : '/' + normalized));
  if (!full.startsWith(ROOT + path.sep) && full !== ROOT) return null;
  return full;
}

function serveStatic(req, res, pathname) {
  let full = safePath(pathname);
  if (!full) return json(res, 400, { ok: false, error: 'Invalid path' });

  if (fs.existsSync(full) && fs.statSync(full).isDirectory()) {
    full = path.join(full, 'index.html');
  }
  if (!fs.existsSync(full) || !fs.statSync(full).isFile()) {
    const notFound = path.join(ROOT, '404.html');
    if (fs.existsSync(notFound)) {
      const html = fs.readFileSync(notFound);
      return send(res, 404, html, 'text/html; charset=utf-8', { 'Cache-Control': 'no-store' });
    }
    return json(res, 404, { ok: false, error: 'Not found' });
  }

  const ext = path.extname(full).toLowerCase();
  const type = MIME[ext] || 'application/octet-stream';
  res.writeHead(200, Object.assign({}, SECURITY_HEADERS, {
    'Content-Type': type,
    'Cache-Control': 'no-cache'
  }));
  if (req.method === 'HEAD') return res.end();
  fs.createReadStream(full).pipe(res);
}

function readBody(req, maxBytes) {
  const limit = Number(maxBytes) > 0 ? Number(maxBytes) : MAX_BODY;
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > limit) { reject(new Error('Body too large')); req.destroy(); return; }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

async function readJsonBody(req, maxBytes) {
  const raw = await readBody(req, maxBytes);
  const payload = JSON.parse(raw || '{}');
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) throw new Error('invalid-body');
  return payload;
}

function clientIp(req) {
  return (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.socket.remoteAddress || 'unknown';
}

function rateLimited(ip) {
  const now = Date.now();
  const entry = attempts.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_WINDOW) { entry.count = 0; entry.start = now; }
  entry.count += 1;
  attempts.set(ip, entry);
  if (attempts.size > 5000) {
    for (const [key, value] of attempts) if (now - value.start > RATE_WINDOW) attempts.delete(key);
  }
  return entry.count > RATE_MAX;
}

function loginRateLimited(ip) {
  const now = Date.now();
  const entry = loginAttempts.get(ip) || { count: 0, start: now };
  if (now - entry.start > LOGIN_WINDOW) { entry.count = 0; entry.start = now; }
  entry.count += 1;
  loginAttempts.set(ip, entry);
  if (loginAttempts.size > 2000) {
    for (const [key, value] of loginAttempts) if (now - value.start > LOGIN_WINDOW) loginAttempts.delete(key);
  }
  return entry.count > LOGIN_MAX;
}

function clean(value, max) {
  return String(value == null ? '' : value)
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, max || 200);
}

function validate(payload) {
  const errors = [];
  if (payload.website && String(payload.website).trim()) errors.push('honeypot');
  const elapsed = Number(payload._elapsed) || 0;
  if (elapsed && elapsed < MIN_FILL_TIME) errors.push('too-fast');
  if (!clean(payload.firstName, 60)) errors.push('firstName');
  if (!clean(payload.lastName, 60)) errors.push('lastName');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(clean(payload.email, 120))) errors.push('email');
  if (!payload.service) errors.push('service');
  const message = clean(payload.message, 4000);
  if (message.length < 10) errors.push('message');
  return { errors, message };
}

async function initStore() {
  if (!pool) return;
  await pool.query(`
    CREATE TABLE IF NOT EXISTS bgs_admin (
      id smallint PRIMARY KEY DEFAULT 1 CHECK (id = 1),
      username text NOT NULL,
      salt text NOT NULL,
      hash text NOT NULL,
      created_at timestamptz NOT NULL DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS bgs_products (
      id text PRIMARY KEY,
      category text NOT NULL,
      ref text NOT NULL,
      stock text NOT NULL,
      name jsonb NOT NULL,
      description jsonb NOT NULL,
      image text NOT NULL DEFAULT '',
      position integer NOT NULL DEFAULT 0
    );
    ALTER TABLE bgs_products ADD COLUMN IF NOT EXISTS image text NOT NULL DEFAULT '';
    CREATE TABLE IF NOT EXISTS bgs_projects (
      id text PRIMARY KEY,
      category text NOT NULL,
      image text NOT NULL DEFAULT '',
      name jsonb NOT NULL,
      description jsonb NOT NULL,
      tags jsonb NOT NULL DEFAULT '[]'::jsonb,
      position integer NOT NULL DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS bgs_leads (
      id text PRIMARY KEY,
      received_at timestamptz NOT NULL,
      payload jsonb NOT NULL
    );
    CREATE TABLE IF NOT EXISTS bgs_settings (
      id smallint PRIMARY KEY DEFAULT 1 CHECK (id = 1),
      payload jsonb NOT NULL DEFAULT '{}'::jsonb,
      updated_at timestamptz NOT NULL DEFAULT now()
    );
  `);
  console.log('[BGS] Base PostgreSQL connectée.');
}

async function saveLead(lead) {
  if (pool) {
    await pool.query(
      'INSERT INTO bgs_leads (id, received_at, payload) VALUES ($1, $2, $3::jsonb)',
      [lead.id, lead.receivedAt, JSON.stringify(lead)]
    );
    return;
  }
  fs.mkdirSync(DATA_DIR, { recursive: true });
  let list = [];
  if (fs.existsSync(LEADS_FILE)) {
    try { list = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf8')); } catch { list = []; }
  }
  if (!Array.isArray(list)) list = [];
  list.push(lead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(list, null, 2) + '\n', { mode: 0o600 });
}

function notifyWebhook(lead) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return;
  try {
    const parsed = new URL(url);
    const mod = parsed.protocol === 'https:' ? require('node:https') : require('node:http');
    const body = JSON.stringify({
      text: `Nouvelle demande BGS — ${lead.firstName} ${lead.lastName} (${lead.email})\nService : ${lead.service}\n\n${lead.message}`
    });
    const request = mod.request(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
      timeout: 6000
    }, (response) => response.resume());
    request.on('error', (err) => console.warn('[BGS] Webhook:', err.message));
    request.on('timeout', () => request.destroy());
    request.end(body);
  } catch (err) {
    console.warn('[BGS] Webhook invalide:', err.message);
  }
}

async function handleContact(req, res) {
  if (rateLimited(clientIp(req))) return json(res, 429, { ok: false, error: 'too-many-requests' });

  let payload;
  try {
    const raw = await readBody(req);
    payload = JSON.parse(raw);
  } catch {
    return json(res, 400, { ok: false, error: 'invalid-body' });
  }
  if (!payload || typeof payload !== 'object') return json(res, 400, { ok: false, error: 'invalid-body' });

  const { errors } = validate(payload);
  if (errors.length) return json(res, 400, { ok: false, error: 'validation', fields: errors });

  const lead = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    firstName: clean(payload.firstName, 60),
    lastName: clean(payload.lastName, 60),
    company: clean(payload.company, 100),
    email: clean(payload.email, 120),
    phone: clean(payload.phone, 40),
    service: clean(payload.service, 80),
    language: ['fr', 'en', 'ar', 'es'].includes(payload.language) ? payload.language : 'fr',
    message: clean(payload.message, 4000),
    ip: crypto.createHash('sha256').update(clientIp(req)).digest('hex').slice(0, 16)
  };

  try {
    await saveLead(lead);
    notifyWebhook(lead);
    console.log(`[BGS] Nouvelle demande ${lead.id} — ${lead.service}`);
    return json(res, 200, { ok: true, id: lead.id });
  } catch (err) {
    console.error('[BGS] Enregistrement:', err);
    return json(res, 500, { ok: false, error: 'server-error' });
  }
}

/* -------------------------------- Paramètres site -------------------------------- */

const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');
const DEFAULT_SETTINGS = { logo: '', site: {}, whatsapp: {}, social: {}, ui: {}, brands: null, brandLogos: null, hero: {}, footer: {}, home: {}, about: {}, services: {}, solutions: {}, projects: {}, contact: {}, i18n: {} };

function normalizeImageData(value, prefix) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  if (prefix && raw.startsWith(prefix)) return raw;
  const m = raw.match(/^data:image\/(png|jpeg|jpg|webp|gif|svg\+xml);base64,([A-Za-z0-9+/=]+)$/i);
  if (!m) return '';
  const mime = m[1].toLowerCase() === 'jpg' ? 'jpeg' : m[1].toLowerCase();
  if (m[2].length > 2 * 1024 * 1024 * 1.37) return '';
  return 'data:image/' + mime + ';base64,' + m[2];
}

function cleanObjStrings(obj, maxLen) {
  const out = {};
  if (!obj || typeof obj !== 'object') return out;
  Object.keys(obj).forEach(function (k) {
    const v = obj[k];
    if (typeof v === 'string') out[k] = clean(v, maxLen || 500);
    else if (typeof v === 'number' || typeof v === 'boolean') out[k] = v;
  });
  return out;
}

function normalizeSettings(raw) {
  const src = raw && typeof raw === 'object' ? raw : {};
  const site = cleanObjStrings(src.site, 300);
  const whatsapp = cleanObjStrings(src.whatsapp, 300);
  const social = cleanObjStrings(src.social, 300);
  const ui = src.ui && typeof src.ui === 'object' ? { showSetupNotice: !!src.ui.showSetupNotice } : {};
  const brands = Array.isArray(src.brands) ? src.brands.map((b) => clean(b, 60)).filter(Boolean).slice(0, 200) : null;
  let brandLogos = null;
  if (src.brandLogos && typeof src.brandLogos === 'object' && !Array.isArray(src.brandLogos)) {
    brandLogos = {};
    Object.keys(src.brandLogos).slice(0, 200).forEach(function (k) {
      const v = clean(src.brandLogos[k], 500);
      if (k && v) brandLogos[clean(k, 60)] = v;
    });
  }
  const logo = normalizeImageData(src.logo, 'assets/img/');
  const hero = src.hero && typeof src.hero === 'object' ? src.hero : {};
  const i18n = src.i18n && typeof src.i18n === 'object' ? src.i18n : {};
  return { logo, site, whatsapp, social, ui, brands, brandLogos, hero, i18n };
}

async function readSettings() {
  if (pool) {
    const { rows } = await pool.query('SELECT payload FROM bgs_settings WHERE id = 1');
    if (rows.length && rows[0].payload) return normalizeSettings(rows[0].payload);
    return {};
  }
  if (!fs.existsSync(SETTINGS_FILE)) return {};
  try { return normalizeSettings(JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8'))); } catch { return {}; }
}

async function writeSettings(settings) {
  const payload = normalizeSettings(settings);
  if (pool) {
    await pool.query(
      `INSERT INTO bgs_settings (id, payload, updated_at) VALUES (1, $1::jsonb, now())
       ON CONFLICT (id) DO UPDATE SET payload = EXCLUDED.payload, updated_at = now()`,
      [JSON.stringify(payload)]
    );
    return payload;
  }
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(payload, null, 2) + '\n', { mode: 0o600 });
  return payload;
}

async function handleSettingsGet(req, res) {
  const settings = await readSettings();
  return json(res, 200, { ok: true, settings });
}

async function handleSettingsUpdate(req, res) {
  if (!requireAdmin(req, res)) return;
  let payload;
  try { payload = await readJsonBody(req, MAX_PRODUCT_BODY); } catch (e) { return json(res, 400, { ok: false, error: e && e.message === 'Body too large' ? 'too-large' : 'invalid-body' }); }
  try {
    const settings = await writeSettings(payload);
    return json(res, 200, { ok: true, settings });
  } catch (err) {
    console.error('[BGS] Paramètres:', err);
    return json(res, 500, { ok: false, error: 'server-error' });
  }
}

/* ------------------------------ Administration ----------------------------- */

async function readAdmin() {
  if (pool) {
    const { rows } = await pool.query('SELECT username, salt, hash, created_at FROM bgs_admin WHERE id = 1');
    if (!rows.length) return null;
    const row = rows[0];
    return row.username && row.salt && row.hash
      ? { username: row.username, salt: row.salt, hash: row.hash, createdAt: row.created_at }
      : null;
  }
  if (!fs.existsSync(ADMIN_FILE)) return null;
  try {
    const value = JSON.parse(fs.readFileSync(ADMIN_FILE, 'utf8'));
    return value && value.username && value.salt && value.hash ? value : null;
  } catch {
    return null;
  }
}

async function writeAdmin(admin) {
  if (pool) {
    await pool.query(
      `INSERT INTO bgs_admin (id, username, salt, hash, created_at)
       VALUES (1, $1, $2, $3, $4)
       ON CONFLICT (id) DO UPDATE SET
         username = EXCLUDED.username, salt = EXCLUDED.salt,
         hash = EXCLUDED.hash, created_at = EXCLUDED.created_at`,
      [admin.username, admin.salt, admin.hash, admin.createdAt || new Date().toISOString()]
    );
    return;
  }
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(ADMIN_FILE, JSON.stringify(admin, null, 2) + '\n', { mode: 0o600 });
}

async function deleteAdmin() {
  if (pool) {
    await pool.query('DELETE FROM bgs_admin WHERE id = 1');
    return;
  }
  if (fs.existsSync(ADMIN_FILE)) fs.unlinkSync(ADMIN_FILE);
}

function hashPassword(password, salt) {
  return crypto.scryptSync(String(password), salt, 64).toString('hex');
}

function verifyPassword(password, admin) {
  try {
    const expected = Buffer.from(admin.hash, 'hex');
    const actual = Buffer.from(hashPassword(password, admin.salt), 'hex');
    return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
  } catch {
    return false;
  }
}

function parseCookies(req) {
  const out = {};
  String(req.headers.cookie || '').split(';').forEach(function (pair) {
    const index = pair.indexOf('=');
    if (index < 0) return;
    const key = pair.slice(0, index).trim();
    const value = pair.slice(index + 1).trim();
    if (key) out[key] = decodeURIComponent(value);
  });
  return out;
}

function cookieSuffix() {
  const secure = process.env.COOKIE_SECURE === 'true' || process.env.NODE_ENV === 'production';
  return '; Path=/; HttpOnly; SameSite=Strict' + (secure ? '; Secure' : '');
}

function sessionFromRequest(req) {
  const token = parseCookies(req)[COOKIE_NAME];
  if (!token) return null;
  const session = sessions.get(token);
  if (!session) return null;
  if (session.expires < Date.now()) {
    sessions.delete(token);
    return null;
  }
  return session;
}

function issueSession(res, username) {
  const token = crypto.randomBytes(32).toString('hex');
  sessions.set(token, { username, expires: Date.now() + SESSION_MS });
  if (sessions.size > 500) {
    const now = Date.now();
    for (const [key, value] of sessions) if (value.expires < now) sessions.delete(key);
  }
  return COOKIE_NAME + '=' + token + cookieSuffix() + '; Max-Age=' + Math.floor(SESSION_MS / 1000);
}

function clearSessionCookie() {
  return COOKIE_NAME + '=; ' + cookieSuffix() + '; Max-Age=0';
}

function requireAdmin(req, res) {
  const session = sessionFromRequest(req);
  if (!session) {
    json(res, 401, { ok: false, error: 'unauthorized' });
    return null;
  }
  return session;
}

async function handleAdminStatus(req, res) {
  const admin = await readAdmin();
  const session = sessionFromRequest(req);
  return json(res, 200, {
    ok: true,
    setupRequired: !admin,
    authenticated: !!session,
    username: session ? session.username : null
  });
}

async function handleAdminSetup(req, res) {
  if (await readAdmin()) return json(res, 409, { ok: false, error: 'account-exists' });
  let payload;
  try { payload = await readJsonBody(req); } catch { return json(res, 400, { ok: false, error: 'invalid-body' }); }

  const username = clean(payload.username, 32);
  const password = String(payload.password || '');
  if (!/^[A-Za-z0-9._-]{3,32}$/.test(username)) return json(res, 400, { ok: false, error: 'invalid-username' });
  if (password.length < 8 || password.length > 200) return json(res, 400, { ok: false, error: 'weak-password' });

  const salt = crypto.randomBytes(16).toString('hex');
  await writeAdmin({ username, salt, hash: hashPassword(password, salt), createdAt: new Date().toISOString() });
  const cookie = issueSession(res, username);
  console.log(`[BGS] Compte administrateur créé: ${username}`);
  return json(res, 200, { ok: true, authenticated: true, username }, { 'Set-Cookie': cookie });
}

async function handleAdminLogin(req, res) {
  if (loginRateLimited(clientIp(req))) return json(res, 429, { ok: false, error: 'too-many-requests' });
  let payload;
  try { payload = await readJsonBody(req); } catch { return json(res, 400, { ok: false, error: 'invalid-body' }); }

  const admin = await readAdmin();
  if (!admin) return json(res, 409, { ok: false, error: 'setup-required' });

  const username = clean(payload.username, 32);
  const password = String(payload.password || '');
  if (!username || !password) return json(res, 400, { ok: false, error: 'missing-credentials' });
  if (username !== admin.username || !verifyPassword(password, admin)) {
    return json(res, 401, { ok: false, error: 'invalid-credentials' });
  }

  const cookie = issueSession(res, admin.username);
  return json(res, 200, { ok: true, authenticated: true, username: admin.username }, { 'Set-Cookie': cookie });
}

function handleAdminLogout(req, res) {
  const token = parseCookies(req)[COOKIE_NAME];
  if (token) sessions.delete(token);
  return json(res, 200, { ok: true, authenticated: false }, { 'Set-Cookie': clearSessionCookie() });
}

async function handleAdminReset(req, res) {
  const expected = String(process.env.ADMIN_RESET_TOKEN || '').trim();
  if (!expected) return json(res, 404, { ok: false, error: 'not-found' });

  let payload;
  try { payload = await readJsonBody(req); } catch { return json(res, 400, { ok: false, error: 'invalid-body' }); }
  const token = String(payload.token || '');
  if (!token || token.length !== expected.length) return json(res, 401, { ok: false, error: 'unauthorized' });
  try {
    const ok = crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected));
    if (!ok) return json(res, 401, { ok: false, error: 'unauthorized' });
  } catch {
    return json(res, 401, { ok: false, error: 'unauthorized' });
  }

  await deleteAdmin();
  for (const key of sessions.keys()) sessions.delete(key);
  console.warn('[BGS] Compte administrateur réinitialisé via ADMIN_RESET_TOKEN.');
  return json(res, 200, { ok: true, setupRequired: true }, { 'Set-Cookie': clearSessionCookie() });
}

/* -------------------------------- Réalisations -------------------------------- */

const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');
const PROJECT_CATEGORIES = ['realisations'];

function normalizeProjectImage(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  if (/^assets\/img\/realisations\/[a-z0-9._-]+\.(png|jpe?g|webp|gif)$/i.test(raw)) return raw;
  return normalizeProductImage(raw);
}

function normalizeProject(raw, forcedId) {
  const source = raw && typeof raw === 'object' ? raw : {};
  const name = source.name && typeof source.name === 'object' ? source.name : { fr: source.name || '' };
  const description = source.description && typeof source.description === 'object' ? source.description : { fr: source.description || '' };
  const frName = clean(name.fr, 140) || 'Réalisation';
  const tags = Array.isArray(source.tags) ? source.tags.map((t) => clean(t, 40)).filter(Boolean).slice(0, 8) : [];
  return {
    id: forcedId || clean(source.id, 90) || 'realisation',
    category: PROJECT_CATEGORIES.includes(source.category) ? source.category : 'realisations',
    image: normalizeProjectImage(source.image),
    year: '',
    tags,
    name: {
      fr: frName,
      en: clean(name.en, 140) || frName,
      ar: clean(name.ar, 140) || frName,
      es: clean(name.es, 140) || frName
    },
    description: {
      fr: clean(description.fr, 500),
      en: clean(description.en, 500) || clean(description.fr, 500),
      ar: clean(description.ar, 500) || clean(description.fr, 500),
      es: clean(description.es, 500) || clean(description.fr, 500)
    }
  };
}

function defaultProjects() {
  try {
    const code = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'config.js'), 'utf8');
    const sandbox = { window: {} };
    vm.runInNewContext(code, sandbox, { filename: 'config.js', timeout: 1000 });
    const list = sandbox.window.BGS_CONFIG && sandbox.window.BGS_CONFIG.projects;
    const i18nCode = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'i18n.js'), 'utf8');
    const i18nBox = { window: {} };
    vm.runInNewContext(i18nCode, i18nBox, { filename: 'i18n.js', timeout: 1000 });
    const frItems = (((i18nBox.window.BGS_I18N || {}).fr || {}).projects || {}).items || [];
    const enItems = (((i18nBox.window.BGS_I18N || {}).en || {}).projects || {}).items || [];
    const arItems = (((i18nBox.window.BGS_I18N || {}).ar || {}).projects || {}).items || [];
    const esItems = (((i18nBox.window.BGS_I18N || {}).es || {}).projects || {}).items || [];
    if (Array.isArray(list)) return list.map((p, i) => normalizeProject(Object.assign({}, p, {
      name: { fr: (frItems[i] || {}).name, en: (enItems[i] || {}).name, ar: (arItems[i] || {}).name, es: (esItems[i] || {}).name },
      description: { fr: (frItems[i] || {}).description, en: (enItems[i] || {}).description, ar: (arItems[i] || {}).description, es: (esItems[i] || {}).description }
    })));
  } catch (err) {
    console.warn('[BGS] Réalisations initiales indisponibles:', err.message);
  }
  return [];
}

async function loadProjects() {
  if (pool) {
    const { rows } = await pool.query('SELECT id, category, image, name, description, tags FROM bgs_projects ORDER BY position ASC');
    if (rows.length) return rows.map((p) => normalizeProject(p));
    const initial = defaultProjects();
    await saveProjects(initial);
    return initial;
  }
  if (fs.existsSync(PROJECTS_FILE)) {
    try {
      const list = JSON.parse(fs.readFileSync(PROJECTS_FILE, 'utf8'));
      if (Array.isArray(list)) return list.map((p) => normalizeProject(p));
    } catch (err) {
      console.warn('[BGS] Réalisations illisibles, réinitialisation:', err.message);
    }
  }
  const list = defaultProjects();
  await saveProjects(list);
  return list;
}

async function saveProjects(list) {
  if (pool) {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      await client.query('DELETE FROM bgs_projects');
      for (let i = 0; i < list.length; i++) {
        const p = list[i];
        await client.query(
          `INSERT INTO bgs_projects (id, category, image, name, description, tags, position)
           VALUES ($1,$2,$3,$4::jsonb,$5::jsonb,$6::jsonb,$7)`,
          [p.id, p.category, p.image || '', JSON.stringify(p.name), JSON.stringify(p.description), JSON.stringify(p.tags || []), i]
        );
      }
      await client.query('COMMIT');
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
    return;
  }
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const tmp = PROJECTS_FILE + '.' + process.pid + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(list, null, 2) + '\n', { mode: 0o600 });
  fs.renameSync(tmp, PROJECTS_FILE);
}

function validateProject(payload) {
  const rawName = payload.name && typeof payload.name === 'object' ? payload.name : { fr: payload.name };
  const rawDescription = payload.description && typeof payload.description === 'object' ? payload.description : { fr: payload.description };
  const frName = clean(rawName.fr, 140);
  if (!frName) return { error: 'name-required' };
  const id = slugify(frName) + '-' + crypto.randomBytes(3).toString('hex');
  return { project: normalizeProject({ id, category: payload.category, image: payload.image, tags: payload.tags, name: rawName, description: rawDescription }, id) };
}

async function handleProjectCreate(req, res) {
  if (!requireAdmin(req, res)) return;
  let payload;
  try { payload = await readJsonBody(req, MAX_PRODUCT_BODY); } catch (e) { return json(res, 400, { ok: false, error: e && e.message === 'Body too large' ? 'image-too-large' : 'invalid-body' }); }
  const result = validateProject(payload);
  if (result.error) return json(res, 400, { ok: false, error: result.error });
  const list = await loadProjects();
  list.push(result.project);
  try { await saveProjects(list); return json(res, 200, { ok: true, project: result.project, projects: list }); }
  catch (err) { console.error('[BGS] Ajout réalisation:', err); return json(res, 500, { ok: false, error: 'server-error' }); }
}

async function handleProjectUpdate(req, res, id) {
  if (!requireAdmin(req, res)) return;
  let payload;
  try { payload = await readJsonBody(req, MAX_PRODUCT_BODY); } catch (e) { return json(res, 400, { ok: false, error: e && e.message === 'Body too large' ? 'image-too-large' : 'invalid-body' }); }
  const list = await loadProjects();
  const index = list.findIndex((p) => p.id === id);
  if (index < 0) return json(res, 404, { ok: false, error: 'not-found' });
  const rawName = payload.name && typeof payload.name === 'object' ? payload.name : { fr: payload.name };
  const rawDescription = payload.description && typeof payload.description === 'object' ? payload.description : { fr: payload.description };
  const frName = clean(rawName.fr, 140);
  if (!frName) return json(res, 400, { ok: false, error: 'name-required' });
  const existing = list[index];
  const image = payload.image ? normalizeProjectImage(payload.image) : (existing.image || '');
  const updated = normalizeProject({ id: existing.id, category: payload.category, image, tags: payload.tags, name: rawName, description: rawDescription }, existing.id);
  list[index] = updated;
  try { await saveProjects(list); return json(res, 200, { ok: true, project: updated, projects: list }); }
  catch (err) { console.error('[BGS] Mise à jour réalisation:', err); return json(res, 500, { ok: false, error: 'server-error' }); }
}

async function handleProjectDelete(req, res, id) {
  if (!requireAdmin(req, res)) return;
  const list = await loadProjects();
  const next = list.filter((p) => p.id !== id);
  if (next.length === list.length) return json(res, 404, { ok: false, error: 'not-found' });
  try { await saveProjects(next); return json(res, 200, { ok: true, projects: next }); }
  catch (err) { console.error('[BGS] Suppression réalisation:', err); return json(res, 500, { ok: false, error: 'server-error' }); }
}

/* -------------------------------- Catalogue -------------------------------- */

function normalizeProductImage(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  if (/^assets\/img\/products\/[a-z0-9._-]+\.(png|jpe?g|webp|gif)$/i.test(raw)) return raw;
  const m = raw.match(/^data:image\/(png|jpeg|jpg|webp|gif);base64,([A-Za-z0-9+/=]+)$/i);
  if (!m) return '';
  const mime = m[1].toLowerCase() === 'jpg' ? 'jpeg' : m[1].toLowerCase();
  const b64 = m[2];
  // ~2 Mo max en base64
  if (b64.length > 2 * 1024 * 1024 * 1.37) return '';
  return 'data:image/' + mime + ';base64,' + b64;
}

function normalizeProduct(raw, forcedId) {
  const source = raw && typeof raw === 'object' ? raw : {};
  const name = source.name && typeof source.name === 'object' ? source.name : {};
  const description = source.description && typeof source.description === 'object'
    ? source.description
    : { fr: source.description || '' };
  const frName = clean(name.fr, 140) || 'Produit';
  return {
    id: forcedId || clean(source.id, 90) || 'produit',
    category: CATEGORIES.includes(source.category) ? source.category : 'informatique',
    ref: clean(source.ref, 100) || 'À renseigner',
    stock: STOCKS.includes(source.stock) ? source.stock : 'available',
    image: normalizeProductImage(source.image),
    name: {
      fr: frName,
      en: clean(name.en, 140) || frName,
      ar: clean(name.ar, 140) || frName,
      es: clean(name.es, 140) || frName
    },
    description: {
      fr: clean(description.fr, 500),
      en: clean(description.en, 500) || clean(description.fr, 500),
      ar: clean(description.ar, 500) || clean(description.fr, 500),
      es: clean(description.es, 500) || clean(description.fr, 500)
    }
  };
}

function defaultProducts() {
  try {
    const code = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'config.js'), 'utf8');
    const sandbox = { window: {} };
    vm.runInNewContext(code, sandbox, { filename: 'config.js', timeout: 1000 });
    const list = sandbox.window.BGS_CONFIG && sandbox.window.BGS_CONFIG.products;
    if (Array.isArray(list)) return list.map((p) => normalizeProduct(p));
  } catch (err) {
    console.warn('[BGS] Catalogue initial indisponible:', err.message);
  }
  return [];
}

function mergeDefaultProducts(list) {
  const defaults = defaultProducts();
  if (!defaults.length || !Array.isArray(list) || !list.length) return { list, changed: false };
  const byId = new Map(defaults.map((p) => [p.id, p]));
  let changed = false;
  const next = list.map((p) => {
    const d = byId.get(p.id);
    if (!d) return p;
    // Mise à jour douce des anciens produits par défaut sans écraser les ajouts admin.
    const looksDefault = !p.image || p.ref === 'À renseigner' || p.stock === 'out' || p.stock === 'low';
    if (!looksDefault) return p;
    changed = true;
    return normalizeProduct(Object.assign({}, p, d, { id: p.id }), p.id);
  });
  return { list: next, changed };
}

async function loadProducts() {
  if (pool) {
    const { rows } = await pool.query(
      'SELECT id, category, ref, stock, name, description, image FROM bgs_products ORDER BY position ASC'
    );
    if (rows.length) {
      const merged = mergeDefaultProducts(rows.map((p) => normalizeProduct(p)));
      if (merged.changed) await saveProducts(merged.list);
      return merged.list;
    }
    const initial = defaultProducts();
    await saveProducts(initial);
    return initial;
  }
  if (fs.existsSync(PRODUCTS_FILE)) {
    try {
      const list = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8'));
      if (Array.isArray(list)) {
        const merged = mergeDefaultProducts(list.map((p) => normalizeProduct(p)));
        if (merged.changed) await saveProducts(merged.list);
        return merged.list;
      }
    } catch (err) {
      console.warn('[BGS] Catalogue illisible, réinitialisation:', err.message);
    }
  }
  const list = defaultProducts();
  await saveProducts(list);
  return list;
}

async function saveProducts(list) {
  if (pool) {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      await client.query('DELETE FROM bgs_products');
      for (let i = 0; i < list.length; i++) {
        const p = list[i];
        await client.query(
          `INSERT INTO bgs_products (id, category, ref, stock, name, description, image, position)
           VALUES ($1, $2, $3, $4, $5::jsonb, $6::jsonb, $7, $8)`,
          [p.id, p.category, p.ref, p.stock, JSON.stringify(p.name), JSON.stringify(p.description), p.image || '', i]
        );
      }
      await client.query('COMMIT');
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
    return;
  }
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const tmp = PRODUCTS_FILE + '.' + process.pid + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(list, null, 2) + '\n', { mode: 0o600 });
  fs.renameSync(tmp, PRODUCTS_FILE);
}

function slugify(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40) || 'produit';
}

function validateProduct(payload) {
  const rawName = payload.name && typeof payload.name === 'object' ? payload.name : { fr: payload.name };
  const rawDescription = payload.description && typeof payload.description === 'object'
    ? payload.description
    : { fr: payload.description };
  const frName = clean(rawName.fr, 140);
  if (!frName) return { error: 'name-required' };
  const id = slugify(frName) + '-' + crypto.randomBytes(3).toString('hex');
  return {
    product: normalizeProduct({
      id,
      category: payload.category,
      ref: payload.ref,
      stock: payload.stock,
      image: payload.image,
      name: rawName,
      description: rawDescription
    }, id)
  };
}

async function handleProductCreate(req, res) {
  if (!requireAdmin(req, res)) return;
  let payload;
  try { payload = await readJsonBody(req, MAX_PRODUCT_BODY); } catch (e) { return json(res, 400, { ok: false, error: e && e.message === 'Body too large' ? 'image-too-large' : 'invalid-body' }); }
  const result = validateProduct(payload);
  if (result.error) return json(res, 400, { ok: false, error: result.error });
  const list = await loadProducts();
  list.push(result.product);
  try {
    await saveProducts(list);
    return json(res, 200, { ok: true, product: result.product, products: list });
  } catch (err) {
    console.error('[BGS] Ajout produit:', err);
    return json(res, 500, { ok: false, error: 'server-error' });
  }
}

async function handleProductDelete(req, res, id) {
  if (!requireAdmin(req, res)) return;
  const list = await loadProducts();
  const next = list.filter((p) => p.id !== id);
  if (next.length === list.length) return json(res, 404, { ok: false, error: 'not-found' });
  try {
    await saveProducts(next);
    return json(res, 200, { ok: true, products: next });
  } catch (err) {
    console.error('[BGS] Suppression produit:', err);
    return json(res, 500, { ok: false, error: 'server-error' });
  }
}

async function handleProductUpdate(req, res, id) {
  if (!requireAdmin(req, res)) return;
  let payload;
  try { payload = await readJsonBody(req, MAX_PRODUCT_BODY); } catch (e) { return json(res, 400, { ok: false, error: e && e.message === 'Body too large' ? 'image-too-large' : 'invalid-body' }); }
  const list = await loadProducts();
  const index = list.findIndex((p) => p.id === id);
  if (index < 0) return json(res, 404, { ok: false, error: 'not-found' });
  const rawName = payload.name && typeof payload.name === 'object' ? payload.name : { fr: payload.name };
  const rawDescription = payload.description && typeof payload.description === 'object' ? payload.description : { fr: payload.description };
  const frName = clean(rawName.fr, 140);
  if (!frName) return json(res, 400, { ok: false, error: 'name-required' });
  const existing = list[index];
  const image = payload.image ? normalizeProductImage(payload.image) : (existing.image || '');
  const updated = normalizeProduct({
    id: existing.id,
    category: payload.category,
    ref: payload.ref,
    stock: payload.stock,
    image,
    name: rawName,
    description: rawDescription
  }, existing.id);
  list[index] = updated;
  try {
    await saveProducts(list);
    return json(res, 200, { ok: true, product: updated, products: list });
  } catch (err) {
    console.error('[BGS] Mise à jour produit:', err);
    return json(res, 500, { ok: false, error: 'server-error' });
  }
}

async function handleProductReset(req, res) {
  if (!requireAdmin(req, res)) return;
  const list = defaultProducts();
  try {
    await saveProducts(list);
    return json(res, 200, { ok: true, products: list });
  } catch (err) {
    console.error('[BGS] Réinitialisation catalogue:', err);
    return json(res, 500, { ok: false, error: 'server-error' });
  }
}

async function handleApi(req, res, url) {
  const p = url.pathname;

  if (p === '/api/contact') {
    if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method-not-allowed' });
    handleContact(req, res).catch(() => json(res, 500, { ok: false, error: 'server-error' }));
    return;
  }

  if (p === '/api/admin/status') {
    if (req.method !== 'GET') return json(res, 405, { ok: false, error: 'method-not-allowed' });
    return await handleAdminStatus(req, res);
  }
  if (p === '/api/admin/reset') {
    if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method-not-allowed' });
    return await handleAdminReset(req, res);
  }
  if (p === '/api/admin/setup') {
    if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method-not-allowed' });
    handleAdminSetup(req, res).catch(() => json(res, 500, { ok: false, error: 'server-error' }));
    return;
  }
  if (p === '/api/admin/login') {
    if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method-not-allowed' });
    handleAdminLogin(req, res).catch(() => json(res, 500, { ok: false, error: 'server-error' }));
    return;
  }
  if (p === '/api/admin/logout') {
    if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method-not-allowed' });
    return handleAdminLogout(req, res);
  }

  if (p === '/api/products') {
    if (req.method === 'GET') { const products = await loadProducts(); return json(res, 200, { ok: true, products }); }
    if (req.method === 'POST') { handleProductCreate(req, res).catch(() => json(res, 500, { ok: false, error: 'server-error' })); return; }
    return json(res, 405, { ok: false, error: 'method-not-allowed' });
  }
  if (p === '/api/products/reset') {
    if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method-not-allowed' });
    return await handleProductReset(req, res);
  }
  const productMatch = p.match(/^\/api\/products\/([^/]+)$/);
  if (productMatch) {
    let id;
    try { id = decodeURIComponent(productMatch[1]); } catch { return json(res, 400, { ok: false, error: 'invalid-id' }); }
    if (req.method === 'DELETE') return await handleProductDelete(req, res, id);
    if (req.method === 'PUT') { handleProductUpdate(req, res, id).catch(() => json(res, 500, { ok: false, error: 'server-error' })); return; }
    return json(res, 405, { ok: false, error: 'method-not-allowed' });
  }

  if (p === '/api/settings') {
    if (req.method === 'GET') { handleSettingsGet(req, res).catch(() => json(res, 500, { ok: false, error: 'server-error' })); return; }
    if (req.method === 'PUT') { handleSettingsUpdate(req, res).catch(() => json(res, 500, { ok: false, error: 'server-error' })); return; }
    return json(res, 405, { ok: false, error: 'method-not-allowed' });
  }

  if (p === '/api/projects') {
    if (req.method === 'GET') { const projects = await loadProjects(); return json(res, 200, { ok: true, projects }); }
    if (req.method === 'POST') { handleProjectCreate(req, res).catch(() => json(res, 500, { ok: false, error: 'server-error' })); return; }
    return json(res, 405, { ok: false, error: 'method-not-allowed' });
  }
  const projectMatch = p.match(/^\/api\/projects\/([^/]+)$/);
  if (projectMatch) {
    let id;
    try { id = decodeURIComponent(projectMatch[1]); } catch { return json(res, 400, { ok: false, error: 'invalid-id' }); }
    if (req.method === 'DELETE') return await handleProjectDelete(req, res, id);
    if (req.method === 'PUT') { handleProjectUpdate(req, res, id).catch(() => json(res, 500, { ok: false, error: 'server-error' })); return; }
    return json(res, 405, { ok: false, error: 'method-not-allowed' });
  }

  return json(res, 404, { ok: false, error: 'not-found' });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  if (url.pathname.startsWith('/api/')) {
    handleApi(req, res, url).catch((err) => {
      console.error('[BGS] API:', err);
      if (!res.headersSent) json(res, 500, { ok: false, error: 'server-error' });
    });
    return;
  }
  if (!['GET', 'HEAD'].includes(req.method)) return json(res, 405, { ok: false, error: 'method-not-allowed' });
  // Le dossier data/ contient les demandes et le compte admin : jamais accessible publiquement.
  if (url.pathname.startsWith('/data/')) return json(res, 404, { ok: false, error: 'not-found' });
  serveStatic(req, res, url.pathname);
});

initStore().then(() => {
  server.listen(PORT, HOST, () => {
    console.log(`BGS disponible sur http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('[BGS] Initialisation base de données:', err);
  process.exit(1);
});

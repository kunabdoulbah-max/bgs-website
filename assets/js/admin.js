/* ==========================================================================
   BGS — Espace administrateur (sans dépendance)
   ========================================================================== */
(function () {
  'use strict';

  var DICT = window.BGS_I18N || {};
  var LANGS = ['fr', 'en', 'ar', 'es'];

  function detectLang() {
    var fromUrl = (new URLSearchParams(window.location.search).get('lang') || '').toLowerCase();
    if (LANGS.indexOf(fromUrl) > -1) return fromUrl;
    try {
      var stored = localStorage.getItem('bgs-lang');
      if (LANGS.indexOf(stored) > -1) return stored;
    } catch (e) { /* stockage indisponible */ }
    return 'fr';
  }

  var lang = detectLang();

  function t(path, fallback) {
    var parts = String(path).split('.');
    var node = DICT[lang] || DICT.fr || {};
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return fallback != null ? fallback : '';
      node = node[parts[i]];
    }
    return node == null ? (fallback != null ? fallback : '') : String(node);
  }

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function api(url, options) {
    var settings = Object.assign({ credentials: 'same-origin' }, options || {});
    settings.headers = Object.assign({ 'Content-Type': 'application/json' }, (options && options.headers) || {});
    return fetch(url, settings)
      .then(function (res) { return res.json().catch(function () { return { ok: false, error: 'invalid-response' }; }); })
      .catch(function () { return { ok: false, error: 'network' }; });
  }

  function errorMessage(code) {
    var map = {
      'invalid-credentials': 'admin.invalid',
      'invalid-username': 'admin.required',
      'weak-password': 'admin.weak',
      'account-exists': 'admin.taken',
      'setup-required': 'admin.loginTitle',
      'missing-credentials': 'admin.required',
      'too-many-requests': 'admin.network',
      'network': 'admin.network',
      'invalid-body': 'admin.required'
    };
    return t(map[code] || 'admin.network', t('admin.network'));
  }

  function setError(message) {
    var el = document.getElementById('adminError');
    if (el) el.textContent = message || '';
  }

  function showConnected(username) {
    var form = document.getElementById('adminForm');
    var connected = document.getElementById('adminConnected');
    var title = document.getElementById('adminDynamicTitle');
    var note = document.getElementById('adminDynamicNote');
    var who = document.getElementById('adminWho');
    if (form) form.hidden = true;
    if (connected) connected.hidden = false;
    if (title) title.textContent = t('admin.loggedIn');
    if (note) note.textContent = t('admin.lead');
    if (who) who.textContent = t('admin.welcome').replace('{site}', esc(username || 'BGS'));
  }

  function showForm(setupRequired) {
    var form = document.getElementById('adminForm');
    var connected = document.getElementById('adminConnected');
    var title = document.getElementById('adminDynamicTitle');
    var note = document.getElementById('adminDynamicNote');
    var submit = document.getElementById('adminSubmit');
    var password = form && form.elements.password;
    if (form) form.hidden = false;
    if (connected) connected.hidden = true;
    if (title) title.textContent = t(setupRequired ? 'admin.setupTitle' : 'admin.loginTitle');
    if (note) note.textContent = t('admin.accountNote');
    if (submit) submit.textContent = t(setupRequired ? 'admin.setupButton' : 'admin.loginButton');
    if (password) password.setAttribute('autocomplete', setupRequired ? 'new-password' : 'current-password');
    form.dataset.mode = setupRequired ? 'setup' : 'login';
  }

  function readFileAsDataUrl(file) {
    return new Promise(function (resolve) {
      var r = new FileReader();
      r.onload = function () { resolve(String(r.result || '')); };
      r.onerror = function () { resolve(''); };
      r.readAsDataURL(file);
    });
  }

  async function initSettings() {
    var card = document.getElementById('siteSettingsCard');
    var form = document.getElementById('siteSettingsForm');
    if (!card || !form) return;
    card.hidden = false;
    var statusEl = document.getElementById('siteSettingsStatus');
    var res = await api('/api/settings');
    var s = (res && res.settings) || {};
    var site = s.site || {}; var wa = s.whatsapp || {}; var social = s.social || {};
    form.elements.siteEmail.value = site.email || '';
    form.elements.sitePhone.value = site.phone || '';
    form.elements.sitePhoneInternational.value = site.phoneInternational || '';
    form.elements.whatsappNumber.value = wa.number || '';
    form.elements.siteAddress.value = site.address || '';
    form.elements.siteCity.value = site.city || '';
    form.elements.siteCountry.value = site.country || '';
    form.elements.siteUrl.value = site.url || '';
    form.elements.socialLinkedin.value = social.linkedin || '';
    form.elements.socialFacebook.value = social.facebook || '';
    form.elements.socialInstagram.value = social.instagram || '';
    if (form.dataset.bound) return;
    form.dataset.bound = '1';
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      if (statusEl) statusEl.textContent = 'Enregistrement…';
      var logo = '';
      if (form.elements.logo.files && form.elements.logo.files[0]) {
        var file = form.elements.logo.files[0];
        if (file.size > 2 * 1024 * 1024) { if (statusEl) statusEl.textContent = 'Logo trop volumineux (max 2 Mo).'; return; }
        logo = await readFileAsDataUrl(file);
      }
      var payload = {
        logo: logo || (s.logo || ''),
        site: { email: form.elements.siteEmail.value.trim(), phone: form.elements.sitePhone.value.trim(), phoneInternational: form.elements.sitePhoneInternational.value.trim(), address: form.elements.siteAddress.value.trim(), city: form.elements.siteCity.value.trim(), country: form.elements.siteCountry.value.trim(), url: form.elements.siteUrl.value.trim() },
        whatsapp: { number: form.elements.whatsappNumber.value.trim() },
        social: { linkedin: form.elements.socialLinkedin.value.trim(), facebook: form.elements.socialFacebook.value.trim(), instagram: form.elements.socialInstagram.value.trim() }
      };
      var submit = document.getElementById('siteSettingsSubmit');
      if (submit) submit.disabled = true;
      var result = await api('/api/settings', { method: 'PUT', body: JSON.stringify(payload) });
      if (submit) submit.disabled = false;
      if (result.ok) { if (statusEl) statusEl.textContent = 'Paramètres enregistrés. Rechargez le site pour voir le nouveau logo partout.'; if (result.settings) s = result.settings; }
      else { if (statusEl) statusEl.textContent = errorMessage(result.error); }
    });
  }

  async function init() {
    var form = document.getElementById('adminForm');
    var status = await api('/api/admin/status');
    if (!status.ok) {
      setError(t('admin.network'));
      if (form) form.hidden = true;
      return;
    }
    if (status.authenticated) {
      showConnected(status.username);
      initSettings();
    } else {
      showForm(!!status.setupRequired);
    }

    if (!form || form.dataset.bound) return;
    form.dataset.bound = '1';
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var username = (form.elements.username.value || '').trim();
      var password = form.elements.password.value || '';
      setError('');
      if (!username || !password) {
        setError(t('admin.required'));
        return;
      }
      var isSetup = form.dataset.mode === 'setup';
      if (isSetup && password.length < 8) {
        setError(t('admin.weak'));
        return;
      }
      var submit = document.getElementById('adminSubmit');
      if (submit) submit.disabled = true;
      var result = await api(isSetup ? '/api/admin/setup' : '/api/admin/login', {
        method: 'POST',
        body: JSON.stringify({ username: username, password: password })
      });
      if (submit) submit.disabled = false;
      if (!result.ok || !result.authenticated) {
        setError(errorMessage(result.error));
        return;
      }
      window.location.reload();
    });

    var logout = document.getElementById('adminLogout');
    if (logout) {
      logout.addEventListener('click', async function () {
        var result = await api('/api/admin/logout', { method: 'POST' });
        if (result.ok) window.location.reload();
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

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
      var target = 'produits.html?lang=' + encodeURIComponent(lang);
      window.location.assign(target);
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

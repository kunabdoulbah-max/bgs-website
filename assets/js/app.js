/* ==========================================================================
   BGS — Application front-end (sans dépendance)
   ========================================================================== */
(function () {
  'use strict';

  var CFG = window.BGS_CONFIG || {};
  var DICT = window.BGS_I18N || {};
  var LANGS = ['fr', 'en', 'ar', 'es'];
  var DEFAULT_LANG = 'fr';
  var lang = DEFAULT_LANG;

  /* ------------------------------- Icônes ---------------------------------- */
  var ICONS = {
    server: '<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6"/>',
    network: '<rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v4M5 17v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    headset: '<path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M21 16a2 2 0 0 1-2 2h-2v-5h2a2 2 0 0 1 2 2v1ZM3 16a2 2 0 0 0 2 2h2v-5H5a2 2 0 0 0-2 2v1ZM18 18a4 4 0 0 1-4 4h-3"/>',
    cloud: '<path d="M17.5 19H7a5 5 0 0 1-.9-9.9A7 7 0 0 1 19.5 10.5 4.5 4.5 0 0 1 17.5 19Z"/><path d="M12 12v5m-2-2 2 2 2-2"/>',
    code: '<path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 4l-4 16"/>',
    camera: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    check: '<path d="m5 12 5 5L20 7"/>',
    'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    'arrow-up': '<path d="M7 17 17 7M8 7h9v9"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    whatsapp: '<path d="M20.5 3.5A11.8 11.8 0 0 0 12.1.4C5.6.4.4 5.6.4 12.1c0 2.1.6 4.1 1.6 5.9L.2 23.8l5.9-1.7a11.7 11.7 0 0 0 5.9 1.5h.1c6.5 0 11.7-5.2 11.7-11.7 0-2.8-1-5.5-2.7-7.6ZM12.1 21.4h-.1a9.7 9.7 0 0 1-4.9-1.4l-.4-.2-3.5.9.9-3.4-.2-.4a9.8 9.8 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8a9.7 9.7 0 0 1 6.9 2.9 9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.7-9.8 9.7Zm5.4-7.3c-.3-.2-1.7-.9-2-1s-.5-.1-.7.2-.8 1-.9 1.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.8 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    'chevron-right': '<path d="m9 6 6 6-6 6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>',
    activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5"/>',
    fiber: '<path d="M3 7h7l4 10h7M3 17h7l4-10h7"/><circle cx="3" cy="7" r="1.5"/><circle cx="21" cy="7" r="1.5"/><circle cx="3" cy="17" r="1.5"/><circle cx="21" cy="17" r="1.5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    sparkles: '<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 22v-4h4v4"/>',
    send: '<path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM6 9H2v12h4V9ZM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" fill="currentColor" stroke="none"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" fill="currentColor" stroke="none"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    x: '<path d="M4 4l16 16M20 4 4 20" />',
    youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none"/>'
  };

  function icon(name, cls) {
    var p = ICONS[name] || ICONS.info;
    return '<svg class="icon ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + p + '</svg>';
  }

  function paintIcons(root) {
    (root || document).querySelectorAll('[data-icon]').forEach(function (el) {
      if (el.dataset.iconPainted) return;
      el.innerHTML = icon(el.dataset.icon, el.dataset.iconClass || '');
      el.dataset.iconPainted = '1';
    });
  }

  /* ------------------------------ Utilities -------------------------------- */
  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function t(path, fallback) {
    var parts = String(path).split('.');
    var node = DICT[lang] || DICT[DEFAULT_LANG] || {};
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return fallback != null ? fallback : '';
      var key = /^\d+$/.test(parts[i]) ? Number(parts[i]) : parts[i];
      node = node[key];
    }
    if (node == null) return fallback != null ? fallback : '';
    return typeof node === 'string' ? node : fallback || '';
  }

  function replaceTokens(text) {
    return String(text).replace(/\{year\}/g, String(new Date().getFullYear()))
      .replace(/\{site\}/g, esc((CFG.site || {}).name || 'BGS'));
  }

  function renderMd(text) {
    return replaceTokens(esc(text)).replace(/\*([^*]+)\*/g, '<strong>$1</strong>');
  }

  function pageKey() {
    var key = (document.body.dataset.page || 'home').split(' ')[0];
    return key;
  }

  function isPlaceholder(value) { return !value || !String(value).trim(); }

  /* ---------------------------- Language engine ---------------------------- */
  function detectLang() {
    var params = new URLSearchParams(window.location.search);
    var fromUrl = (params.get('lang') || '').toLowerCase();
    if (LANGS.indexOf(fromUrl) > -1) return fromUrl;
    try {
      var stored = localStorage.getItem('bgs-lang');
      if (LANGS.indexOf(stored) > -1) return stored;
    } catch (e) { /* storage indisponible */ }
    return DEFAULT_LANG;
  }

  function updateLinks() {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || /^(https?:|mailto:|tel:|#|javascript:|wa\.me)/i.test(href)) return;
      try {
        var u = new URL(href, window.location.href);
        if (u.origin !== window.location.origin) return;
        u.searchParams.set('lang', lang);
        a.setAttribute('href', u.pathname + u.search + u.hash);
      } catch (e) { /* lien invalide ignoré */ }
    });
  }

  function applyStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = t(el.dataset.i18n, el.textContent.trim());
      el.textContent = replaceTokens(val);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = renderMd(t(el.dataset.i18nHtml, el.innerHTML));
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var pairs = el.dataset.i18nAttr.split('|');
      pairs.forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length === 2) el.setAttribute(bits[0], replaceTokens(t(bits[1])));
      });
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
    });
    document.title = (t('meta.' + pageKey() + '.title') || 'BGS') + ' | ' + ((CFG.site || {}).name || 'BGS');
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.' + pageKey() + '.description'));
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', document.title);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t('meta.' + pageKey() + '.description'));
    document.querySelectorAll('[data-page-title]').forEach(function (el) { el.textContent = t('meta.' + pageKey() + '.title'); });
  }

  function setLang(next, options) {
    if (LANGS.indexOf(next) < 0) return;
    lang = next;
    var meta = DICT[lang] || DICT[DEFAULT_LANG];
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', meta.dir || 'ltr');
    try { localStorage.setItem('bgs-lang', lang); } catch (e) { /* ignore */ }

    if (!options || options.url !== false) {
      try {
        var u = new URL(window.location.href);
        u.searchParams.set('lang', lang);
        window.history.replaceState({ lang: lang }, '', u.toString());
      } catch (e) { /* ignore */ }
    }

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.langBtn === lang));
      btn.classList.toggle('is-active', btn.dataset.langBtn === lang);
    });

    applyStaticTranslations();
    renderDynamicContent();
    ensureProductPopup();
    populateServiceSelect();
    paintIcons(document);
    updateConfigValues();
    updateWhatsApp();
    setupForm();
    updateLinks();
    if (options && options.focus) {
      var active = document.querySelector('[data-lang-btn="' + lang + '"]');
      if (active) active.focus();
    }
  }

  /* -------------------------- Dynamic content blocks ------------------------ */
  var RENDERERS = {};

  /**
   * Bandeau défilant : marques PC / télécom + produits du catalogue BGS.
   * Les produits ajoutés depuis l'admin sont chargés via /api/products avant
   * le premier rendu (voir loadSiteState) et apparaissent donc ici aussi.
   * La liste est dupliquée pour une boucle sans coupure ; la copie est
   * masquée aux lecteurs d'écran afin de ne pas annoncer deux fois les noms.
   */
  RENDERERS.brandMarquee = function () {
    var brands = (CFG.brands || []).filter(function (name) { return !!String(name).trim(); });
    var products = (getProducts() || []).map(function (p) {
      var name = localized(p && p.name);
      return name ? String(name).trim() : '';
    }).filter(Boolean);
    if (!brands.length && !products.length) return '';

    var tag = esc(t('brands.productTag'));

    function group(hidden) {
      return '<div class="brand-marquee-group"' + (hidden ? ' aria-hidden="true"' : '') + '>' +
        brands.map(function (name) {
          return '<span class="brand-chip">' + esc(name) + '</span>';
        }).join('') +
        products.map(function (name) {
          return '<span class="brand-chip brand-chip-product">' +
            '<span class="brand-chip-tag">' + tag + '</span>' + esc(name) + '</span>';
        }).join('') + '</div>';
    }

    return group(false) + group(true);
  };

  RENDERERS.homeTrust = function () {
    return (DICT[lang].home.trust || []).map(function (item, i) {
      return '<div class="trust-item reveal" style="transition-delay:' + (i * 45) + 'ms">' +
        '<span data-icon="' + ['server', 'network', 'shield', 'headset', 'cloud', 'code'][i % 6] + '"></span>' +
        '<span>' + esc(item) + '</span></div>';
    }).join('');
  };

  RENDERERS.homeWhy = function () {
    var icons = ['target', 'activity', 'layers', 'lock', 'info', 'users'];
    var items = DICT[lang].home.why.items;
    return items.map(function (item, i) {
      return '<article class="why-item reveal" style="transition-delay:' + ((i % 3) * 70) + 'ms">' +
        '<span class="why-num">0' + (i + 1) + '</span>' +
        '<span data-icon="' + icons[i % icons.length] + '"></span>' +
        '<h3>' + esc(item.title) + '</h3><p>' + esc(item.text) + '</p></article>';
    }).join('');
  };

  RENDERERS.homeSteps = function () {
    return DICT[lang].home.process.steps.map(function (s, i) {
      return '<article class="step reveal" style="transition-delay:' + (i * 80) + 'ms">' +
        '<div class="step-dot">' + String(i + 1).padStart(2, '0') + '</div>' +
        '<h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></article>';
    }).join('');
  };

  RENDERERS.homeStats = function () {
    return DICT[lang].home.stats.map(function (s) {
      return '<div class="stat reveal"><strong>' + esc(s.value) + '</strong><span>' + esc(s.label) + '</span></div>';
    }).join('');
  };

  RENDERERS.homeServices = function () {
    var services = DICT[lang].services.items.slice(0, 4);
    return services.map(function (s, i) {
      return serviceCard(s, i);
    }).join('');
  };

  function serviceCard(s, i) {
    return '<article class="service-card reveal" style="transition-delay:' + ((i % 4) * 65) + 'ms">' +
      '<span class="ghost-num">' + String(i + 1).padStart(2, '0') + '</span>' +
      '<div class="service-icon" data-icon="' + esc(s.icon) + '"></div>' +
      '<h3>' + esc(s.name) + '</h3>' +
      '<p>' + esc(s.short) + '</p>' +
      '<ul class="service-features">' + s.features.slice(0, 3).map(function (f) {
        return '<li><span data-icon="check" data-icon-class="icon-sm"></span><span>' + esc(f) + '</span></li>';
      }).join('') + '</ul>' +
      '<div class="service-card-actions">' +
        '<a class="btn btn-outline-dark btn-sm" href="services.html#' + esc(s.id) + '">' + esc(t('common.learnMore')) + '</a>' +
        quoteLink(s.id, 'btn-primary btn-sm') +
      '</div></article>';
  }

  RENDERERS.servicesGrid = function () {
    return DICT[lang].services.items.map(function (s, i) { return detailCard(s, i); }).join('');
  };

  function detailCard(s, i) {
    var id = 'detail-' + s.id;
    return '<article class="detail-card reveal" id="' + esc(s.id) + '" style="transition-delay:' + ((i % 2) * 70) + 'ms">' +
      '<div class="detail-top">' +
        '<div class="service-icon" data-icon="' + esc(s.icon) + '"></div>' +
        '<div><h3>' + esc(s.name) + '</h3><p>' + esc(s.description) + '</p></div>' +
      '</div>' +
      '<div class="detail-body">' +
        '<div class="detail-label">' + esc(t('common.features')) + '</div>' +
        '<ul class="detail-list">' + s.features.map(function (f) {
          return '<li><span data-icon="check" data-icon-class="icon-sm"></span><span>' + esc(f) + '</span></li>';
        }).join('') + '</ul>' +
      '</div>' +
      '<button type="button" class="detail-more" data-detail-toggle="' + esc(id) + '" aria-expanded="false" aria-controls="' + esc(id) + '">' +
        '<span data-label-expand>' + esc(t('common.expand')) + '</span><span data-icon="chevron"></span>' +
      '</button>' +
      '<div class="detail-extra" id="' + esc(id) + '">' +
        '<h4>' + esc(s.detailTitle) + '</h4>' +
        '<div class="detail-extra-grid">' +
          '<div><div class="detail-label">' + esc(t('common.deliverables')) + '</div><ul class="detail-list">' +
            s.deliverables.map(function (d) { return '<li><span data-icon="check-circle" data-icon-class="icon-sm"></span><span>' + esc(d) + '</span></li>'; }).join('') +
          '</ul></div>' +
          '<div><div class="detail-label">' + esc(t('common.benefits')) + '</div><ul class="detail-list">' +
            s.benefits.map(function (b) { return '<li><span data-icon="sparkles" data-icon-class="icon-sm"></span><span>' + esc(b) + '</span></li>'; }).join('') +
          '</ul></div>' +
        '</div>' +
      '</div>' +
      '<div class="detail-actions">' +
        '<button type="button" class="btn btn-outline-dark btn-sm" data-detail-link="' + esc(id) + '">' + esc(t('common.learnMore')) + '</button>' +
        quoteLink(s.id, 'btn-primary btn-sm') +
      '</div>' +
    '</article>';
  }

  RENDERERS.aboutValues = function () {
    var icons = ['target', 'shield', 'sparkles', 'users', 'check-circle', 'layers'];
    return DICT[lang].about.values.items.map(function (v, i) {
      return '<article class="value-card reveal" style="transition-delay:' + ((i % 3) * 60) + 'ms">' +
        '<div class="value-icon" data-icon="' + icons[i % icons.length] + '"></div>' +
        '<h3>' + esc(v.title) + '</h3><p>' + esc(v.text) + '</p></article>';
    }).join('');
  };

  RENDERERS.aboutTeam = function () {
    var icons = ['network', 'server', 'shield', 'users'];
    return (DICT[lang].about.team.items || []).map(function (item, i) {
      return '<article class="value-card reveal" style="transition-delay:' + (i * 60) + 'ms">' +
        '<div class="value-icon" data-icon="' + icons[i % icons.length] + '"></div>' +
        '<h3>' + esc(item.title) + '</h3><p>' + esc(item.text) + '</p></article>';
    }).join('');
  };

  RENDERERS.aboutApproach = function () {
    var icons = ['info', 'layers', 'activity', 'bolt'];
    return DICT[lang].about.approach.items.map(function (a, i) {
      return '<article class="approach-card reveal" style="transition-delay:' + (i * 70) + 'ms">' +
        '<span class="approach-num">0' + (i + 1) + '</span>' +
        '<div data-icon="' + icons[i % icons.length] + '"></div>' +
        '<h3>' + esc(a.title) + '</h3><p>' + esc(a.text) + '</p></article>';
    }).join('');
  };

  RENDERERS.solutionTabs = function () {
    return DICT[lang].solutions.domains.map(function (d, i) {
      return '<button type="button" class="solution-tab" role="tab" id="tab-' + esc(d.id) + '" aria-controls="panel-' + esc(d.id) + '" aria-selected="' + (i === 0) + '" data-solution-tab="' + esc(d.id) + '">' +
        '<span data-icon="' + esc(d.icon) + '" data-icon-class="icon-sm"></span>' + esc(d.name) + '</button>';
    }).join('');
  };

  RENDERERS.solutionPanels = function () {
    return DICT[lang].solutions.domains.map(function (d, i) {
      return '<div class="solution-panel' + (i === 0 ? ' is-active' : '') + '" role="tabpanel" id="panel-' + esc(d.id) + '" aria-labelledby="tab-' + esc(d.id) + '" data-solution-panel="' + esc(d.id) + '">' +
        '<div class="solution-grid">' +
          '<div class="solution-intro"><span data-icon="' + esc(d.icon) + '"></span><h3>' + esc(d.name) + '</h3><p>' + esc(d.text) + '</p></div>' +
          '<div class="solution-list">' + d.items.map(function (item) {
            return '<article class="solution-item"><span data-icon="check-circle"></span><h4>' + esc(item) + '</h4></article>';
          }).join('') + '</div>' +
        '</div></div>';
    }).join('');
  };

  RENDERERS.needGrid = function () {
    return DICT[lang].solutions.byNeed.items.map(function (n, i) {
      return '<article class="need-card reveal" style="transition-delay:' + (i * 60) + 'ms">' +
        '<span data-icon="' + ['building', 'network', 'shield', 'cloud'][i % 4] + '"></span>' +
        '<h3>' + esc(n.title) + '</h3><p>' + esc(n.text) + '</p></article>';
    }).join('');
  };

  RENDERERS.projectFilters = function () {
    var f = DICT[lang].projects.filters;
    var keys = ['all'];
    (CFG.projects || []).forEach(function (p) {
      if (p.category && keys.indexOf(p.category) < 0) keys.push(p.category);
    });
    return keys.map(function (k, i) {
      return '<button type="button" class="filter-btn' + (i === 0 ? ' is-active' : '') + '" data-filter="' + k + '" aria-pressed="' + (i === 0) + '">' + esc(f[k] || k) + '</button>';
    }).join('');
  };

  RENDERERS.projectsGrid = function () {
    var list = (CFG.projects || []);
    var copy = DICT[lang].projects;
    return list.map(function (p, i) {
      var text = copy.items[i] || { name: p.id, description: '' };
      return '<article class="project-card reveal" data-category="' + esc(p.category) + '" style="transition-delay:' + ((i % 3) * 65) + 'ms">' +
        '<div class="project-media"><img src="' + esc(p.image) + '" alt="' + esc(text.name) + '" loading="lazy" decoding="async">' +
          '<span class="project-tag">' + esc(copy.filters[p.category] || p.category) + '</span></div>' +
        '<div class="project-body"><h3>' + esc(text.name) + '</h3><p>' + esc(text.description) + '</p>' +
          '<div class="project-tech">' + (p.tags || []).map(function (tag) { return '<span>' + esc(tag) + '</span>'; }).join('') + '</div>' +
        '</div></article>';
    }).join('');
  };

  RENDERERS.topbarContact = function () {
    var s = CFG.site || {};
    var out = '<a href="#" data-wa title="' + esc(t('wa.tooltip')) + '"><span data-icon="whatsapp" data-icon-class="icon-sm"></span><span data-wa-label>' + esc(t('wa.header')) + '</span></a>';
    if (!isPlaceholder(s.phoneInternational)) out += '<a href="tel:+' + esc(s.phoneInternational) + '"><span data-icon="phone" data-icon-class="icon-sm"></span><span>' + esc(s.phone || s.phoneInternational) + '</span></a>';
    if (!isPlaceholder(s.email)) out += '<a href="mailto:' + esc(s.email) + '"><span data-icon="mail" data-icon-class="icon-sm"></span><span>' + esc(s.email) + '</span></a>';
    return out;
  };

  RENDERERS.footerContact = function () {
    var s = CFG.site || {};
    var out = '';
    if (!isPlaceholder(s.address)) out += '<div class="info-row" style="padding-inline:0"><div class="info-icon" data-icon="pin"></div><div><strong>' + esc(s.address) + '</strong></div></div>';
    if (!isPlaceholder(s.phone)) out += '<div class="info-row" style="padding-inline:0"><div class="info-icon" data-icon="phone"></div><div><a href="tel:+' + esc(s.phoneInternational || '') + '">' + esc(s.phone) + '</a></div></div>';
    if (!isPlaceholder(s.email)) out += '<div class="info-row" style="padding-inline:0"><div class="info-icon" data-icon="mail"></div><div><a href="mailto:' + esc(s.email) + '">' + esc(s.email) + '</a></div></div>';
    out += '<a href="#" class="footer-wa" data-wa title="' + esc(t('wa.tooltip')) + '"><span data-icon="whatsapp" data-icon-class="icon-sm"></span><span data-wa-label>' + esc(t('wa.header')) + '</span></a>';
    return out;
  };

  RENDERERS.productFilters = function () {
    var cats = DICT[lang].products.categories;
    return Object.keys(cats).map(function (key, i) {
      return '<button type="button" class="filter-btn' + (i === 0 ? ' is-active' : '') + '" data-product-filter="' + key + '" aria-pressed="' + (i === 0) + '">' + esc(cats[key]) + '</button>';
    }).join('');
  };

  RENDERERS.productsGrid = function () {
    var list = getProducts();
    var copy = DICT[lang].products;
    var icons = { telecom: 'phone', informatique: 'server', reseau: 'network', fibre: 'fiber', satellite: 'activity' };
    return list.map(function (p, i) {
      var status = copy.stock[p.stock] || copy.stock.available;
      var cls = p.stock === 'out' ? 'out' : (p.stock === 'low' ? 'low' : 'available');
      return '<article class="product-card reveal" data-product-category="' + esc(p.category) + '" style="transition-delay:' + ((i % 4) * 60) + 'ms">' +
        '<div class="product-media"><span data-icon="' + (icons[p.category] || 'layers') + '"></span>' +
          '<span class="stock-badge ' + cls + '"><span class="dot"></span>' + esc(status) + '</span></div>' +
        '<div class="product-body">' +
          '<span class="product-category">' + esc(copy.categories[p.category] || p.category) + '</span>' +
          '<h3>' + esc(localized(p.name)) + '</h3>' +
          '<p>' + esc(localized(p.description)) + '</p>' +
          '<div class="product-ref">' + esc(copy.ref) + ' : <strong>' + esc(localized(p.ref, 'common.toConfigure')) + '</strong></div>' +
          (adminState.authenticated ? '<button type="button" class="product-delete" data-product-delete="' + esc(p.id) + '" title="' + esc(copy.admin.delete) + '" aria-label="' + esc(copy.admin.delete) + '"><span data-icon="close"></span></button>' : '') +
          '<a class="text-link" href="contact.html?devis=1&produit=' + encodeURIComponent(p.id) + '">' + esc(t('common.requestQuote')) + '<span data-icon="arrow"></span></a>' +
        '</div></article>';
    }).join('');
  };

  RENDERERS.stockStats = function () {
    var list = getProducts();
    var available = list.filter(function (p) { return p.stock === 'available'; }).length;
    var alert = list.filter(function (p) { return p.stock !== 'available'; }).length;
    var copy = DICT[lang].products.stats;
    return [
      { value: list.length, label: copy.total, icon: 'layers' },
      { value: available, label: copy.available, icon: 'check-circle' },
      { value: alert, label: copy.alert, icon: 'info' }
    ].map(function (s, i) {
      return '<div class="stock-stat reveal" style="transition-delay:' + (i * 70) + 'ms"><span data-icon="' + s.icon + '"></span><strong>' + s.value + '</strong><span>' + esc(s.label) + '</span></div>';
    }).join('');
  };

  RENDERERS.stockItems = function () {
    var icons = ['activity', 'bolt', 'layers', 'lock'];
    return (DICT[lang].products.management.items || []).map(function (item, i) {
      return '<article class="approach-card reveal" style="transition-delay:' + (i * 60) + 'ms">' +
        '<span class="approach-num">0' + (i + 1) + '</span><div data-icon="' + icons[i % icons.length] + '"></div>' +
        '<h3>' + esc(item.title) + '</h3><p>' + esc(item.text) + '</p></article>';
    }).join('');
  };

  RENDERERS.productAdmin = function () {
    var copy = DICT[lang].products;
    var a = copy.admin;
    if (!adminState.ready) return '<div class="product-admin reveal"><p>' + esc(t('common.learnMore')) + '</p></div>';
    if (!adminState.authenticated) {
      return '<div class="product-admin admin-gate reveal">' +
        '<div class="section-head center"><div><span class="eyebrow">' + esc(DICT[lang].admin.eyebrow) + '</span>' +
        '<h2>' + esc(DICT[lang].admin.title) + '</h2><p>' + esc(a.loginRequired) + '</p></div></div>' +
        '<div class="admin-gate-actions"><a class="btn btn-primary" href="admin.html">' + esc(DICT[lang].admin.loginButton) + '<span data-icon="arrow"></span></a></div>' +
        '</div>';
    }
    var cats = Object.keys(copy.categories).filter(function (k) { return k !== 'all'; });
    var catOptions = cats.map(function (k) {
      return '<option value="' + esc(k) + '">' + esc(copy.categories[k]) + '</option>';
    }).join('');
    var stockOptions = ['available', 'low', 'out'].map(function (k) {
      return '<option value="' + esc(k) + '">' + esc(copy.stock[k]) + '</option>';
    }).join('');
    return '<div class="product-admin reveal">' +
      '<div class="section-head center"><div><span class="eyebrow">' + esc(a.eyebrow) + '</span><h2>' + esc(a.title) + '</h2><p>' + esc(a.catalogNote) + '</p></div></div>' +
      '<div class="admin-session"><span data-icon="lock"></span><span>' + esc(DICT[lang].admin.loggedIn) + ' : <strong>' + esc(adminState.username || '') + '</strong></span>' +
        '<button type="button" id="adminLogout" class="btn btn-sm btn-outline-dark">' + esc(a.logout) + '</button></div>' +
      '<form id="productForm" class="product-form" novalidate>' +
        '<label>' + esc(a.name) + '<input type="text" name="nameFr" required maxlength="120"></label>' +
        '<label>' + esc(a.nameEn) + '<input type="text" name="nameEn" maxlength="120"></label>' +
        '<label>' + esc(a.nameEs) + '<input type="text" name="nameEs" maxlength="120"></label>' +
        '<label>' + esc(a.nameAr) + '<input type="text" name="nameAr" maxlength="120" dir="rtl"></label>' +
        '<label>' + esc(a.description) + '<textarea name="description" rows="3" maxlength="400"></textarea></label>' +
        '<label>' + esc(a.descriptionEs) + '<textarea name="descriptionEs" rows="3" maxlength="400"></textarea></label>' +
        '<label>' + esc(a.category) + '<select name="category">' + catOptions + '</select></label>' +
        '<label>' + esc(a.ref) + '<input type="text" name="ref" maxlength="80"></label>' +
        '<label>' + esc(a.stock) + '<select name="stock">' + stockOptions + '</select></label>' +
        '<div class="product-form-actions"><button type="submit" class="btn btn-primary">' + esc(a.add) + '</button>' +
          '<button type="button" class="btn btn-outline-dark" id="productReset">' + esc(a.reset) + '</button></div>' +
        '<p class="product-status" data-product-status role="status" aria-live="polite"></p>' +
      '</form></div>';
  };

  RENDERERS.fibreItems = function () {
    return (DICT[lang].fibre.items || []).map(function (item, i) {
      return '<article class="media-point reveal" style="transition-delay:' + (i * 70) + 'ms">' +
        '<span class="media-point-num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span>' + esc(item) + '</span></article>';
    }).join('');
  };

  RENDERERS.expertiseItems = function () {
    return (DICT[lang].expertise.items || []).map(function (item, i) {
      return '<article class="media-point reveal" style="transition-delay:' + (i * 70) + 'ms">' +
        '<span class="media-point-num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span>' + esc(item) + '</span></article>';
    }).join('');
  };

  function featuredProduct() {
    var list = getProducts() || [];
    var id = CFG.featuredProductId || 'cable-fibre';
    var picked = list.filter(function (p) { return p.id === id; })[0];
    if (picked) return picked;
    return list.filter(function (p) { return p.stock !== 'out'; })[0] || list[0] || null;
  }

  RENDERERS.productWeek = function () {
    var p = featuredProduct();
    if (!p) return '<p class="pop-empty">' + esc(t('common.toConfigure')) + '</p>';
    var copy = DICT[lang].productWeek;
    var status = (DICT[lang].products.stock || {})[p.stock] || '';
    var href = 'contact.html?devis=1&produit=' + encodeURIComponent(p.id);
    return '<div class="pop-product">' +
      '<h3>' + esc(localized(p.name)) + '</h3>' +
      '<p>' + esc(localized(p.description)) + '</p>' +
      '<div class="pop-meta">' +
        '<span>' + esc(copy.ref) + ' : <strong>' + esc(localized(p.ref, 'common.toConfigure')) + '</strong></span>' +
        '<span>' + esc(copy.stock) + ' : <strong>' + esc(status) + '</strong></span>' +
      '</div>' +
      '<a class="btn btn-primary" href="' + href + '">' + esc(t('common.requestQuote')) + '<span data-icon="arrow"></span></a>' +
      '</div>';
  };

  RENDERERS.productWeekPopup = function (isOpen) {
    var c = DICT[lang].productWeek;
    return '<button type="button" class="product-pop-tab" data-pop-open aria-haspopup="dialog" aria-controls="productPop">' +
        '<span data-icon="sparkles"></span><span>' + esc(c.open) + '</span></button>' +
      '<div class="product-pop" id="productPop" role="dialog" aria-modal="true" aria-labelledby="productPopTitle"' + (isOpen ? '' : ' hidden') + '>' +
        '<div class="product-pop-backdrop" data-pop-close></div>' +
        '<div class="product-pop-card" role="document">' +
          '<button type="button" class="product-pop-close" data-pop-close aria-label="' + esc(c.close) + '"><span data-icon="close"></span></button>' +
          '<div class="product-pop-media"><span data-icon="sparkles"></span><span class="pop-badge">' + esc(c.eyebrow) + '</span></div>' +
          '<div class="product-pop-body">' +
            '<span class="eyebrow">' + esc(c.eyebrow) + '</span>' +
            '<h2 id="productPopTitle">' + esc(c.title) + '</h2>' +
            '<div data-render="productWeek"></div>' +
            '<p class="product-pop-note">' + esc(c.note) + '</p>' +
            '<a class="text-link" href="produits.html" data-pop-close>' + esc(c.catalog) + '<span data-icon="arrow"></span></a>' +
          '</div>' +
        '</div>' +
      '</div>';
  };

  var POPUP_ROOT_ID = 'productWeekRoot';
  var POPUP_SEEN_KEY = 'bgs-product-week-seen-v1';
  var popupAutoScheduled = false;

  function popupSeen() {
    try { return localStorage.getItem(POPUP_SEEN_KEY) === '1'; } catch (e) { return false; }
  }

  function markPopupSeen() {
    try { localStorage.setItem(POPUP_SEEN_KEY, '1'); } catch (e) { /* stockage indisponible */ }
  }

  function openProductPopup() {
    var dialog = document.getElementById('productPop');
    if (!dialog) return;
    dialog.hidden = false;
    document.body.classList.add('pop-open');
    var close = dialog.querySelector('.product-pop-close');
    if (close) close.focus();
  }

  function closeProductPopup() {
    var dialog = document.getElementById('productPop');
    if (!dialog || dialog.hidden) return;
    dialog.hidden = true;
    document.body.classList.remove('pop-open');
    var tab = document.querySelector('[data-pop-open]');
    if (tab) tab.focus();
  }

  function bindProductPopup() {
    var root = document.getElementById(POPUP_ROOT_ID);
    if (!root || root.dataset.bound) return;
    root.dataset.bound = '1';
    root.addEventListener('click', function (e) {
      if (e.target.closest('[data-pop-open]')) {
        e.preventDefault();
        openProductPopup();
        return;
      }
      var closer = e.target.closest('[data-pop-close]');
      if (!closer) return;
      markPopupSeen();
      if (closer.tagName !== 'A') e.preventDefault();
      closeProductPopup();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeProductPopup();
    });
  }

  function ensureProductPopup() {
    if (document.body.dataset.page === 'admin') return;
    var root = document.getElementById(POPUP_ROOT_ID);
    var wasOpen = false;
    if (root) {
      var current = root.querySelector('.product-pop');
      wasOpen = current && !current.hidden;
    } else {
      root = document.createElement('div');
      root.id = POPUP_ROOT_ID;
      document.body.appendChild(root);
    }
    root.innerHTML = RENDERERS.productWeekPopup(wasOpen);
    var slot = root.querySelector('[data-render="productWeek"]');
    if (slot) slot.innerHTML = RENDERERS.productWeek();
    paintIcons(root);
    bindProductPopup();
  }

  function updatePopupProduct() {
    var slot = document.querySelector('#' + POPUP_ROOT_ID + ' [data-render="productWeek"]');
    if (!slot) return;
    slot.innerHTML = RENDERERS.productWeek();
    paintIcons(slot);
  }

  function maybeAutoShowPopup() {
    if (document.body.dataset.page === 'admin') return;
    if (popupAutoScheduled || popupSeen()) return;
    popupAutoScheduled = true;
    window.setTimeout(function () {
      var dialog = document.getElementById('productPop');
      if (!dialog || dialog.hidden === false) return;
      openProductPopup();
    }, 2200);
  }

  RENDERERS.itsupportFeatures = function () {
    var icons = ['headset', 'message', 'server', 'bolt', 'activity', 'target'];
    return (DICT[lang].itsupport.features.items || []).map(function (item, i) {
      return '<article class="value-card reveal" style="transition-delay:' + ((i % 3) * 60) + 'ms">' +
        '<div class="value-icon" data-icon="' + icons[i % icons.length] + '"></div>' +
        '<h3>' + esc(item.title) + '</h3><p>' + esc(item.text) + '</p></article>';
    }).join('');
  };

  RENDERERS.itsupportBenefits = function () {
    var icons = ['users', 'bolt', 'shield'];
    return (DICT[lang].itsupport.benefits.items || []).map(function (item, i) {
      return '<article class="approach-card reveal" style="transition-delay:' + (i * 70) + 'ms">' +
        '<span class="approach-num">0' + (i + 1) + '</span><div data-icon="' + icons[i % icons.length] + '"></div>' +
        '<h3>' + esc(item.title) + '</h3><p>' + esc(item.text) + '</p></article>';
    }).join('');
  };

  RENDERERS.contactInfo = function () {
    var s = CFG.site || {};
    var rows = [
      { icon: 'mail', label: t('contact.info.email'), key: 'email', value: s.email, link: s.email ? 'mailto:' + s.email : '' },
      { icon: 'phone', label: t('contact.info.phone'), key: 'phone', value: s.phone, link: s.phoneInternational ? 'tel:+' + s.phoneInternational : '' },
      { icon: 'pin', label: t('contact.info.address'), key: 'address', value: s.address, link: '' },
      { icon: 'clock', label: t('contact.info.hours'), key: 'hours', value: s.hours, link: '' }
    ];
    return rows.map(function (r) {
      var empty = isPlaceholder(r.value);
      var inner = '<span>' + esc(r.label) + '</span>' +
        (empty
          ? '<span class="placeholder">' + esc(t('common.toConfigure')) + '</span>'
          : (r.link ? '<a href="' + esc(r.link) + '">' + esc(r.value) + '</a>' : '<strong>' + esc(r.value) + '</strong>'));
      return '<div class="info-row"><div class="info-icon" data-icon="' + r.icon + '"></div><div>' + inner + '</div></div>';
    }).join('');
  };

  RENDERERS.contactFaq = function () {
    return DICT[lang].contact.faq.items.map(function (f) {
      return '<details class="faq-item"><summary>' + esc(f.q) + '</summary><p>' + esc(f.a) + '</p></details>';
    }).join('');
  };

  function populateServiceSelect() {
    var select = document.querySelector('[data-service-select]');
    if (!select) return;
    var previous = select.value;
    var preset = new URLSearchParams(window.location.search).get('service') || '';
    select.innerHTML = '<option value="">' + esc(t('contact.form.servicePlaceholder')) + '</option>' +
      DICT[lang].services.items.map(function (s) {
        return '<option value="' + esc(s.id) + '">' + esc(s.name) + '</option>';
      }).join('') + '<option value="autre">' + esc(t('contact.form.other')) + '</option>';
    var wanted = previous || preset;
    select.value = wanted && (wanted === 'autre' || DICT[lang].services.items.some(function (s) { return s.id === wanted; })) ? wanted : '';
  }

  RENDERERS.footerQuick = function () {
    var keys = ['home', 'about', 'services', 'solutions', 'projects', 'products', 'contact'];
    var hrefs = ['index.html', 'a-propos.html', 'services.html', 'solutions.html', 'realisations.html', 'produits.html', 'contact.html'];
    return keys.map(function (k, i) {
      return '<li><a href="' + hrefs[i] + '">' + esc(t('nav.' + k)) + '</a></li>';
    }).join('');
  };

  RENDERERS.footerServices = function () {
    return DICT[lang].services.items.map(function (s) {
      return '<li><a href="services.html#' + esc(s.id) + '">' + esc(s.name) + '</a></li>';
    }).join('');
  };

  RENDERERS.footerSocial = function () {
    var social = CFG.social || {};
    return ['linkedin', 'facebook', 'instagram', 'x', 'youtube'].filter(function (k) { return !isPlaceholder(social[k]); }).map(function (k) {
      return '<a href="' + esc(social[k]) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(k) + '" data-icon="' + k + '"></a>';
    }).join('');
  };

  RENDERERS.legalSections = function () {
    var sections = (DICT[lang][pageKey()] || {}).sections || [];
    return sections.map(function (s) {
      return '<section class="legal-section"><h2>' + esc(s.title) + '</h2><p>' + esc(s.body) + '</p></section>';
    }).join('');
  };

  function localized(value, fallbackKey) {
    if (value && typeof value === 'object') {
      return value[lang] || value[DEFAULT_LANG] || value.fr || '';
    }
    return value || (fallbackKey ? t(fallbackKey) : '');
  }

  var PRODUCT_STORE = 'bgs-products-v1';
  var productState = { list: null, api: false };
  var adminState = { ready: false, authenticated: false, username: null, setupRequired: false };

  function api(url, options) {
    var settings = Object.assign({ credentials: 'same-origin' }, options || {});
    settings.headers = Object.assign({ 'Content-Type': 'application/json' }, (options && options.headers) || {});
    return fetch(url, settings)
      .then(function (res) { return res.json().catch(function () { return { ok: false, error: 'invalid-response' }; }); })
      .catch(function () { return { ok: false, error: 'network' }; });
  }

  async function loadSiteState() {
    var products = await api('/api/products');
    if (products.ok && Array.isArray(products.products)) {
      productState.list = products.products;
      productState.api = true;
    }
    var status = await api('/api/admin/status');
    adminState.ready = true;
    if (status.ok) {
      adminState.authenticated = !!status.authenticated;
      adminState.username = status.username || null;
      adminState.setupRequired = !!status.setupRequired;
    }
  }

  function readProductStore() {
    try {
      var raw = JSON.parse(localStorage.getItem(PRODUCT_STORE) || '{}');
      return { added: raw.added || [], removed: raw.removed || [] };
    } catch (e) {
      return { added: [], removed: [] };
    }
  }

  function writeProductStore(store) {
    try { localStorage.setItem(PRODUCT_STORE, JSON.stringify(store)); } catch (e) { /* stockage indisponible */ }
  }

  function getProducts() {
    if (productState.list) return productState.list.slice();
    var store = readProductStore();
    var removed = store.removed || [];
    var base = (CFG.products || []).filter(function (p) { return removed.indexOf(p.id) < 0; });
    return base.concat(store.added || []);
  }

  function productStatusMessage(message) {
    var el = document.querySelector('[data-product-status]');
    if (el) el.textContent = message || '';
  }

  function quoteLink(serviceId, cls) {
    var href = 'contact.html?devis=1' + (serviceId ? '&service=' + encodeURIComponent(serviceId) : '');
    return '<a class="btn ' + (cls || '') + '" href="' + href + '">' + esc(t('common.requestQuote')) + '</a>';
  }

  function renderDynamicContent() {
    var currentFilter = document.querySelector('.filter-btn.is-active');
    var activeFilter = currentFilter ? currentFilter.dataset.filter : 'all';
    var activeSolution = document.querySelector('.solution-tab[aria-selected="true"]');
    var activeSolutionId = activeSolution ? activeSolution.dataset.solutionTab : null;
    var activeProductFilter = document.querySelector('.filter-btn.is-active[data-product-filter]');
    var urlCategory = new URLSearchParams(window.location.search).get('category');
    var validCategories = ['fibre', 'reseau', 'telecom', 'satellite', 'informatique'];
    var activeProductCategory = validCategories.indexOf(urlCategory) > -1
      ? urlCategory
      : (activeProductFilter ? activeProductFilter.dataset.productFilter : 'all');

    document.querySelectorAll('[data-render]').forEach(function (el) {
      var fn = RENDERERS[el.dataset.render];
      if (fn) el.innerHTML = fn();
    });
    paintIcons(document);
    bindProductActions();

    if (activeFilter !== 'all' || document.querySelector('[data-render="projectsGrid"]')) applyProjectFilter(activeFilter);
    if (activeProductCategory !== 'all' || document.querySelector('[data-render="productsGrid"]')) applyProductFilter(activeProductCategory);
    if (activeSolutionId) selectSolution(activeSolutionId);

    document.querySelectorAll('[data-detail-toggle], [data-detail-link]').forEach(function (btn) {
      var id = btn.dataset.detailToggle || btn.dataset.detailLink;
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', function () {
        var panel = document.getElementById(id);
        if (!panel) return;
        var open = !panel.classList.contains('is-open');
        panel.classList.toggle('is-open', open);
        document.querySelectorAll('[data-detail-toggle="' + id + '"]').forEach(function (b) {
          b.setAttribute('aria-expanded', String(open));
          var label = b.querySelector('[data-label-expand]');
          if (label) label.textContent = t(open ? 'common.collapse' : 'common.expand');
          var ic = b.querySelector('[data-icon]');
          if (ic) { ic.innerHTML = icon('chevron'); ic.dataset.iconPainted = '1'; }
        });
        if (btn.hasAttribute('data-detail-link') && open) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });

    bindProductFilters();

    document.querySelectorAll('[data-solution-tab]').forEach(function (tab) {
      if (tab.dataset.bound) return;
      tab.dataset.bound = '1';
      tab.addEventListener('click', function () { selectSolution(tab.dataset.solutionTab); });
    });

    document.querySelectorAll('[data-filter]').forEach(function (btn) {
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', function () { applyProjectFilter(btn.dataset.filter); });
    });

    observeReveals();
  }

  function bindProductFilters() {
    document.querySelectorAll('[data-product-filter]').forEach(function (btn) {
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', function () {
        var cat = btn.dataset.productFilter;
        applyProductFilter(cat);
        if (window.history && window.history.replaceState) {
          var url = new URL(window.location.href);
          if (cat === 'all') url.searchParams.delete('category');
          else url.searchParams.set('category', cat);
          window.history.replaceState(null, '', url);
        }
      });
    });
  }

  function refreshProducts() {
    var targets = ['productFilters', 'productsGrid', 'stockStats', 'brandMarquee'];
    targets.forEach(function (name) {
      var el = document.querySelector('[data-render="' + name + '"]');
      var fn = RENDERERS[name];
      if (el && fn) el.innerHTML = fn();
    });
    paintIcons(document);
    bindProductFilters();
    bindProductActions();
    updatePopupProduct();
    applyProductFilter('all');
  }

  function bindProductActions() {
    document.querySelectorAll('[data-product-delete]').forEach(function (btn) {
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', async function () {
        var id = btn.dataset.productDelete;
        btn.disabled = true;
        var result = await api('/api/products/' + encodeURIComponent(id), { method: 'DELETE' });
        if (result.ok && Array.isArray(result.products)) {
          productState.list = result.products;
          refreshProducts();
          productStatusMessage(DICT[lang].products.admin.deleted);
        } else {
          btn.disabled = false;
          productStatusMessage(DICT[lang].admin.network);
        }
      });
    });

    var form = document.getElementById('productForm');
    if (form && !form.dataset.bound) {
      form.dataset.bound = '1';
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        var f = form.elements;
        var nameFr = (f.nameFr.value || '').trim();
        if (!nameFr) {
          productStatusMessage(DICT[lang].products.admin.required);
          f.nameFr.focus();
          return;
        }
        var text = (f.description.value || '').trim();
        var esText = (f.descriptionEs && f.descriptionEs.value || '').trim() || text;
        var payload = {
          category: f.category.value,
          ref: (f.ref.value || '').trim() || t('common.toConfigure'),
          stock: f.stock.value,
          name: {
            fr: nameFr,
            en: (f.nameEn.value || '').trim() || nameFr,
            es: (f.nameEs && f.nameEs.value || '').trim() || nameFr,
            ar: (f.nameAr.value || '').trim() || nameFr
          },
          description: { fr: text, en: text, es: esText, ar: text }
        };
        productStatusMessage(DICT[lang].common.learnMore);
        var result = await api('/api/products', { method: 'POST', body: JSON.stringify(payload) });
        if (result.ok && Array.isArray(result.products)) {
          productState.list = result.products;
          form.reset();
          refreshProducts();
          productStatusMessage(DICT[lang].products.admin.success);
        } else {
          productStatusMessage(DICT[lang].admin.network);
        }
      });
    }

    var reset = document.getElementById('productReset');
    if (reset && !reset.dataset.bound) {
      reset.dataset.bound = '1';
      reset.addEventListener('click', async function () {
        var result = await api('/api/products/reset', { method: 'POST' });
        if (result.ok && Array.isArray(result.products)) {
          productState.list = result.products;
          refreshProducts();
          productStatusMessage(DICT[lang].products.admin.resetOk);
        } else {
          productStatusMessage(DICT[lang].admin.network);
        }
      });
    }

    var logout = document.getElementById('adminLogout');
    if (logout && !logout.dataset.bound) {
      logout.dataset.bound = '1';
      logout.addEventListener('click', async function () {
        var result = await api('/api/admin/logout', { method: 'POST' });
        if (result.ok) {
          adminState.authenticated = false;
          adminState.username = null;
          renderDynamicContent();
          productStatusMessage(DICT[lang].products.admin.loginRequired);
        }
      });
    }
  }

  function applyProductFilter(cat) {
    document.querySelectorAll('[data-product-filter]').forEach(function (b) {
      var on = b.dataset.productFilter === cat;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    document.querySelectorAll('.product-card').forEach(function (card) {
      card.hidden = !(cat === 'all' || card.dataset.productCategory === cat);
    });
  }

  function selectSolution(id) {
    document.querySelectorAll('[data-solution-tab]').forEach(function (tab) {
      var on = tab.dataset.solutionTab === id;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
    });
    document.querySelectorAll('[data-solution-panel]').forEach(function (panel) {
      panel.classList.toggle('is-active', panel.dataset.solutionPanel === id);
    });
  }

  function applyProjectFilter(cat) {
    document.querySelectorAll('[data-filter]').forEach(function (b) {
      var on = b.dataset.filter === cat;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    document.querySelectorAll('.project-card').forEach(function (card) {
      card.hidden = !(cat === 'all' || card.dataset.category === cat);
    });
  }

  /* --------------------------- Config & WhatsApp ---------------------------- */
  function updateConfigValues() {
    document.querySelectorAll('[data-config-value]').forEach(function (el) {
      var key = el.dataset.configValue.split('.').reduce(function (o, k) { return o && o[k]; }, CFG);
      if (isPlaceholder(key)) {
        el.textContent = t('common.toConfigure');
        el.classList.add('is-placeholder');
        if (el.tagName === 'A') { el.removeAttribute('href'); el.setAttribute('aria-disabled', 'true'); }
      } else {
        el.textContent = key;
        el.classList.remove('is-placeholder');
        el.removeAttribute('aria-disabled');
      }
    });
    var notice = document.querySelector('[data-setup-notice]');
    if (notice) {
      var empty = isPlaceholder((CFG.site || {}).email) || isPlaceholder((CFG.site || {}).phone) || isPlaceholder((CFG.whatsapp || {}).number) || isPlaceholder((CFG.site || {}).address);
      notice.hidden = !(empty && CFG.ui && CFG.ui.showSetupNotice);
    }
  }

  function whatsappUrl() {
    var num = String((CFG.whatsapp || {}).number || '').replace(/\D/g, '');
    if (!num) return null;
    return 'https://wa.me/' + num + '?text=' + encodeURIComponent(t('wa.message'));
  }

  function updateWhatsApp() {
    var url = whatsappUrl();
    document.querySelectorAll('[data-wa]').forEach(function (el) {
      el.setAttribute('title', url ? t('wa.tooltip') : t('wa.notConfigured'));
      el.setAttribute('aria-label', url ? t('wa.tooltip') : t('wa.notConfigured'));
      if (url) {
        el.removeAttribute('aria-disabled');
        el.setAttribute('href', url);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      } else {
        el.setAttribute('aria-disabled', 'true');
        el.setAttribute('href', '#');
      }
      var label = el.querySelector('[data-wa-label]');
      if (label) label.textContent = url ? t('wa.header') : t('common.toConfigure');
    });
    var noNumber = document.querySelectorAll('[data-wa-number-status]');
    noNumber.forEach(function (el) { el.textContent = url ? t('wa.header') : t('common.toConfigure'); });
  }

  /* --------------------------------- Form ---------------------------------- */
  var formBound = false;
  var formStartedAt = Date.now();

  function setupForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    if (!formBound) {
      formStartedAt = Date.now();
      form.addEventListener('submit', onSubmit);
      var reset = document.getElementById('form-reset');
      if (reset) reset.addEventListener('click', function () {
        form.reset();
        clearErrors(form);
        hideFormMessage();
        formStartedAt = Date.now();
        var first = form.querySelector('input');
        if (first) first.focus();
      });
      form.querySelectorAll('input, select, textarea').forEach(function (field) {
        field.addEventListener('input', function () {
          var wrapper = field.closest('.field, .checkbox-field');
          if (wrapper) wrapper.classList.remove('has-error');
        });
      });
      formBound = true;
    }
    // Le libellé du consentement et le bouton sont traduits par applyStaticTranslations
  }

  function clearErrors(form) {
    form.querySelectorAll('.has-error').forEach(function (el) { el.classList.remove('has-error'); });
  }

  function showFieldError(field, message) {
    var wrapper = field.closest('.field, .checkbox-field');
    if (!wrapper) return;
    wrapper.classList.add('has-error');
    var err = wrapper.querySelector('.field-error');
    if (err) err.textContent = message;
  }

  function validateForm(form) {
    clearErrors(form);
    var ok = true;
    var checks = [
      ['firstName', /^[\s\S]{2,}$/, 'validation.firstName'],
      ['lastName', /^[\s\S]{2,}$/, 'validation.lastName'],
      ['email', /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'validation.email'],
      ['phone', /^[+\d][\d\s().-]{6,}$/, 'validation.phone'],
      ['service', /.+/, 'validation.service'],
      ['message', /^[\s\S]{10,}$/, 'validation.message']
    ];
    checks.forEach(function (c) {
      var el = form.elements[c[0]];
      if (!el) return;
      var value = String(el.value || '').trim();
      // Téléphone facultatif : on ne valide que s'il est rempli
      if (c[0] === 'phone' && !value) return;
      if (!c[1].test(value)) { showFieldError(el, t(c[2])); ok = false; }
    });
    var consent = form.elements.consent;
    if (consent && !consent.checked) { showFieldError(consent, t('validation.consent')); ok = false; }
    return ok;
  }

  function hideFormMessage() {
    var m = document.getElementById('form-message');
    if (!m) return;
    m.className = 'form-message';
    m.innerHTML = '';
  }

  function showFormMessage(type, title, text) {
    var m = document.getElementById('form-message');
    if (!m) return;
    m.className = 'form-message is-visible ' + type;
    m.innerHTML = '<strong>' + esc(title) + '</strong>' + esc(text);
    m.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function onSubmit(event) {
    event.preventDefault();
    var form = event.currentTarget;
    hideFormMessage();

    var hp = form.elements.website;
    var elapsed = Date.now() - formStartedAt;
    var minTime = Number((CFG.ui || {}).minFormTime) || 0;
    if ((hp && hp.value.trim()) || elapsed < minTime) {
      showFormMessage('error', t('contact.form.errorTitle'), t('validation.spam'));
      return;
    }
    if (!validateForm(form)) return;

    var submit = form.querySelector('[type="submit"]');
    var original = submit ? submit.innerHTML : '';
    if (submit) {
      submit.disabled = true;
      submit.innerHTML = '<span class="spinner"></span>' + esc(t('contact.form.sending'));
    }

    var data = {
      firstName: form.elements.firstName.value.trim(),
      lastName: form.elements.lastName.value.trim(),
      company: form.elements.company ? form.elements.company.value.trim() : '',
      email: form.elements.email.value.trim(),
      phone: form.elements.phone ? form.elements.phone.value.trim() : '',
      service: form.elements.service.value,
      message: form.elements.message.value.trim(),
      language: lang,
      website: hp ? hp.value : '',
      _elapsed: elapsed
    };

    var endpoint = (CFG.contact || {}).endpoint || '';
    if (!endpoint) {
      showFormMessage('error', t('contact.form.errorTitle'), t('validation.network'));
      restoreSubmit(submit, original);
      return;
    }

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    }).then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json().catch(function () { return { ok: true }; });
    }).then(function (res) {
      if (res && res.ok === false) throw new Error('rejected');
      showFormMessage('success', t('contact.form.successTitle'), t('contact.form.successText'));
      form.reset();
      clearErrors(form);
      if (formStartedAt) formStartedAt = Date.now();
      var resetBtn = document.getElementById('form-reset');
      if (resetBtn) resetBtn.hidden = false;
    }).catch(function () {
      showFormMessage('error', t('contact.form.errorTitle'), t('contact.form.errorText'));
    }).finally(function () { restoreSubmit(submit, original); });
  }

  function restoreSubmit(submit, html) {
    if (!submit) return;
    submit.disabled = false;
    submit.innerHTML = html;
  }

  /* ------------------------------- UI details ------------------------------ */
  function setupHeader() {
    var header = document.querySelector('.site-header');
    if (header) {
      var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 12); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
    var toggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.mobile-nav');
    var backdrop = document.querySelector('.nav-backdrop');
    function closeMenu() {
      if (!nav) return;
      nav.classList.remove('is-open');
      if (backdrop) backdrop.classList.remove('is-open');
      if (toggle) { toggle.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
      document.body.classList.remove('menu-open');
    }
    function openMenu() {
      if (!nav) return;
      nav.classList.add('is-open');
      if (backdrop) backdrop.classList.add('is-open');
      if (toggle) { toggle.classList.add('is-open'); toggle.setAttribute('aria-expanded', 'true'); }
      document.body.classList.add('menu-open');
    }
    if (toggle) toggle.addEventListener('click', function () {
      if (nav && nav.classList.contains('is-open')) closeMenu(); else openMenu();
    });
    if (backdrop) backdrop.addEventListener('click', closeMenu);
    var navClose = document.querySelector('.mobile-nav-close');
    if (navClose) navClose.addEventListener('click', closeMenu);
    if (nav) nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (btn.dataset.langBtn !== lang) setLang(btn.dataset.langBtn, { focus: true });
        closeMenu();
      });
    });

    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav > a, .mobile-nav > a').forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('?')[0];
      if (href === path) a.classList.add('is-active');
    });
  }

  var revealObserver = null;
  function observeReveals() {
    var items = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    }
    items.forEach(function (el) { revealObserver.observe(el); });
  }

  function setupPresets() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('devis') === '1') {
      var card = document.querySelector('.form-head h2');
      if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  /* ---------------------------------- Init ---------------------------------- */
  async function init() {
    lang = detectLang();
    setupHeader();
    setupForm();
    setupPresets();
    await loadSiteState();
    setLang(lang, { url: false });
    observeReveals();
    maybeAutoShowPopup();

    // Met à jour les liens après que le navigateur ait restauré l'état
    window.addEventListener('pageshow', updateLinks);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

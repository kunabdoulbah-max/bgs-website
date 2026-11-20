/**
 * BGS — CONFIGURATION CENTRALISÉE
 * ------------------------------------------------------------------
 * Modifiez CE fichier pour renseigner les informations réelles de BGS.
 * Aucune page n'a besoin d'être modifiée.
 * Les champs laissés vides affichent un placeholder explicite
 * (« À renseigner ») au lieu d'une information inventée.
 */
(function (global) {
  'use strict';

  global.BGS_CONFIG = {
    site: {
      name: 'BGS',
      // URL publique du site (utilisée pour le canonical, le sitemap et les métadonnées)
      url: 'https://www.bgs.example',
      // Titre suffixe dans les balises <title>
      titleSuffix: 'BGS — Solutions informatiques & transformation numérique',
      email: '',            // Ex. : contact@bgs.example
      phone: '',            // Ex. : +222 00 00 00 00 (affiché tel quel)
      phoneInternational: '', // Ex. : 22200000000 (pour les liens tel:)
      address: '',          // Ex. : Immeuble BGS, Nouakchott, Mauritanie
      city: '',
      country: 'Mauritanie'
    },

    whatsapp: {
      /**
       * Numéro professionnel WhatsApp au format international,
       * SANS le signe +, sans espace et sans tiret.
       * Numéro fourni : 46071669 — indicatif +222 (Mauritanie) ajouté.
       * Exemple : "22212345678"
       */
      number: '22246071669',
      // Messages préremplis traduits automatiquement (voir i18n.js, clé wa.message)
      // Le bouton est désactivé tant que le numéro n'est pas renseigné.
    },

    /** Réseaux sociaux — laissez vide pour masquer le lien */
    social: {
      linkedin: '',
      facebook: '',
      instagram: '',
      x: '',
      youtube: ''
    },

    /** Formulaire de contact */
    contact: {
      // Avec le serveur fourni : "/api/contact"
      // En hébergement statique : URL Formspree / Getform / Web3Forms, etc.
      endpoint: '/api/contact',
      // Adresse de notification (facultative, utilisée par server.js via .env)
      notificationEmail: ''
    },

    /** Préférences d'affichage */
    ui: {
      // Afficher le bandeau de configuration dans le pied de page (utile avant mise en ligne)
      showSetupNotice: false,
      // Délai minimal de remplissage du formulaire (anti-spam), en millisecondes
      minFormTime: 2500,
      // Durée d'animation d'apparition des sections
      revealDuration: 650
    },

    /**
     * Catalogue produits — MODIFIABLES.
     * Remplacez ces exemples par vos vraies références. Aucun prix ni produit
     * réel n'est inventé : les champs ci-dessous sont des modèles.
     * stock : 'available' | 'low' | 'out'
     */
    products: [
      {
        id: 'cable-fibre', category: 'fibre', ref: 'À renseigner', stock: 'available',
        name: { fr: 'Câble fibre optique', en: 'Fibre optic cable', ar: 'كابل الألياف البصرية', es: 'Cable de fibra óptica' },
        description: { fr: 'Câble optique pour liaison FTTH / FTTB — type, longueur et caractéristiques à renseigner.', en: 'Optical cable for FTTH / FTTB links — type, length and specifications to be filled in.', ar: 'كابل بصري لوصلات FTTH / FTTB — يُحدد النوع والطول والمواصفات.', es: 'Cable óptico para enlaces FTTH / FTTB — tipo, longitud y características por especificar.' }
      },
      {
        id: 'odf-fibre', category: 'fibre', ref: 'À renseigner', stock: 'low',
        name: { fr: 'Boîtier de raccordement optique (ODF)', en: 'Optical distribution frame (ODF)', ar: 'لوحة توزيع بصرية (ODF)', es: 'Panel de distribución óptica (ODF)' },
        description: { fr: 'Boîtier de raccordement et de répartition des fibres — capacité à renseigner.', en: 'Fibre termination and distribution enclosure — capacity to be filled in.', ar: 'صندوق ربط وتوزيع الألياف — تُحدد السعة.', es: 'Armario de terminación y distribución de fibras — capacidad por especificar.' }
      },
      {
        id: 'module-sfp', category: 'fibre', ref: 'À renseigner', stock: 'available',
        name: { fr: 'Module optique SFP', en: 'SFP optical module', ar: 'وحدة بصرية SFP', es: 'Módulo óptico SFP' },
        description: { fr: 'Module de connexion optique pour équipements réseau — débit et portée à renseigner.', en: 'Optical transceiver for network equipment — speed and reach to be filled in.', ar: 'وحدة إرسال بصرية لمعدات الشبكة — تُحدد السرعة والمدى.', es: 'Transceptor óptico para equipos de red — velocidad y alcance por especificar.' }
      },
      {
        id: 'equipement-reseau', category: 'reseau', ref: 'À renseigner', stock: 'available',
        name: { fr: 'Équipement réseau professionnel', en: 'Professional network equipment', ar: 'معدات شبكة احترافية', es: 'Equipo de red profesional' },
        description: { fr: 'Switch, routeur ou point d’accès — modèle et caractéristiques à renseigner.', en: 'Switch, router or access point — model and specifications to be filled in.', ar: 'مبدّل أو موجّه أو نقطة وصول — يُحدد الطراز والمواصفات.', es: 'Switch, router o punto de acceso — modelo y características por especificar.' }
      },
      {
        id: 'terminal-telecom', category: 'telecom', ref: 'À renseigner', stock: 'low',
        name: { fr: 'Terminal télécom & voix', en: 'Telecom & voice terminal', ar: 'جهاز اتصالات وصوت', es: 'Terminal de telecomunicaciones y voz' },
        description: { fr: 'Téléphone IP ou terminal sans fil — référence à renseigner.', en: 'IP phone or wireless terminal — reference to be filled in.', ar: 'هاتف IP أو جهاز لاسلكي — يُحدد المرجع.', es: 'Teléfono IP o terminal inalámbrico — referencia por especificar.' }
      },
      {
        id: 'station-vsat', category: 'satellite', ref: 'À renseigner', stock: 'available',
        name: { fr: 'Station satellite VSAT', en: 'VSAT satellite station', ar: 'محطة قمر صناعي VSAT', es: 'Estación satelital VSAT' },
        description: { fr: 'Kit terminal satellite pour sites distants — composants à renseigner.', en: 'Satellite terminal kit for remote sites — components to be filled in.', ar: 'مجموعة طرفية فضائية للمواقع البعيدة — تُحدد المكونات.', es: 'Kit terminal satelital para sitios remotos — componentes por especificar.' }
      },
      {
        id: 'poste-informatique', category: 'informatique', ref: 'À renseigner', stock: 'out',
        name: { fr: 'Poste de travail informatique', en: 'IT workstation', ar: 'محطة عمل معلوماتية', es: 'Estación de trabajo informática' },
        description: { fr: 'Ordinateur ou serveur — configuration et prix à renseigner.', en: 'Computer or server — configuration and price to be filled in.', ar: 'حاسوب أو خادم — تُحدد التهيئة والسعر.', es: 'Ordenador o servidor — configuración y precio por especificar.' }
      }
    ],

    /** Produit mis en avant dans la fenêtre « Produit de la semaine ». */
    featuredProductId: 'cable-fibre',

    /**
     * Réalisations — MODIFIABLES.
     * Remplacez ces éléments par vos vrais projets. Ces données sont
     * volontairement génériques : aucun client ni référence n'est inventé.
     * Le texte visible est traduit dans i18n.js (clé projects.items[i]).
     */
    projects: [
      { id: 'infra',     category: 'infrastructure', image: 'assets/img/projects/infrastructure.svg', year: '', tags: ['Windows Server', 'Virtualisation', 'Supervision'] },
      { id: 'reseau',    category: 'reseaux',        image: 'assets/img/projects/reseaux.svg',        year: '', tags: ['Cat6', 'Fibre optique', 'Wi-Fi pro'] },
      { id: 'securite',  category: 'securite',       image: 'assets/img/projects/securite.svg',      year: '', tags: ['Pare-feu', 'Audit', 'Sauvegarde'] },
      { id: 'cloud',     category: 'cloud',          image: 'assets/img/projects/cloud.svg',         year: '', tags: ['Microsoft 365', 'Migration', 'Identité'] },
      { id: 'web',       category: 'developpement',  image: 'assets/img/projects/developpement.svg', year: '', tags: ['Application web', 'API', 'Automatisation'] },
      { id: 'video',     category: 'securite',       image: 'assets/img/projects/videosurveillance.svg', year: '', tags: ['Caméras IP', 'Contrôle d’accès', 'Supervision'] }
    ]
  };
})(window);

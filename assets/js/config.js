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
      url: 'https://bgs-site.onrender.com',
      // Titre suffixe dans les balises <title>
      titleSuffix: 'BGS — Solutions informatiques & transformation numérique',
      email: '',            // Ex. : contact@bgs.example
      // Numéro officiel BGS fourni : 46071669 (indicatif +222 ajouté).
      phone: '+222 46 07 16 69',       // Format affiché sur le site
      phoneInternational: '22246071669', // Format utilisé pour les liens tel:
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
     * Marques PC / télécom affichées dans le bandeau défilant de l'accueil.
     * MODIFIABLE : ajoutez, retirez ou réordonnez librement les noms.
     * Important : cette liste illustre les marques que BGS peut prendre en
     * charge (compatibilité / intervention). Elle n'affirme aucun partenariat,
     * aucune certification ni aucun approvisionnement officiel.
     */
    brands: [
      'Apple', 'ASUS', 'Acer', 'Dell', 'HP', 'Lenovo', 'MSI', 'Toshiba',
      'Sony', 'Samsung', 'LG', 'Fujitsu', 'NEC', 'Panasonic', 'IBM',
      'Supermicro', 'Microsoft', 'Intel', 'AMD', 'NVIDIA', 'Razer',
      'Alienware', 'Huawei', 'Honor', 'Xiaomi', 'OnePlus', 'OPPO', 'vivo',
      'Motorola', 'Google', 'Nokia', 'Alcatel', 'ZTE', 'BlackBerry',
      'Cisco', 'Ericsson', 'Alcatel-Lucent', 'MikroTik', 'Fortinet',
      'Ubiquiti', 'TP-Link', 'NETGEAR', 'D-Link', 'Juniper', 'Aruba',
      'Avaya', 'Yealink', 'Grandstream', 'Poly', 'Snom', 'Hughes',
      'Gilat', 'Viasat', 'iDirect', 'Palo Alto', 'Check Point', 'Sophos',
      'WatchGuard'
    ],

    /**
     * Logos réels des marques (fichiers locaux du dossier assets/img/brands).
     * Clé = nom exact utilisé dans `brands`. Une marque sans logo reste en texte.
     */
    brandLogos: {
      'Apple': 'assets/img/brands/apple.svg',
      'ASUS': 'assets/img/brands/asus.svg',
      'Acer': 'assets/img/brands/acer.svg',
      'Dell': 'assets/img/brands/dell.svg',
      'HP': 'assets/img/brands/hp.svg',
      'Lenovo': 'assets/img/brands/lenovo.svg',
      'MSI': 'assets/img/brands/msi.svg',
      'Toshiba': 'assets/img/brands/toshiba.svg',
      'Sony': 'assets/img/brands/sony.svg',
      'Samsung': 'assets/img/brands/samsung.svg',
      'LG': 'assets/img/brands/lg.svg',
      'Fujitsu': 'assets/img/brands/fujitsu.svg',
      'NEC': 'assets/img/brands/nec.svg',
      'Panasonic': 'assets/img/brands/panasonic.svg',
      'IBM': 'assets/img/brands/ibm.png',
      'Supermicro': 'assets/img/brands/supermicro.svg',
      'Microsoft': 'assets/img/brands/microsoft.png',
      'Intel': 'assets/img/brands/intel.svg',
      'AMD': 'assets/img/brands/amd.svg',
      'NVIDIA': 'assets/img/brands/nvidia.svg',
      'Razer': 'assets/img/brands/razer.svg',
      'Alienware': 'assets/img/brands/alienware.svg',
      'Huawei': 'assets/img/brands/huawei.svg',
      'Honor': 'assets/img/brands/honor.svg',
      'Xiaomi': 'assets/img/brands/xiaomi.svg',
      'OnePlus': 'assets/img/brands/oneplus.svg',
      'OPPO': 'assets/img/brands/oppo.svg',
      'vivo': 'assets/img/brands/vivo.svg',
      'Motorola': 'assets/img/brands/motorola.svg',
      'Google': 'assets/img/brands/google.svg',
      'Nokia': 'assets/img/brands/nokia.svg',
      'Alcatel': 'assets/img/brands/alcatel.png',
      'ZTE': 'assets/img/brands/zte.png',
      'BlackBerry': 'assets/img/brands/blackberry.svg',
      'Cisco': 'assets/img/brands/cisco.svg',
      'Ericsson': 'assets/img/brands/ericsson.svg',
      'Alcatel-Lucent': 'assets/img/brands/alcatel-lucent.png',
      'MikroTik': 'assets/img/brands/mikrotik.svg',
      'Fortinet': 'assets/img/brands/fortinet.svg',
      'Ubiquiti': 'assets/img/brands/ubiquiti.svg',
      'TP-Link': 'assets/img/brands/tp-link.svg',
      'NETGEAR': 'assets/img/brands/netgear.svg',
      'D-Link': 'assets/img/brands/d-link.png',
      'Juniper': 'assets/img/brands/juniper.svg',
      'Aruba': 'assets/img/brands/aruba.png',
      'Avaya': 'assets/img/brands/avaya.png',
      'Yealink': 'assets/img/brands/yealink.png',
      'Grandstream': 'assets/img/brands/grandstream.png',
      'Poly': 'assets/img/brands/poly.svg',
      'Snom': 'assets/img/brands/snom.png',
      'Hughes': 'assets/img/brands/hughes.png',
      'Gilat': 'assets/img/brands/gilat.png',
      'Viasat': 'assets/img/brands/viasat.png',
      'iDirect': 'assets/img/brands/idirect.png',
      'Palo Alto': 'assets/img/brands/palo-alto.svg',
      'Check Point': 'assets/img/brands/check-point.png',
      'Sophos': 'assets/img/brands/sophos.png',
      'WatchGuard': 'assets/img/brands/watchguard.png',
    },

    /**
     * Vitrine visuelle : vraies photos libres (Pexels) pour animer le site.
     * Ne pas présenter comme des projets clients BGS ; ce sont des visuels illustratifs.
     */
    techShowcase: [
      { src: 'assets/img/tech-fibre-optique-switch.jpg', label: { fr: 'Fibre optique & réseau', en: 'Fiber optics & network', ar: 'الألياف الضوئية والشبكات', es: 'Fibra óptica y red' } },
      { src: 'assets/img/tech-pc-ecran.jpg', label: { fr: 'PC & postes de travail', en: 'PCs & workstations', ar: 'أجهزة الكمبيوتر ومحطات العمل', es: 'PC y estaciones de trabajo' } },
      { src: 'assets/img/tech-laptop-bureau.jpg', label: { fr: 'Ordinateurs portables', en: 'Laptops', ar: 'أجهزة الكمبيوتر المحمولة', es: 'Portátiles' } },
      { src: 'assets/img/tech-smartphone-main.jpg', label: { fr: 'Smartphones & mobilité', en: 'Smartphones & mobility', ar: 'الهواتف الذكية والتنقل', es: 'Smartphones y movilidad' } },
      { src: 'assets/img/tech-fibre-patch-panel.jpg', label: { fr: 'Raccordement fibre optique', en: 'Fiber optic cabling', ar: 'توصيل الألياف الضوئية', es: 'Cableado de fibra óptica' } },
      { src: 'assets/img/tech-telephone-fixe.jpg', label: { fr: 'Téléphonie & communication', en: 'Telephony & communication', ar: 'الهاتف والاتصالات', es: 'Telefonía y comunicación' } },
      { src: 'assets/img/tech-fibre-cables-reseau.jpg', label: { fr: 'Câblage réseau & infrastructure', en: 'Network cabling & infrastructure', ar: 'كابلات الشبكة والبنية التحتية', es: 'Cableado de red e infraestructura' } },
      { src: 'assets/img/tech-laptop-moderne.jpg', label: { fr: 'Solutions informatiques', en: 'IT solutions', ar: 'حلول تقنية المعلومات', es: 'Soluciones informáticas' } },
      { src: 'assets/img/tech-smartphone-desk.jpg', label: { fr: 'Appareils connectés', en: 'Connected devices', ar: 'الأجهزة المتصلة', es: 'Dispositivos conectados' } }
    ],


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
     * Réalisations — photos de travaux déjà effectués par BGS.
     * Les photographies fournies sont intégrées dans la galerie.
     * Les intitulés et descriptions restent volontairement neutres :
     * modifiez-les dans i18n.js (clé projects.items[i]) si vous souhaitez
     * préciser chaque mission. Aucun client ni référence n'est inventé.
     */
    projects: [
      { id: 'realisation-01', category: 'realisations', image: 'assets/img/realisations/realisation-01.jpg', year: '', tags: [] },
      { id: 'realisation-02', category: 'realisations', image: 'assets/img/realisations/realisation-02.jpg', year: '', tags: [] },
      { id: 'realisation-03', category: 'realisations', image: 'assets/img/realisations/realisation-03.jpg', year: '', tags: [] },
      { id: 'realisation-04', category: 'realisations', image: 'assets/img/realisations/realisation-04.jpg', year: '', tags: [] },
      { id: 'realisation-05', category: 'realisations', image: 'assets/img/realisations/realisation-05.jpg', year: '', tags: [] },
      { id: 'realisation-06', category: 'realisations', image: 'assets/img/realisations/realisation-06.jpg', year: '', tags: [] },
      { id: 'realisation-07', category: 'realisations', image: 'assets/img/realisations/realisation-07.jpg', year: '', tags: [] },
      { id: 'realisation-08', category: 'realisations', image: 'assets/img/realisations/realisation-08.jpg', year: '', tags: [] },
      { id: 'realisation-09', category: 'realisations', image: 'assets/img/realisations/realisation-09.jpg', year: '', tags: [] },
      { id: 'realisation-10', category: 'realisations', image: 'assets/img/realisations/realisation-10.jpg', year: '', tags: [] },
      { id: 'realisation-11', category: 'realisations', image: 'assets/img/realisations/realisation-11.jpg', year: '', tags: [] },
      { id: 'realisation-12', category: 'realisations', image: 'assets/img/realisations/realisation-12.jpg', year: '', tags: [] },
      { id: 'realisation-13', category: 'realisations', image: 'assets/img/realisations/realisation-13.jpg', year: '', tags: [] }
    ]
  };
})(window);

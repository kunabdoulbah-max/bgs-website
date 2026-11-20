/**
 * BGS — TRADUCTIONS CENTRALISÉES (FR / EN / AR / ES)
 * Tout le contenu traduisible du site se trouve ici.
 */
(function (global) {
  'use strict';

  global.BGS_I18N = {
    /* ============================== FRANÇAIS ============================== */
    fr: {
      code: 'fr', dir: 'ltr', label: 'Français', short: 'FR',
      meta: {
        home:      { title: 'Accueil', description: 'BGS — Votre partenaire technologique pour un avenir connecté. Infrastructure, réseaux, cybersécurité, cloud et développement informatique.' },
        about:     { title: 'À propos', description: 'Découvrez BGS, entreprise de services informatiques : notre vision, notre mission, nos valeurs et notre approche de l’innovation.' },
        services:  { title: 'Nos services', description: 'Les 11 expertises de BGS : infrastructure, réseaux, fibre optique, CRM et applications web/mobiles, vente de matériel, BLR/VSAT, cybersécurité, support, cloud, vidéosurveillance, conseil et gestion de stock.' },
        solutions: { title: 'Nos solutions', description: 'Solutions technologiques BGS organisées par domaine et par besoin : continuité, collaboration, sécurité, connectivité et pilotage.' },
        itsupportMeta: { title: 'BGS IT SUPPORT', description: 'Centralisez incidents, tickets, parc informatique, interventions et supervision réseau sur une seule plateforme.' },
        products:  { title: 'Nos produits', description: 'Matériel télécom, informatique, BLR/VSAT et gestion de stock — catalogue BGS géré en ligne.' },
        projects:  { title: 'Nos réalisations', description: 'Galerie de projets informatiques BGS. Contenus modifiables, sans référence client inventée.' },
        contact:   { title: 'Contact', description: 'Contactez BGS pour un devis, une audit ou une prestation informatique. Formulaire de contact et WhatsApp.' },
        legal:     { title: 'Mentions légales', description: 'Mentions légales du site BGS.' },
        privacy:   { title: 'Politique de confidentialité', description: 'Politique de confidentialité et gestion des données personnelles du site BGS.' },
        notfound:  { title: 'Page introuvable', description: 'La page demandée est introuvable.' }
      },
      nav: {
        home: 'Accueil', about: 'À propos', services: 'Nos services', solutions: 'Nos solutions',
        projects: 'Nos réalisations', products: 'Nos produits', contact: 'Contact', quote: 'Demander un devis',
        whatsapp: 'WhatsApp', language: 'Langue', menu: 'Ouvrir le menu', close: 'Fermer le menu',
        skip: 'Aller au contenu principal', topbarTagline: 'Technologies · Infrastructures · Sécurité',
        phone: 'Téléphone', email: 'E-mail'
      },
      common: {
        learnMore: 'En savoir plus', requestQuote: 'Demander un devis', contactUs: 'Nous contacter',
        discoverServices: 'Découvrir nos services', seeAllServices: 'Voir tous les services',
        seeAllProjects: 'Voir toutes les réalisations', readMore: 'Lire la suite', backHome: 'Retour à l’accueil',
        toConfigure: 'À renseigner', unavailable: 'Information à renseigner dans la configuration du site.',
        features: 'Prestations incluses', deliverables: 'Livrables', benefits: 'Bénéfices',
        scroll: 'Défiler', close: 'Fermer', expand: 'Afficher les détails', collapse: 'Masquer les détails',
        example: 'Exemple de contenu — à remplacer par vos informations.'
      },
      admin: {
        eyebrow: 'Espace administrateur',
        title: 'Administration du site',
        lead: 'Créez votre compte sécurisé pour gérer le catalogue produits.',
        setupTitle: 'Créer le compte administrateur',
        loginTitle: 'Connexion administrateur',
        username: 'Identifiant',
        password: 'Mot de passe',
        passwordHint: '8 caractères minimum.',
        setupButton: 'Créer mon compte',
        loginButton: 'Se connecter',
        loggedIn: 'Connecté',
        welcome: 'Bienvenue, {site}',
        openCatalog: 'Gérer les produits',
        logout: 'Se déconnecter',
        protected: 'Espace réservé à l’administrateur du site.',
        accountNote: 'Le compte est enregistré sur le serveur. Aucun identifiant par défaut n’est fourni.',
        invalid: 'Identifiant ou mot de passe incorrect.',
        taken: 'Un compte administrateur existe déjà.',
        network: 'Serveur indisponible. Réessayez.',
        required: 'Renseignez tous les champs.',
        weak: 'Le mot de passe doit contenir au moins 8 caractères.',
        successSetup: 'Compte créé. Redirection vers le catalogue…',
        successLogin: 'Connexion réussie. Redirection…'
      },
      wa: {
        tooltip: 'Contactez-nous sur WhatsApp', header: 'WhatsApp',
        message: 'Bonjour BGS, je souhaite obtenir des informations sur vos prestations de services informatiques.',
        notConfigured: 'Numéro WhatsApp à configurer dans assets/js/config.js',
        floatingLabel: 'Discuter sur WhatsApp'
      },
      director: {
        eyebrow: 'Mot du Directeur Général',
        title: 'Un mot de notre Directeur Général',
        salutation: 'Chers partenaires, chers clients et visiteurs,',
        welcome: "C’est avec un immense plaisir que je vous souhaite la bienvenue sur le site officiel de BGS.",
        p1: "Dans un monde où les technologies évoluent constamment, nous sommes convaincus que l’innovation, l'expertise et la qualité des services constituent les clés de la réussite. C’est dans cette vision que BGS s’engage à accompagner les entreprises, les institutions et les organisations dans leurs projets de transformation numérique et de développement technologique.",
        p2: "Notre ambition est de proposer des solutions fiables, innovantes et adaptées aux besoins de nos clients, tout en plaçant la satisfaction, la proximité et la confiance au cœur de nos priorités.",
        p3: "Chez BGS, nous croyons que chaque projet est une opportunité de créer de la valeur, de relever de nouveaux défis et de construire des partenariats durables.",
        p4: "Je tiens à remercier chaleureusement nos clients, partenaires et collaborateurs pour leur confiance et leur engagement. Ensemble, nous continuerons à bâtir un avenir fondé sur l'excellence, l'innovation et la performance.",
        signature: "BGS, votre partenaire de confiance pour un avenir connecté et innovant.",
        name: 'Cherif Mohamed El Habib Oumar Bah',
        role: 'Directeur Général de BGS',
        cta: 'Lire le mot du Directeur Général',
        lead: 'Une vision portée par la direction de BGS : innovation, expertise et proximité.'
      },
      welcome: {
        eyebrow: 'Bienvenue en Mauritanie',
        title: 'Bonjour, bienvenue chez BGS',
        text: 'Notre équipe vous accueille et prend en charge vos besoins informatiques, du premier échange au déploiement sur site. Une seule équipe, des réponses claires et un suivi dans le temps.',
        alt: 'Visuel d’accueil BGS en Mauritanie',
        button: 'Échanger avec notre équipe',
        caption: 'Votre interlocuteur BGS — Mauritanie'
      },
      fibre: {
        eyebrow: 'Déploiement fibre optique',
        title: 'Nos techniciens déploient votre réseau fibre',
        text: 'De l’étude au raccordement, BGS accompagne vos projets FTTH, FTTB et OSM en Mauritanie avec une équipe terrain et des tests de mise en service.',
        items: [
          'Étude, dimensionnement et plan de pose',
          'Pose, raccordement et marquage des liaisons',
          'Tests optiques et mise en service'
        ],
        button: 'Découvrir la prestation fibre'
      },
      expertise: {
        eyebrow: 'Ingénierie & expertise',
        title: 'Des ingénieurs pour concevoir, analyser et sécuriser',
        text: 'Nos ingénieurs interviennent sur l’architecture, la performance et la sécurité de vos systèmes. Ils transforment une contrainte technique en solution exploitable et documentée.',
        items: ['Audit et architecture', 'Supervision et performance', 'Sécurité et continuité'],
        button: 'Voir toutes nos expertises'
      },
      productWeek: {
        eyebrow: 'Produit de la semaine',
        title: 'À découvrir cette semaine',
        note: 'Référence, caractéristiques et prix à renseigner dans la configuration.',
        open: 'Produit de la semaine',
        catalog: 'Voir tout le catalogue',
        close: 'Fermer',
        stock: 'Disponibilité',
        ref: 'Référence'
      },
      home: {
        badge: 'Intégrateur · Conseiller · Partenaire technologique',
        titleLead: 'Votre partenaire technologique',
        titleAccent: 'pour un avenir connecté',
        subtitle: 'BGS conçoit, déploie et sécurise les environnements informatiques des organisations. De l’infrastructure au cloud, nous transformons la technologie en un avantage concret pour votre activité.',
        primary: 'Découvrir nos services', secondary: 'Demander un devis',
        heroPanel: {
          title: 'Écosystème BGS', subtitle: 'Infrastructure · Réseau · Sécurité',
          online: 'Opérationnel', nodes: 'Nœuds actifs', protection: 'Protection', cloud: 'Cloud hybride', sync: 'Synchronisé'
        },
        trustTitle: 'Des expertises qui couvrent toute votre chaîne numérique',
        trust: ['Infrastructure', 'Réseaux & télécoms', 'Fibre optique', 'Cybersécurité', 'Support & maintenance', 'Cloud & numérique', 'Développement & CRM', 'Matériel & stock'],
        intro: {
          eyebrow: 'Qui sommes-nous ?',
          title: 'La technologie au service de la performance de votre entreprise',
          p1: 'BGS accompagne les entreprises dans la conception, le déploiement et l’exploitation de leurs systèmes d’information. Notre approche combine expertise technique, méthode et proximité pour répondre à des besoins réels.',
          p2: 'Nous intervenons sur l’ensemble du cycle : audit, architecture, intégration, sécurisation, support et évolution. Un seul interlocuteur, une vision cohérente, des solutions qui durent.',
          link: 'En savoir plus sur BGS',
          team: 'Notre équipe réunit des profils complémentaires en infrastructure, réseaux, fibre optique, sécurité, cloud et développement. Elle intervient avec une même exigence : comprendre le besoin, concevoir une solution adaptée et la maintenir dans le temps. Cette polyvalence permet de prendre en charge vos projets de bout en bout, sans multiplier les interlocuteurs.'
        },
        services: {
          eyebrow: 'Nos expertises', title: 'Des services IT complets et cohérents',
          subtitle: 'Onze domaines d’intervention complémentaires pour construire, sécuriser et faire évoluer votre environnement numérique.'
        },
        why: {
          eyebrow: 'Pourquoi choisir BGS', title: 'Un partenaire exigeant, à vos côtés',
          subtitle: 'Nous privilégions la qualité d’exécution, la clarté des échanges et la durabilité des solutions livrées.',
          items: [
            { title: 'Expertise transversale', text: 'Réseau, serveurs, sécurité, cloud et développement réunis dans une même équipe.' },
            { title: 'Réactivité terrain', text: 'Une assistance à distance et sur site adaptée à l’urgence de chaque situation.' },
            { title: 'Solutions sur mesure', text: 'Des architectures conçues pour votre organisation, pas pour un catalogue générique.' },
            { title: 'Sécurité dès la conception', text: 'La protection des systèmes et des données intégrée dès la phase d’étude.' },
            { title: 'Transparence', text: 'Des périmètres, des livrables et des coûts clairement définis avant chaque intervention.' },
            { title: 'Accompagnement durable', text: 'Documentation, formation et transfert de compétences pour rester autonome.' }
          ]
        },
        process: {
          eyebrow: 'Notre méthode', title: 'Quatre étapes, une exécution maîtrisée',
          subtitle: 'Une méthode simple et rigoureuse, du premier échange à l’amélioration continue.',
          steps: [
            { title: 'Écoute & audit', text: 'Comprendre votre contexte, vos contraintes et vos objectifs.' },
            { title: 'Conception', text: 'Définir l’architecture, les solutions et le plan de déploiement.' },
            { title: 'Déploiement', text: 'Intégrer, configurer, tester et sécuriser avec un suivi transparent.' },
            { title: 'Exploitation', text: 'Superviser, maintenir et faire évoluer dans le temps.' }
          ]
        },
        stats: [
          { value: '11', label: 'Domaines d’expertise' },
          { value: '03', label: 'Langues disponibles' },
          { value: '01', label: 'Interlocuteur dédié' }
        ],
        cta: { title: 'Un projet informatique en tête ?', text: 'Parlons de vos besoins. Nous vous proposons une réponse claire, adaptée à votre contexte et à vos priorités.', button: 'Demander un devis', wa: 'Écrire sur WhatsApp' }
      },
      about: {
        eyebrow: 'À propos de BGS', title: 'Une entreprise technologique tournée vers l’action',
        lead: 'BGS réunit des compétences complémentaires autour d’une même ambition : rendre les systèmes d’information fiables, sécurisés et utiles aux organisations qui les utilisent.',
        company: {
          title: 'Notre entreprise',
          p1: 'BGS est une entreprise de services informatiques spécialisée dans l’intégration de solutions technologiques et la transformation numérique. Nous accompagnons les organisations dans la modernisation de leur infrastructure, la sécurisation de leurs systèmes et le développement de leurs usages numériques.',
          p2: 'Notre rôle est celui d’un partenaire technique global : nous analysons, concevons, déployons et maintenons des environnements informatiques cohérents, avec le souci constant de la simplicité d’usage et de la maîtrise des coûts.'
        },
        vision: { title: 'Notre vision', text: 'Être reconnue comme une référence régionale des services informatiques : une entreprise capable de combiner rigueur technique, innovation responsable et compréhension fine des enjeux métiers de ses clients.' },
        mission: { title: 'Notre mission', text: 'Fournir des solutions technologiques fiables et accessibles, et accompagner chaque organisation dans la construction d’un environnement numérique performant, sécurisé et évolutif.' },
        values: {
          title: 'Nos valeurs', subtitle: 'Les principes qui guident nos décisions et nos interventions quotidiennes.',
          items: [
            { title: 'Rigueur', text: 'Des méthodes documentées, des tests sérieux et une attention portée aux détails.' },
            { title: 'Fiabilité', text: 'Des solutions robustes et un engagement tenu dans la durée.' },
            { title: 'Innovation', text: 'Adopter les technologies utiles, sans céder à l’effet de mode.' },
            { title: 'Proximité', text: 'Comprendre les métiers et parler le langage de nos interlocuteurs.' },
            { title: 'Intégrité', text: 'Des recommandations indépendantes, honnêtes et proportionnées.' },
            { title: 'Transmission', text: 'Partager les connaissances pour rendre nos clients autonomes.' }
          ]
        },
        commitment: {
          title: 'Notre engagement envers nos clients',
          p1: 'Nous nous engageons sur des résultats mesurables : des systèmes disponibles, des délais respectés et une information claire à chaque étape. Chaque mission fait l’objet d’un périmètre défini, d’un suivi et d’une restitution documentée.',
          p2: 'Notre priorité est la satisfaction durable : nous préférons une solution bien conçue et bien maintenue à une intervention ponctuelle qui déplace le problème.'
        },
        team: {
          title: 'La compétence de notre équipe',
          subtitle: 'Des profils complémentaires, une même exigence de résultat.',
          p1: 'BGS s’appuie sur une équipe de professionnels de l’informatique et des télécommunications, réunissant des compétences en ingénierie réseau, administration systèmes, cybersécurité, déploiement de fibre optique, cloud et développement. Cette diversité de profils nous permet d’aborder chaque projet avec une vision complète, de l’étude technique à l’exploitation.',
          p2: 'Nos équipes sont habituées à intervenir sur site comme à distance, dans des environnements en activité. Elles privilégient une méthode documentée, des tests avant la mise en service et une restitution claire des résultats. La montée en compétences de vos collaborateurs fait partie intégrante de notre accompagnement.',
          items: [
            { title: 'Ingénierie réseau & fibre', text: 'Conception, câblage, déploiement FTTH / FTTB / OSM et supervision des liaisons.' },
            { title: 'Systèmes & cloud', text: 'Administration des serveurs, virtualisation, migration cloud et sauvegardes.' },
            { title: 'Sécurité & continuité', text: 'Durcissement, protection des accès et plans de reprise d’activité.' },
            { title: 'Conduite de projet', text: 'Cadrage, planning, documentation et transfert de compétences.' }
          ]
        },
        approach: {
          title: 'Innovation et qualité', subtitle: 'Notre approche de l’amélioration continue.',
          items: [
            { title: 'Évaluer avant de recommander', text: 'Toute proposition repose sur un état des lieux et des besoins exprimés.' },
            { title: 'Concevoir pour durer', text: 'Des architectures évolutives, documentées et faciles à reprendre.' },
            { title: 'Mesurer la qualité', text: 'Tests, supervision et indicateurs pour vérifier le résultat réel.' },
            { title: 'Améliorer en continu', text: 'Retours d’expérience et veille technologique intégrés à nos pratiques.' }
          ]
        },
        cta: { title: 'Construisons ensemble votre environnement numérique', text: 'Présentez-nous votre contexte : nous vous proposons une première analyse et une piste d’action concrète.', button: 'Parler de votre projet' }
      },
      services: {
        eyebrow: 'Nos prestations', title: 'Onze expertises pour votre infrastructure numérique',
        lead: 'Chaque prestation est adaptée à votre contexte : taille de l’organisation, contraintes métiers, niveau de sécurité attendu et budget. Retrouvez ci-dessous le détail de nos domaines d’intervention.',
        note: 'Les périmètres et livrables sont définis avec vous avant chaque mission.',
        items: [
          {
            id: 'infrastructure', icon: 'server', name: 'Infrastructure informatique',
            short: 'Des fondations solides pour vos systèmes et vos applications.',
            description: 'Conception, déploiement et administration de votre infrastructure physique et virtualisée, du serveur aux postes utilisateurs.',
            features: ['Installation et configuration de serveurs', 'Windows Server et Linux', 'Virtualisation', 'Maintenance des équipements informatiques', 'Gestion des infrastructures'],
            detailTitle: 'Une infrastructure conçue pour durer',
            deliverables: ['Schéma d’architecture et inventaire du parc', 'Plan de déploiement et procédures d’exploitation', 'Documentation technique remise à votre équipe'],
            benefits: ['Disponibilité et performance renforcées', 'Évolutivité maîtrisée', 'Administration simplifiée au quotidien']
          },
          {
            id: 'reseaux', icon: 'network', name: 'Réseaux et télécommunications',
            short: 'Un réseau rapide, stable et prêt à évoluer.',
            description: 'Étude, installation et supervision de vos réseaux locaux et étendus, avec une attention particulière portée à la qualité de la connectivité.',
            features: ['Installation de réseaux LAN et WAN', 'Câblage informatique Cat6 et fibre optique', 'Configuration des routeurs et switches', 'Wi-Fi professionnel', 'Supervision des réseaux'],
            detailTitle: 'Une connectivité fiable, de bout en bout',
            deliverables: ['Plan de câblage et schéma logique du réseau', 'Configuration documentée des équipements', 'Rapport de tests et de performance'],
            benefits: ['Débit et stabilité améliorés', 'Couverture Wi-Fi adaptée aux usages', 'Détection rapide des incidents']
          },
          {
            id: 'cybersecurite', icon: 'shield', name: 'Cybersécurité',
            short: 'Protéger vos systèmes, vos données et vos utilisateurs.',
            description: 'Évaluation, durcissement et surveillance de votre environnement numérique pour réduire l’exposition aux menaces et renforcer la résilience.',
            features: ['Audit de sécurité informatique', 'Protection des réseaux et serveurs', 'Pare-feu et antivirus professionnels', 'Sauvegarde et restauration', 'Sensibilisation à la cybersécurité'],
            detailTitle: 'La sécurité comme processus, pas comme produit',
            deliverables: ['Rapport d’audit avec priorités de remédiation', 'Politiques de sécurité et règles de protection', 'Plan de sauvegarde et de restauration testé'],
            benefits: ['Surface d’attaque réduite', 'Capacité de réponse aux incidents', 'Utilisateurs mieux informés']
          },
          {
            id: 'support', icon: 'headset', name: 'Support informatique et maintenance',
            short: 'Une assistance disponible quand votre activité en a besoin.',
            description: 'Prise en charge des incidents et des demandes quotidiennes, avec un suivi clair et des interventions adaptées à vos contraintes de service.',
            features: ['Assistance technique', 'Helpdesk et gestion des tickets', 'Maintenance préventive et corrective', 'Supervision des postes de travail', 'Assistance à distance et sur site'],
            detailTitle: 'Un support suivi et transparent',
            deliverables: ['Processus de tickets et niveaux de priorité', 'Rapport d’intervention après chaque mission', 'Tableau de suivi des incidents récurrents'],
            benefits: ['Temps d’immobilisation réduit', 'Historique clair des interventions', 'Parc maintenu de façon proactive']
          },
          {
            id: 'cloud', icon: 'cloud', name: 'Cloud et transformation numérique',
            short: 'Moderniser vos usages sans perdre le contrôle.',
            description: 'Accompagnement dans la migration et l’exploitation de services cloud, avec une gestion rigoureuse des identités, des accès et des données.',
            features: ['Migration vers le cloud', 'Microsoft 365', 'Gestion des comptes et des accès', 'Solutions de sauvegarde', 'Accompagnement à la transformation numérique'],
            detailTitle: 'Un cloud utile, maîtrisé et sécurisé',
            deliverables: ['Étude de migration et plan de bascule', 'Configuration des services et des accès', 'Guide d’administration et bonnes pratiques'],
            benefits: ['Collaboration facilitée', 'Coûts et accès mieux maîtrisés', 'Continuité des services renforcée']
          },
          {
            id: 'developpement', icon: 'code', name: 'Développement informatique',
            short: 'Des outils numériques adaptés à vos processus métiers.',
            description: 'Conception et développement de solutions web et d’applications de gestion, avec intégration aux systèmes existants et automatisation des tâches.',
            features: ['Développement CRM', 'Création de sites web', 'Applications web et mobiles', 'Applications de gestion', 'Automatisation des processus', 'Intégration de solutions métiers'],
            detailTitle: 'Du besoin métier à l’outil opérationnel',
            deliverables: ['Cahier des charges et maquettes fonctionnelles', 'Application développée et testée', 'Documentation technique et formation des utilisateurs'],
            benefits: ['Processus fluidifiés', 'Données centralisées', 'Outils évolutifs et maintenables']
          },
          {
            id: 'video', icon: 'camera', name: 'Vidéosurveillance et contrôle d’accès',
            short: 'Sécuriser les lieux et maîtriser les accès.',
            description: 'Déploiement de systèmes de vidéosurveillance et de contrôle d’accès, intégrés à votre réseau et accessibles selon vos besoins de supervision.',
            features: ['Installation de caméras IP', 'Configuration de systèmes de vidéosurveillance', 'Contrôle d’accès', 'Sécurisation des installations'],
            detailTitle: 'Une surveillance exploitable au quotidien',
            deliverables: ['Étude d’implantation des caméras et points d’accès', 'Configuration et paramétrage des systèmes', 'Formation à l’utilisation et à la consultation'],
            benefits: ['Visibilité en temps réel', 'Accès contrôlés et tracés', 'Archivage conforme à vos besoins']
          },
          {
            id: 'conseil', icon: 'compass', name: 'Conseil et accompagnement IT',
            short: 'Décider avec une vision technique claire et indépendante.',
            description: 'Audit, étude d’architecture et conseil technologique pour éclairer vos décisions et accompagner la montée en compétences de vos équipes.',
            features: ['Audit des systèmes informatiques', 'Étude et conception d’architectures', 'Conseil technologique', 'Formation des équipes', 'Accompagnement des entreprises'],
            detailTitle: 'Une décision éclairée, un plan concret',
            deliverables: ['Rapport d’audit et analyse des écarts', 'Proposition d’architecture et feuille de route', 'Supports de formation adaptés aux équipes'],
            benefits: ['Choix technologiques justifiés', 'Investissements priorisés', 'Compétences internes renforcées']
          },
          {
            id: 'fibre-optique', icon: 'fiber', name: 'Déploiement fibre optique',
            short: 'Connecter vos sites avec une liaison optique performante et durable.',
            description: 'Étude, déploiement et raccordement de réseaux fibre optique FTTH, FTTB et OSM, avec tests et supervision des liaisons.',
            features: ['Étude et dimensionnement du réseau fibre', 'Déploiement FTTH (fibre jusqu’à l’abonné)', 'Déploiement FTTB (fibre jusqu’au bâtiment)', 'Déploiement OSM', 'Pose, raccordement et tests de liaison'],
            detailTitle: 'Une connectivité optique pensée pour durer',
            deliverables: ['Plan de déploiement et schéma d’acheminement', 'Rapport de tests et de qualification des liaisons', 'Documentation des équipements et des points de raccordement'],
            benefits: ['Débits élevés et latence réduite', 'Évolutivité pour vos futurs sites', 'Infrastructure optique documentée et maintenable']
          },
          {
            id: 'vente-materiel', icon: 'layers', name: 'Vente de matériel télécom & informatique',
            short: 'Le bon équipement, sélectionné, livré et installé.',
            description: 'Fourniture de matériel télécom et informatique adapté à vos usages, avec conseil sur le choix des équipements, installation et suivi des références.',
            features: ['Fourniture de matériel réseau et télécom', 'Matériel fibre optique (câbles, ODF, modules SFP)', 'Ordinateurs, serveurs et équipements informatiques', 'Sélection adaptée à votre budget', 'Installation et paramétrage', 'Gestion de stock et suivi des références'],
            detailTitle: 'Un approvisionnement simple et maîtrisé',
            deliverables: ['Liste des équipements proposés avec caractéristiques', 'Bon de livraison et état du matériel', 'Attestation d’installation et de mise en service'],
            benefits: ['Matériel adapté à votre environnement', 'Achats et stocks mieux suivis', 'Installation prête à l’emploi']
          },
          {
            id: 'blr-vsat', icon: 'activity', name: 'Installation BLR & VSAT',
            short: 'Connecter les sites difficiles d’accès par liaison radio ou satellite.',
            description: 'Installation et mise en service de liaisons BLR (boucle locale radio) et de stations VSAT pour assurer la connectivité de sites éloignés ou isolés.',
            features: ['Installation de liaisons BLR (boucle locale radio)', 'Installation et alignement de stations VSAT', 'Configuration des modems et routeurs', 'Tests de liaison et mise en service', 'Maintenance et supervision des installations'],
            detailTitle: 'Une connectivité fiable, même hors réseau terrestre',
            deliverables: ['Étude de couverture et dimensionnement de la liaison', 'Rapport d’installation et de tests de performance', 'Procédures d’exploitation et de maintenance'],
            benefits: ['Sites éloignés reliés au réseau', 'Débit et disponibilité suivis', 'Interventions de maintenance cadrées']
          }
        ],
        cta: { title: 'Votre besoin ne figure pas dans cette liste ?', text: 'Contactez-nous : nous étudions chaque demande et pouvons combiner plusieurs expertises.', button: 'Discuter de mon projet' }
      },
      /* Administration du catalogue (démo locale) — clés partagées ci-dessous */
      itsupport: {
        nav: 'BGS IT SUPPORT',
        eyebrow: 'BGS IT SUPPORT',
        title: 'Simplifiez la gestion de votre informatique !',
        lead: 'Découvrez une solution professionnelle qui permet de centraliser la gestion des incidents, des tickets, du parc informatique, des interventions et de la supervision réseau.',
        pitch: 'Avec BGS IT SUPPORT, améliorez la productivité de vos équipes, gagnez du temps et maîtrisez votre infrastructure informatique depuis une seule plateforme.',
        audience: 'Une solution adaptée aux entreprises, administrations et institutions.',
        slogan: 'BGS IT SUPPORT : Votre informatique sous contrôle !',
        cta: { title: 'Contactez-nous pour une démonstration', text: 'Découvrez nos solutions et échangez avec notre équipe sur vos besoins.', button: 'Demander une démonstration' },
        features: {
          eyebrow: 'Une plateforme, toutes vos opérations', title: 'Les modules de BGS IT SUPPORT',
          items: [
            { title: 'Gestion des incidents', text: 'Centralisez les signalements, qualifiez leur gravité et suivez leur résolution.' },
            { title: 'Tickets & demandes', text: 'Organisez les demandes des utilisateurs avec des priorités et des responsables clairs.' },
            { title: 'Parc informatique', text: 'Inventaire des équipements, état, affectation et historique d’intervention.' },
            { title: 'Interventions', text: 'Planification, suivi et rapport d’intervention sur site ou à distance.' },
            { title: 'Supervision réseau', text: 'Visibilité sur la disponibilité des équipements et alertes en cas d’incident.' },
            { title: 'Tableaux de bord', text: 'Indicateurs clairs pour piloter l’activité et la qualité du service.' }
          ]
        },
        benefits: {
          eyebrow: 'Les bénéfices', title: 'Votre informatique sous contrôle',
          items: [
            { title: 'Productivité améliorée', text: 'Moins de temps perdu dans la coordination et le suivi des demandes.' },
            { title: 'Réactivité accrue', text: 'Une vision immédiate des incidents et de leur état d’avancement.' },
            { title: 'Infrastructure maîtrisée', text: 'Un inventaire à jour et une supervision continue de vos équipements.' }
          ]
        },
        home: {
          eyebrow: 'BGS IT SUPPORT', title: 'Votre informatique sous contrôle',
          text: 'Incidents, tickets, parc informatique, interventions et supervision réseau : une seule plateforme pour piloter votre infrastructure.',
          button: 'Découvrir BGS IT SUPPORT'
        }
      },
      products: {
        eyebrow: 'Produits & stock',
        title: 'Équipements et solutions pour votre activité',
        lead: 'Matériel télécom, informatique, réseau et satellite : découvrez les familles de produits que BGS peut fournir, installer et maintenir. Le catalogue est géré depuis l’espace administrateur et évolue avec vos besoins.',
        note: 'Catalogue serveur — les ajouts et suppressions sont visibles par tous les visiteurs après connexion administrateur.',
        categoriesTitle: 'Filtrer par catégorie',
        categories: {
          all: 'Tous les produits',
          telecom: 'Télécom',
          informatique: 'Informatique',
          reseau: 'Réseau',
          fibre: 'Fibre optique',
          satellite: 'Satellite / VSAT'
        },
        ref: 'Référence',
        stock: {
          label: 'Disponibilité',
          available: 'Disponible',
          low: 'Stock limité',
          out: 'En rupture'
        },
        stats: {
          total: 'Références',
          available: 'Disponibles',
          alert: 'À suivre'
        },
        management: {
          eyebrow: 'Gestion de stock',
          title: 'Un suivi de stock clair et réactif',
          p1: 'Nous organisons le suivi de vos équipements : entrées et sorties, niveaux de stock, seuils d’alerte et inventaires. Chaque mouvement est tracé pour éviter les ruptures et les immobilisations inutiles.',
          p2: 'Ce suivi peut être intégré à vos outils internes ou à une application web dédiée, développée selon vos processus et vos habitudes de travail.',
          items: [
            {
              title: 'Entrées & sorties',
              text: 'Enregistrement des mouvements et suivi des quantités par référence.'
            },
            {
              title: 'Seuils d’alerte',
              text: 'Signalement des stocks faibles et anticipation des réapprovisionnements.'
            },
            {
              title: 'Inventaires',
              text: 'Contrôles périodiques et écarts documentés entre stock théorique et réel.'
            },
            {
              title: 'Traçabilité',
              text: 'Historique des opérations, responsables et dates accessible à votre équipe.'
            }
          ]
        },
        admin: {
          eyebrow: 'Gestion du catalogue',
          title: 'Ajouter ou retirer un produit',
          note: 'Les modifications sont enregistrées sur le serveur et visibles par tous les visiteurs. Session administrateur requise.',
          name: 'Nom du produit (FR)',
          nameEn: 'Nom (anglais, facultatif)',
          nameAr: 'Nom (arabe, facultatif)',
          nameEs: 'Nom (espagnol, facultatif)',
          description: 'Description (FR)',
          descriptionEs: 'Description (espagnol, facultatif)',
          category: 'Catégorie',
          ref: 'Référence',
          stock: 'Disponibilité',
          add: 'Ajouter le produit',
          delete: 'Retirer du catalogue',
          reset: 'Réinitialiser le catalogue',
          success: 'Produit ajouté au catalogue serveur.',
          deleted: 'Produit supprimé du catalogue serveur.',
          resetOk: 'Catalogue serveur réinitialisé.',
          required: 'Renseignez au moins le nom du produit en français.',
          loginRequired: 'Connectez-vous pour modifier le catalogue.',
          catalogNote: 'Connecté en tant qu’administrateur. Ajoutez ou supprimez des produits ci-dessous.',
          logout: 'Se déconnecter'
        },
        cta: {
          title: 'Besoin d’un équipement ou d’une solution sur mesure ?',
          text: 'Indiquez-nous la référence recherchée ou votre besoin : nous vous proposons une offre adaptée et un délai clair.',
          button: 'Demander un devis'
        }
      },
      solutions: {
        eyebrow: 'Nos solutions', title: 'Des réponses organisées autour de vos besoins',
        lead: 'Au-delà des prestations isolées, BGS assemble des briques technologiques cohérentes pour répondre à des situations concrètes : fiabiliser, connecter, protéger, collaborer et piloter.',
        domains: [
          { id: 'infrastructure', icon: 'server', name: 'Infrastructure & continuité', text: 'Des fondations redondantes et supervisées pour maintenir votre activité en marche.',
            items: ['Infrastructure virtualisée', 'Sauvegarde et reprise d’activité', 'Supervision centralisée', 'Maintenance préventive'] },
          { id: 'collaboration', icon: 'cloud', name: 'Espace de travail numérique', text: 'Des outils collaboratifs sécurisés, accessibles où que vos équipes travaillent.',
            items: ['Microsoft 365', 'Identité et accès', 'Poste de travail standardisé', 'Collaboration à distance'] },
          { id: 'securite', icon: 'shield', name: 'Sécurité & conformité', text: 'Une protection adaptée à votre exposition et à la sensibilité de vos données.',
            items: ['Audit et plan de remédiation', 'Pare-feu et segmentation', 'Sensibilisation des équipes', 'Restauration éprouvée'] },
          { id: 'connectivite', icon: 'network', name: 'Connectivité & sites', text: 'Relier vos sites, vos équipements et vos utilisateurs avec des réseaux fiables.',
            items: ['LAN / WAN et fibre optique', 'Liaisons BLR et VSAT', 'Wi-Fi professionnel', 'Vidéosurveillance IP', 'Contrôle d’accès'] }
        ],
        byNeed: {
          title: 'Par besoin client', subtitle: 'Chaque contexte appelle une réponse adaptée.',
          items: [
            { title: 'PME en croissance', text: 'Structurer l’infrastructure et les usages numériques sans complexifier la gestion.' },
            { title: 'Organisations multi-sites', text: 'Unifier la connectivité, la sécurité et la supervision entre plusieurs lieux.' },
            { title: 'Environnements sensibles', text: 'Renforcer la protection des systèmes, des accès et des données critiques.' },
            { title: 'Projets de transformation', text: 'Moderniser progressivement les outils avec un plan de migration maîtrisé.' }
          ]
        },
        cta: { title: 'Construisons la solution adaptée à votre contexte', text: 'Décrivez-nous votre environnement et vos objectifs : nous vous proposons une architecture et une feuille de route.', button: 'Parler de ma solution' }
      },
      projects: {
        eyebrow: 'Nos réalisations', title: 'Des projets présentés à titre d’illustration',
        lead: 'Cette galerie est un modèle modifiable : remplacez chaque exemple par vos propres projets, avec photos, descriptions, catégories et technologies utilisées. Aucun client ni référence n’est inventé ici.',
        note: 'Contenu d’exemple — à remplacer par vos réalisations réelles.',
        filters: { all: 'Tous', infrastructure: 'Infrastructure', reseaux: 'Réseaux', securite: 'Sécurité', cloud: 'Cloud', developpement: 'Développement' },
        items: [
          { name: 'Déploiement d’infrastructure', description: 'Exemple de mission : conception et installation d’une infrastructure virtualisée, avec documentation d’exploitation.' },
          { name: 'Modernisation réseau', description: 'Exemple de mission : restructuration d’un réseau local, câblage structuré et déploiement du Wi-Fi professionnel.' },
          { name: 'Durcissement de sécurité', description: 'Exemple de mission : audit de sécurité, configuration des pare-feu et mise en place d’une politique de sauvegarde.' },
          { name: 'Migration vers le cloud', description: 'Exemple de mission : bascule progressive des services et des comptes utilisateurs vers un environnement cloud.' },
          { name: 'Application métier', description: 'Exemple de mission : développement d’une application web de gestion avec automatisation des processus.' },
          { name: 'Vidéosurveillance IP', description: 'Exemple de mission : installation de caméras IP, paramétrage de l’accès distant et contrôle d’accès.' }
        ],
        cta: { title: 'Vos projets méritent une présentation à la hauteur', text: 'Confiez-nous votre prochain projet et donnez-nous les éléments que vous souhaitez valoriser.', button: 'Parler d’un projet' }
      },
      contact: {
        eyebrow: 'Contact', title: 'Parlons de votre projet informatique',
        lead: 'Décrivez-nous votre besoin. Nous vous répondons avec une première analyse et une proposition adaptée à votre contexte.',
        form: {
          title: 'Envoyer une demande', subtitle: 'Tous les champs marqués d’un astérisque sont obligatoires.',
          firstName: 'Prénom *', lastName: 'Nom *', company: 'Entreprise',
          email: 'Adresse e-mail *', phone: 'Téléphone', service: 'Service souhaité *',
          servicePlaceholder: 'Sélectionnez un service', other: 'Autre / Non défini',
          message: 'Description du besoin *', messagePlaceholder: 'Décrivez votre environnement, vos objectifs et votre échéance…',
          consent: 'J’accepte que BGS utilise ces informations pour répondre à ma demande. *',
          submit: 'Envoyer ma demande', sending: 'Envoi en cours…',
          successTitle: 'Demande envoyée', successText: 'Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.',
          errorTitle: 'Envoi impossible', errorText: 'Une erreur est survenue. Essayez à nouveau ou contactez-nous directement.',
          reset: 'Envoyer une autre demande', privacy: 'Vos données sont utilisées uniquement pour traiter votre demande.'
        },
        info: {
          title: 'Nos coordonnées', subtitle: 'Les informations ci-dessous sont à renseigner dans la configuration du site.',
          email: 'E-mail', phone: 'Téléphone', address: 'Adresse', hours: 'Horaires',
          whatsappTitle: 'Contact rapide sur WhatsApp', whatsappText: 'Échangez directement avec notre équipe via WhatsApp.',
          whatsappButton: 'Ouvrir WhatsApp'
        },
        faq: {
          title: 'Questions fréquentes',
          items: [
            { q: 'Comment se déroule une première prise de contact ?', a: 'Nous échangeons sur votre contexte et vos objectifs, puis nous définissons ensemble le périmètre d’une éventuelle intervention.' },
            { q: 'Proposez-vous une assistance sur site ?', a: 'Oui, selon la nature de la mission et votre localisation. Les modalités sont définies au moment de l’étude de votre demande.' },
            { q: 'Puis-je demander un devis pour plusieurs services ?', a: 'Oui. Indiquez l’ensemble de vos besoins dans le formulaire ou contactez-nous sur WhatsApp.' }
          ]
        }
      },
      footer: {
        tagline: 'Infrastructure, sécurité et transformation numérique au service de votre activité.',
        quickTitle: 'Navigation', servicesTitle: 'Nos prestations', contactTitle: 'Contact', socialTitle: 'Suivez-nous',
        legal: 'Mentions légales', privacy: 'Politique de confidentialité',
        copyright: '© {year} BGS. Tous droits réservés.',
        rights: 'Conçu pour des organisations qui exigent fiabilité et clarté.',
        setupNotice: 'Certaines coordonnées restent à renseigner dans assets/js/config.js avant la mise en ligne.',
        backToTop: 'Retour en haut'
      },
      legal: {
        title: 'Mentions légales', updated: 'Dernière mise à jour : à compléter',
        intro: 'Ce site est édité par BGS. Les informations ci-dessous doivent être complétées avec les données légales réelles avant la publication.',
        sections: [
          { title: 'Éditeur du site', body: 'BGS — forme juridique, numéro d’immatriculation, adresse du siège social, téléphone et adresse e-mail : à compléter.' },
          { title: 'Directeur de la publication', body: 'Nom et qualité du directeur de la publication : à compléter.' },
          { title: 'Hébergement', body: 'Nom de l’hébergeur, adresse et coordonnées : à compléter.' },
          { title: 'Propriété intellectuelle', body: 'L’ensemble des contenus, textes, logos et éléments graphiques du site sont la propriété de BGS ou de leurs ayants droit respectifs. Toute reproduction, même partielle, est soumise à autorisation préalable.' },
          { title: 'Liens hypertextes', body: 'BGS ne contrôle pas le contenu des sites tiers vers lesquels des liens peuvent renvoyer et décline toute responsabilité quant à leur contenu.' },
          { title: 'Contact', body: 'Pour toute question relative à ces mentions, utilisez le formulaire de contact ou les coordonnées disponibles sur le site.' }
        ]
      },
      privacy: {
        title: 'Politique de confidentialité', updated: 'Dernière mise à jour : à compléter',
        intro: 'BGS attache de l’importance à la protection de vos données personnelles. Ce document décrit, à titre de modèle, les informations collectées via le site et la manière dont elles sont traitées.',
        sections: [
          { title: 'Données collectées', body: 'Le formulaire de contact recueille les informations que vous saisissez volontairement : nom, prénom, entreprise, adresse e-mail, téléphone, service souhaité et description du besoin.' },
          { title: 'Finalités', body: 'Ces données servent exclusivement à traiter votre demande, à vous répondre et à assurer le suivi de la relation commerciale.' },
          { title: 'Conservation', body: 'Les données sont conservées pour la durée nécessaire au traitement de la demande et au suivi de la relation, puis supprimées ou archivées selon les obligations légales applicables.' },
          { title: 'Destinataires', body: 'Les données ne sont pas vendues. Elles peuvent être traitées par les prestataires techniques chargés de l’hébergement et de la messagerie, dans le cadre de la fourniture du service.' },
          { title: 'Vos droits', body: 'Vous pouvez demander l’accès, la rectification, la suppression ou la limitation du traitement de vos données, ainsi que vous opposer à certains traitements, en nous contactant via le formulaire prévu à cet effet.' },
          { title: 'Cookies', body: 'Ce site utilise uniquement des informations locales nécessaires à son fonctionnement, notamment la mémorisation de la langue choisie. Aucun cookie publicitaire n’est déposé.' },
          { title: 'Sécurité', body: 'Des mesures techniques et organisationnelles sont mises en œuvre pour limiter l’accès aux données, notamment la validation des formulaires, le contrôle anti-spam et la limitation des tentatives d’envoi.' }
        ]
      },
      notfound: { code: '404', title: 'Cette page est introuvable', text: 'La page que vous recherchez n’existe pas ou a été déplacée. Vous pouvez revenir à l’accueil ou consulter nos services.', button: 'Retour à l’accueil' },
      validation: {
        firstName: 'Veuillez saisir votre prénom.', lastName: 'Veuillez saisir votre nom.',
        email: 'Veuillez saisir une adresse e-mail valide.', phone: 'Veuillez saisir un numéro de téléphone valide.',
        service: 'Veuillez sélectionner un service.', message: 'Veuillez décrire votre besoin (10 caractères minimum).',
        consent: 'Votre accord est nécessaire pour envoyer la demande.',
        spam: 'La demande n’a pas pu être validée. Veuillez réessayer.',
        network: 'Impossible de joindre le serveur. Vérifiez votre connexion ou utilisez WhatsApp.'
      }
    },

    /* =============================== ENGLISH ============================== */
    en: {
      code: 'en', dir: 'ltr', label: 'English', short: 'EN',
      meta: {
        home:      { title: 'Home', description: 'BGS — Your technology partner for a connected future. Infrastructure, networks, cybersecurity, cloud and software development.' },
        about:     { title: 'About us', description: 'Learn about BGS, an IT services company: our vision, mission, values and approach to innovation.' },
        services:  { title: 'Our services', description: 'BGS offers 11 expertise areas: infrastructure, networks, fibre optics, CRM and web/mobile apps, equipment supply, BLR/VSAT, cybersecurity, support, cloud, video surveillance, consulting and stock management.' },
        solutions: { title: 'Our solutions', description: 'BGS technology solutions organised by domain and business need: continuity, collaboration, security, connectivity and monitoring.' },
        itsupportMeta: { title: 'BGS IT SUPPORT', description: 'Centralise incidents, tickets, IT assets, interventions and network monitoring on a single platform.' },
        products:  { title: 'Our products', description: 'Telecom and IT equipment, BLR/VSAT installation and stock management — BGS online-managed catalogue.' },
        projects:  { title: 'Our projects', description: 'BGS IT project gallery. Editable content with no invented client references.' },
        contact:   { title: 'Contact', description: 'Contact BGS for a quote, an audit or an IT service. Contact form and WhatsApp.' },
        legal:     { title: 'Legal notice', description: 'Legal notice of the BGS website.' },
        privacy:   { title: 'Privacy policy', description: 'Privacy policy and personal data handling of the BGS website.' },
        notfound:  { title: 'Page not found', description: 'The requested page could not be found.' }
      },
      nav: {
        home: 'Home', about: 'About us', services: 'Services', solutions: 'Solutions',
        projects: 'Projects', products: 'Products', contact: 'Contact', quote: 'Request a quote',
        whatsapp: 'WhatsApp', language: 'Language', menu: 'Open menu', close: 'Close menu',
        skip: 'Skip to main content', topbarTagline: 'Technology · Infrastructure · Security',
        phone: 'Phone', email: 'Email'
      },
      common: {
        learnMore: 'Learn more', requestQuote: 'Request a quote', contactUs: 'Contact us',
        discoverServices: 'Discover our services', seeAllServices: 'View all services',
        seeAllProjects: 'View all projects', readMore: 'Read more', backHome: 'Back to home',
        toConfigure: 'To be filled in', unavailable: 'Information to be filled in the site configuration.',
        features: 'Included services', deliverables: 'Deliverables', benefits: 'Benefits',
        scroll: 'Scroll', close: 'Close', expand: 'Show details', collapse: 'Hide details',
        example: 'Sample content — replace with your own information.'
      },
      admin: {
        eyebrow: 'Administrator area',
        title: 'Website administration',
        lead: 'Create your secure account to manage the product catalogue.',
        setupTitle: 'Create the administrator account',
        loginTitle: 'Administrator sign in',
        username: 'Username',
        password: 'Password',
        passwordHint: 'At least 8 characters.',
        setupButton: 'Create my account',
        loginButton: 'Sign in',
        loggedIn: 'Signed in',
        welcome: 'Welcome, {site}',
        openCatalog: 'Manage products',
        logout: 'Sign out',
        protected: 'Area reserved for the website administrator.',
        accountNote: 'The account is stored on the server. No default credentials are provided.',
        invalid: 'Incorrect username or password.',
        taken: 'An administrator account already exists.',
        network: 'Server unavailable. Please try again.',
        required: 'Please complete all fields.',
        weak: 'The password must contain at least 8 characters.',
        successSetup: 'Account created. Redirecting to the catalogue…',
        successLogin: 'Signed in. Redirecting…'
      },
      wa: {
        tooltip: 'Contact us on WhatsApp', header: 'WhatsApp',
        message: 'Hello BGS, I would like to get information about your IT services.',
        notConfigured: 'WhatsApp number to configure in assets/js/config.js',
        floatingLabel: 'Chat on WhatsApp'
      },
      director: {
        eyebrow: 'Message from the Managing Director',
        title: 'A word from our Managing Director',
        salutation: 'Dear partners, dear clients and visitors,',
        welcome: 'It is with great pleasure that I welcome you to the official BGS website.',
        p1: 'In a world where technology is constantly evolving, we are convinced that innovation, expertise and service quality are the keys to success. With this vision, BGS is committed to supporting companies, institutions and organisations in their digital transformation and technology development projects.',
        p2: 'Our ambition is to provide reliable, innovative solutions tailored to our clients’ needs, while placing satisfaction, proximity and trust at the heart of our priorities.',
        p3: 'At BGS, we believe every project is an opportunity to create value, take on new challenges and build lasting partnerships.',
        p4: 'I would like to warmly thank our clients, partners and collaborators for their trust and commitment. Together, we will continue to build a future founded on excellence, innovation and performance.',
        signature: 'BGS, your trusted partner for a connected and innovative future.',
        name: 'Cherif Mohamed El Habib Oumar Bah',
        role: 'Managing Director of BGS',
        cta: 'Read the message from the Managing Director',
        lead: 'A vision driven by BGS leadership: innovation, expertise and proximity.'
      },
      welcome: {
        eyebrow: 'Welcome from Mauritania',
        title: 'Hello, welcome to BGS',
        text: 'Our team welcomes you and takes care of your IT needs, from the first discussion to on-site deployment. One team, clear answers and lasting follow-up.',
        alt: 'BGS welcome image in Mauritania',
        button: 'Talk to our team',
        caption: 'Your BGS contact — Mauritania'
      },
      fibre: {
        eyebrow: 'Fibre optic deployment',
        title: 'Our technicians deploy your fibre network',
        text: 'From survey to termination, BGS supports FTTH, FTTB and OSM projects in Mauritania with a field team and commissioning tests.',
        items: [
          'Survey, sizing and cable route plan',
          'Installation, splicing and labelling',
          'Optical testing and commissioning'
        ],
        button: 'Explore the fibre service'
      },
      expertise: {
        eyebrow: 'Engineering & expertise',
        title: 'Engineers to design, analyse and secure',
        text: 'Our engineers work on architecture, performance and security. They turn a technical constraint into a usable, documented solution.',
        items: ['Audit and architecture', 'Monitoring and performance', 'Security and continuity'],
        button: 'See all our expertise'
      },
      productWeek: {
        eyebrow: 'Product of the week',
        title: 'Featured this week',
        note: 'Reference, specifications and price to be filled in the configuration.',
        open: 'Product of the week',
        catalog: 'View the full catalogue',
        close: 'Close',
        stock: 'Availability',
        ref: 'Reference'
      },
      home: {
        badge: 'Integrator · Advisor · Technology partner',
        titleLead: 'Your technology partner',
        titleAccent: 'for a connected future',
        subtitle: 'BGS designs, deploys and secures IT environments for organisations. From infrastructure to the cloud, we turn technology into a concrete advantage for your business.',
        primary: 'Discover our services', secondary: 'Request a quote',
        heroPanel: {
          title: 'BGS ecosystem', subtitle: 'Infrastructure · Network · Security',
          online: 'Operational', nodes: 'Active nodes', protection: 'Protection', cloud: 'Hybrid cloud', sync: 'Synchronised'
        },
        trustTitle: 'Expertise covering your entire digital chain',
        trust: ['Infrastructure', 'Networks & telecoms', 'Fibre optics', 'Cybersecurity', 'Support & maintenance', 'Cloud & digital', 'Development & CRM', 'Equipment & stock'],
        intro: {
          eyebrow: 'Who we are',
          title: 'Technology in the service of your business performance',
          p1: 'BGS supports organisations in designing, deploying and operating their information systems. Our approach combines technical expertise, method and closeness to address real business needs.',
          p2: 'We cover the entire lifecycle: audit, architecture, integration, security, support and evolution. One point of contact, a coherent vision and solutions built to last.',
          link: 'Learn more about BGS',
          team: 'Our team brings together complementary profiles in infrastructure, networks, fibre optics, security, cloud and development. Every member works to the same standard: understand the need, design a suitable solution and maintain it over time. This versatility lets us handle your projects end to end, without multiplying points of contact.'
        },
        services: {
          eyebrow: 'Our expertise', title: 'Complete and coherent IT services',
          subtitle: 'Eleven complementary areas of expertise to build, secure and evolve your digital environment.'
        },
        why: {
          eyebrow: 'Why choose BGS', title: 'A demanding partner, by your side',
          subtitle: 'We prioritise execution quality, clear communication and durable solutions.',
          items: [
            { title: 'Cross-functional expertise', text: 'Networks, servers, security, cloud and development brought together in one team.' },
            { title: 'Responsive field support', text: 'Remote and on-site assistance matched to the urgency of each situation.' },
            { title: 'Tailored solutions', text: 'Architectures designed for your organisation, not a generic catalogue.' },
            { title: 'Security by design', text: 'System and data protection built in from the design stage.' },
            { title: 'Transparency', text: 'Clearly defined scope, deliverables and costs before every assignment.' },
            { title: 'Lasting support', text: 'Documentation, training and knowledge transfer so you stay autonomous.' }
          ]
        },
        process: {
          eyebrow: 'Our method', title: 'Four steps, one controlled delivery',
          subtitle: 'A simple, rigorous method from the first conversation to continuous improvement.',
          steps: [
            { title: 'Listen & audit', text: 'Understand your context, constraints and objectives.' },
            { title: 'Design', text: 'Define the architecture, solutions and deployment plan.' },
            { title: 'Deploy', text: 'Integrate, configure, test and secure with transparent monitoring.' },
            { title: 'Operate', text: 'Monitor, maintain and evolve over time.' }
          ]
        },
        stats: [
          { value: '11', label: 'Expertise areas' },
          { value: '03', label: 'Available languages' },
          { value: '01', label: 'Dedicated contact' }
        ],
        cta: { title: 'Have an IT project in mind?', text: 'Let’s talk about your needs. We will provide a clear answer tailored to your context and priorities.', button: 'Request a quote', wa: 'Message us on WhatsApp' }
      },
      about: {
        eyebrow: 'About BGS', title: 'A technology company focused on action',
        lead: 'BGS brings complementary skills together around one ambition: making information systems reliable, secure and useful for the organisations that depend on them.',
        company: {
          title: 'Our company',
          p1: 'BGS is an IT services company specialising in technology integration and digital transformation. We help organisations modernise their infrastructure, secure their systems and develop their digital capabilities.',
          p2: 'Our role is that of a full technical partner: we analyse, design, deploy and maintain coherent IT environments, with a constant focus on ease of use and cost control.'
        },
        vision: { title: 'Our vision', text: 'To be recognised as a regional reference in IT services: a company combining technical rigour, responsible innovation and a deep understanding of its clients’ business challenges.' },
        mission: { title: 'Our mission', text: 'To deliver reliable and accessible technology solutions, and help every organisation build a high-performing, secure and scalable digital environment.' },
        values: {
          title: 'Our values', subtitle: 'The principles guiding our decisions and daily work.',
          items: [
            { title: 'Rigour', text: 'Documented methods, thorough testing and attention to detail.' },
            { title: 'Reliability', text: 'Robust solutions and commitments honoured over time.' },
            { title: 'Innovation', text: 'Adopting useful technologies without chasing trends.' },
            { title: 'Closeness', text: 'Understanding businesses and speaking our partners’ language.' },
            { title: 'Integrity', text: 'Independent, honest and proportionate recommendations.' },
            { title: 'Knowledge sharing', text: 'Sharing expertise so our clients become autonomous.' }
          ]
        },
        commitment: {
          title: 'Our commitment to our clients',
          p1: 'We commit to measurable outcomes: available systems, respected deadlines and clear information at every stage. Each assignment has a defined scope, ongoing tracking and documented handover.',
          p2: 'Our priority is lasting satisfaction: we prefer a well-designed, well-maintained solution over a one-off fix that simply moves the problem elsewhere.'
        },
        team: {
          title: 'Our team’s expertise',
          subtitle: 'Complementary profiles, one shared commitment to results.',
          p1: 'BGS relies on a team of IT and telecommunications professionals with skills in network engineering, system administration, cybersecurity, fibre optic deployment, cloud and software development. This diversity of profiles allows us to approach every project with a complete vision, from technical assessment through to operation.',
          p2: 'Our teams are used to working on site and remotely, in live environments. They favour documented methods, testing before go-live and clear reporting of results. Building your staff’s skills is an integral part of the support we provide.',
          items: [
            { title: 'Network & fibre engineering', text: 'Design, cabling, FTTH / FTTB / OSM deployment and link monitoring.' },
            { title: 'Systems & cloud', text: 'Server administration, virtualisation, cloud migration and backups.' },
            { title: 'Security & continuity', text: 'Hardening, access protection and disaster recovery plans.' },
            { title: 'Project delivery', text: 'Scoping, planning, documentation and knowledge transfer.' }
          ]
        },
        approach: {
          title: 'Innovation and quality', subtitle: 'Our approach to continuous improvement.',
          items: [
            { title: 'Assess before recommending', text: 'Every proposal is based on an audit and on expressed needs.' },
            { title: 'Design for longevity', text: 'Scalable, documented and easy-to-hand-over architectures.' },
            { title: 'Measure quality', text: 'Testing, monitoring and indicators to verify real results.' },
            { title: 'Improve continuously', text: 'Feedback and technology watch built into our practices.' }
          ]
        },
        cta: { title: 'Let’s build your digital environment together', text: 'Tell us about your context: we will provide an initial analysis and a concrete way forward.', button: 'Discuss your project' }
      },
      services: {
        eyebrow: 'Our services', title: 'Eleven areas of expertise for your digital infrastructure',
        lead: 'Every service is adapted to your context: organisation size, business constraints, required security level and budget. Find the detail of each area below.',
        note: 'Scope and deliverables are agreed with you before each assignment.',
        items: [
          {
            id: 'infrastructure', icon: 'server', name: 'IT infrastructure',
            short: 'Solid foundations for your systems and applications.',
            description: 'Design, deployment and administration of your physical and virtual infrastructure, from servers to end-user workstations.',
            features: ['Server installation and configuration', 'Windows Server and Linux', 'Virtualisation', 'IT equipment maintenance', 'Infrastructure management'],
            detailTitle: 'Infrastructure built to last',
            deliverables: ['Architecture diagram and asset inventory', 'Deployment plan and operating procedures', 'Technical documentation handed to your team'],
            benefits: ['Improved availability and performance', 'Controlled scalability', 'Simpler day-to-day administration']
          },
          {
            id: 'reseaux', icon: 'network', name: 'Networks & telecommunications',
            short: 'A fast, stable and future-ready network.',
            description: 'Design, installation and monitoring of your LAN and WAN networks, with particular attention to connection quality.',
            features: ['LAN and WAN network installation', 'Cat6 and fibre optic cabling', 'Router and switch configuration', 'Professional Wi-Fi', 'Network monitoring'],
            detailTitle: 'Reliable connectivity, end to end',
            deliverables: ['Cabling plan and logical network diagram', 'Documented equipment configuration', 'Test and performance report'],
            benefits: ['Better throughput and stability', 'Wi-Fi coverage matched to real usage', 'Fast incident detection']
          },
          {
            id: 'cybersecurite', icon: 'shield', name: 'Cybersecurity',
            short: 'Protecting your systems, data and users.',
            description: 'Assessment, hardening and monitoring of your digital environment to reduce threat exposure and strengthen resilience.',
            features: ['IT security audit', 'Network and server protection', 'Professional firewalls and antivirus', 'Backup and recovery', 'Cybersecurity awareness'],
            detailTitle: 'Security as a process, not a product',
            deliverables: ['Audit report with remediation priorities', 'Security policies and protection rules', 'Tested backup and recovery plan'],
            benefits: ['Reduced attack surface', 'Incident response capability', 'Better-informed users']
          },
          {
            id: 'support', icon: 'headset', name: 'IT support & maintenance',
            short: 'Help available when your business needs it.',
            description: 'Handling of incidents and everyday requests, with clear tracking and interventions adapted to your service constraints.',
            features: ['Technical assistance', 'Helpdesk and ticket management', 'Preventive and corrective maintenance', 'Workstation monitoring', 'Remote and on-site support'],
            detailTitle: 'Tracked and transparent support',
            deliverables: ['Ticket process and priority levels', 'Intervention report after each mission', 'Recurring incident tracking report'],
            benefits: ['Reduced downtime', 'Clear history of interventions', 'Proactive fleet maintenance']
          },
          {
            id: 'cloud', icon: 'cloud', name: 'Cloud & digital transformation',
            short: 'Modernise your workflows without losing control.',
            description: 'Support for cloud migration and operations, with rigorous management of identities, access and data.',
            features: ['Cloud migration', 'Microsoft 365', 'Account and access management', 'Backup solutions', 'Digital transformation support'],
            detailTitle: 'A useful, controlled and secure cloud',
            deliverables: ['Migration study and cutover plan', 'Configuration of services and access', 'Administrator guide and best practices'],
            benefits: ['Easier collaboration', 'Better cost and access control', 'Stronger service continuity']
          },
          {
            id: 'developpement', icon: 'code', name: 'Software development',
            short: 'Digital tools built around your business processes.',
            description: 'Design and development of web solutions and management applications, integrated with existing systems and automating repetitive tasks.',
            features: ['CRM development', 'Website creation', 'Web and mobile applications', 'Management applications', 'Process automation', 'Business solution integration'],
            detailTitle: 'From business need to working tool',
            deliverables: ['Specification and functional mock-ups', 'Developed and tested application', 'Technical documentation and user training'],
            benefits: ['Smoother processes', 'Centralised data', 'Scalable and maintainable tools']
          },
          {
            id: 'video', icon: 'camera', name: 'Video surveillance & access control',
            short: 'Secure premises and manage access.',
            description: 'Deployment of video surveillance and access control systems, integrated into your network and available for remote monitoring.',
            features: ['IP camera installation', 'Video surveillance system configuration', 'Access control', 'Site security'],
            detailTitle: 'Surveillance you can use every day',
            deliverables: ['Camera and access point layout study', 'System configuration and setup', 'Training on use and footage review'],
            benefits: ['Real-time visibility', 'Controlled and traceable access', 'Archiving tailored to your needs']
          },
          {
            id: 'conseil', icon: 'compass', name: 'IT consulting & advisory',
            short: 'Make decisions with clear, independent technical insight.',
            description: 'Audit, architecture design and technology consulting to inform your decisions and build your teams’ skills.',
            features: ['IT systems audit', 'Architecture study and design', 'Technology consulting', 'Team training', 'Business IT support'],
            detailTitle: 'An informed decision, a concrete plan',
            deliverables: ['Audit report and gap analysis', 'Architecture proposal and roadmap', 'Training materials for your teams'],
            benefits: ['Justified technology choices', 'Prioritised investment', 'Stronger internal skills']
          },
          {
            id: 'fibre-optique', icon: 'fiber', name: 'Fibre optic deployment',
            short: 'Connect your sites with a high-performance, durable optical link.',
            description: 'Design, deployment and termination of FTTH, FTTB and OSM fibre optic networks, including link testing and monitoring.',
            features: ['Fibre network design and sizing', 'FTTH deployment (fibre to the home)', 'FTTB deployment (fibre to the building)', 'OSM deployment', 'Cabling, termination and link testing'],
            detailTitle: 'Optical connectivity built to last',
            deliverables: ['Deployment plan and routing diagram', 'Link test and qualification report', 'Documentation of equipment and termination points'],
            benefits: ['High bandwidth and low latency', 'Scalability for future sites', 'Documented and maintainable optical infrastructure']
          },
          {
            id: 'vente-materiel', icon: 'layers', name: 'Telecom & IT equipment supply',
            short: 'The right equipment, selected, delivered and installed.',
            description: 'Supply of telecom and IT equipment suited to your needs, with advice on choosing devices, installation and reference tracking.',
            features: ['Network and telecom equipment supply', 'Fibre optic equipment (cables, ODF, SFP modules)', 'Computers, servers and IT devices', 'Selection matched to your budget', 'Installation and configuration', 'Stock management and reference tracking'],
            detailTitle: 'Simple, controlled procurement',
            deliverables: ['Equipment list with specifications', 'Delivery note and equipment condition report', 'Installation and commissioning certificate'],
            benefits: ['Equipment suited to your environment', 'Better tracking of purchases and stock', 'Ready-to-use installation']
          },
          {
            id: 'blr-vsat', icon: 'activity', name: 'BLR & VSAT installation',
            short: 'Connect hard-to-reach sites via radio or satellite links.',
            description: 'Installation and commissioning of BLR (wireless local loop) links and VSAT stations to provide connectivity to remote or isolated sites.',
            features: ['BLR (wireless local loop) link installation', 'VSAT station installation and alignment', 'Modem and router configuration', 'Link testing and commissioning', 'Maintenance and monitoring of installations'],
            detailTitle: 'Reliable connectivity even without terrestrial network',
            deliverables: ['Coverage study and link sizing', 'Installation report and performance test results', 'Operating and maintenance procedures'],
            benefits: ['Remote sites connected to the network', 'Monitored throughput and availability', 'Structured maintenance interventions']
          }
        ],
        cta: { title: 'Your need is not on this list?', text: 'Contact us: we review every request and can combine several areas of expertise.', button: 'Discuss my project' }
      },
      itsupport: {
        nav: 'BGS IT SUPPORT',
        eyebrow: 'BGS IT SUPPORT',
        title: 'Simplify your IT management!',
        lead: 'Discover a professional solution that centralises incident management, tickets, IT asset tracking, interventions and network monitoring.',
        pitch: 'With BGS IT SUPPORT, your teams become more productive, you save time and you control your IT infrastructure from a single platform.',
        audience: 'A solution designed for businesses, public administrations and institutions.',
        slogan: 'BGS IT SUPPORT: Your IT under control!',
        cta: { title: 'Contact us for a demonstration', text: 'Discover our solutions and discuss your requirements with our team.', button: 'Request a demonstration' },
        features: {
          eyebrow: 'One platform, all your operations', title: 'BGS IT SUPPORT modules',
          items: [
            { title: 'Incident management', text: 'Centralise reports, assess their severity and track resolution.' },
            { title: 'Tickets & requests', text: 'Organise user requests with clear priorities and owners.' },
            { title: 'IT asset inventory', text: 'Equipment inventory, status, assignment and intervention history.' },
            { title: 'Interventions', text: 'Planning, tracking and reporting for on-site or remote interventions.' },
            { title: 'Network monitoring', text: 'Visibility over equipment availability and incident alerts.' },
            { title: 'Dashboards', text: 'Clear indicators to manage activity and service quality.' }
          ]
        },
        benefits: {
          eyebrow: 'The benefits', title: 'Your IT under control',
          items: [
            { title: 'Improved productivity', text: 'Less time spent coordinating and tracking requests.' },
            { title: 'Greater responsiveness', text: 'An immediate view of incidents and their progress.' },
            { title: 'Controlled infrastructure', text: 'An up-to-date inventory and continuous equipment monitoring.' }
          ]
        },
        home: {
          eyebrow: 'BGS IT SUPPORT', title: 'Your IT under control',
          text: 'Incidents, tickets, IT assets, interventions and network monitoring: one platform to run your infrastructure.',
          button: 'Discover BGS IT SUPPORT'
        }
      },
      products: {
        eyebrow: 'Products & stock',
        title: 'Equipment and solutions for your business',
        lead: 'Telecom, IT, network and satellite equipment: discover the product families BGS can supply, install and maintain. The catalogue is managed from the administrator area and evolves with your needs.',
        note: 'Server catalogue — additions and deletions are visible to all visitors after administrator sign-in.',
        categoriesTitle: 'Filter by category',
        categories: {
          all: 'All products',
          telecom: 'Telecom',
          informatique: 'IT',
          reseau: 'Network',
          fibre: 'Fibre optics',
          satellite: 'Satellite / VSAT'
        },
        ref: 'Reference',
        stock: {
          label: 'Availability',
          available: 'In stock',
          low: 'Limited stock',
          out: 'Out of stock'
        },
        stats: {
          total: 'References',
          available: 'In stock',
          alert: 'To monitor'
        },
        management: {
          eyebrow: 'Stock management',
          title: 'Clear, responsive stock tracking',
          p1: 'We organise the tracking of your equipment: incoming and outgoing items, stock levels, alert thresholds and inventory counts. Every movement is recorded to avoid shortages and idle stock.',
          p2: 'This tracking can be integrated into your internal tools or into a dedicated web application developed around your processes and working habits.',
          items: [
            {
              title: 'Incoming & outgoing',
              text: 'Recording of movements and quantity tracking by reference.'
            },
            {
              title: 'Alert thresholds',
              text: 'Low-stock alerts and anticipation of replenishments.'
            },
            {
              title: 'Inventory counts',
              text: 'Periodic checks and documented gaps between theoretical and actual stock.'
            },
            {
              title: 'Traceability',
              text: 'History of operations, owners and dates available to your team.'
            }
          ]
        },
        admin: {
          eyebrow: 'Catalogue management',
          title: 'Add or remove a product',
          note: 'Changes are saved on the server and visible to all visitors. Administrator session required.',
          name: 'Product name (FR)',
          nameEn: 'Name (English, optional)',
          nameAr: 'Name (Arabic, optional)',
          nameEs: 'Name (Spanish, optional)',
          description: 'Description (FR)',
          descriptionEs: 'Description (Spanish, optional)',
          category: 'Category',
          ref: 'Reference',
          stock: 'Availability',
          add: 'Add product',
          delete: 'Remove from catalogue',
          reset: 'Reset catalogue',
          success: 'Product added to the server catalogue.',
          deleted: 'Product removed from the server catalogue.',
          resetOk: 'Server catalogue reset.',
          required: 'Please enter at least the product name in French.',
          loginRequired: 'Sign in to modify the catalogue.',
          catalogNote: 'Signed in as administrator. Add or remove products below.',
          logout: 'Sign out'
        },
        cta: {
          title: 'Need a specific equipment or a tailored solution?',
          text: 'Tell us the reference you are looking for or your requirement: we will propose a suitable offer and a clear lead time.',
          button: 'Request a quote'
        }
      },
      solutions: {
        eyebrow: 'Our solutions', title: 'Answers organised around your needs',
        lead: 'Beyond individual services, BGS assembles coherent technology building blocks for concrete situations: reliability, connectivity, protection, collaboration and monitoring.',
        domains: [
          { id: 'infrastructure', icon: 'server', name: 'Infrastructure & continuity', text: 'Redundant, monitored foundations to keep your business running.',
            items: ['Virtualised infrastructure', 'Backup and disaster recovery', 'Centralised monitoring', 'Preventive maintenance'] },
          { id: 'collaboration', icon: 'cloud', name: 'Digital workplace', text: 'Secure collaboration tools accessible wherever your teams work.',
            items: ['Microsoft 365', 'Identity and access', 'Standardised workstation', 'Remote collaboration'] },
          { id: 'securite', icon: 'shield', name: 'Security & compliance', text: 'Protection matched to your exposure and data sensitivity.',
            items: ['Audit and remediation plan', 'Firewalls and segmentation', 'Team awareness', 'Proven recovery'] },
          { id: 'connectivite', icon: 'network', name: 'Connectivity & sites', text: 'Link your sites, devices and users through reliable networks.',
            items: ['LAN / WAN and fibre optic', 'BLR and VSAT links', 'Professional Wi-Fi', 'IP video surveillance', 'Access control'] }
        ],
        byNeed: {
          title: 'By business need', subtitle: 'Every context calls for a tailored response.',
          items: [
            { title: 'Growing SMEs', text: 'Structure infrastructure and digital workflows without adding management complexity.' },
            { title: 'Multi-site organisations', text: 'Unify connectivity, security and monitoring across several locations.' },
            { title: 'Sensitive environments', text: 'Strengthen protection of systems, access and critical data.' },
            { title: 'Transformation projects', text: 'Modernise progressively with a controlled migration plan.' }
          ]
        },
        cta: { title: 'Let’s build the right solution for your context', text: 'Describe your environment and goals: we will propose an architecture and a roadmap.', button: 'Discuss my solution' }
      },
      projects: {
        eyebrow: 'Our projects', title: 'Projects shown for illustration purposes',
        lead: 'This gallery is an editable template: replace each example with your own projects, including photos, descriptions, categories and technologies. No client or reference is invented here.',
        note: 'Sample content — replace with your real projects.',
        filters: { all: 'All', infrastructure: 'Infrastructure', reseaux: 'Networks', securite: 'Security', cloud: 'Cloud', developpement: 'Development' },
        items: [
          { name: 'Infrastructure deployment', description: 'Sample assignment: design and installation of a virtualised infrastructure with operating documentation.' },
          { name: 'Network modernisation', description: 'Sample assignment: restructuring a local network, structured cabling and professional Wi-Fi deployment.' },
          { name: 'Security hardening', description: 'Sample assignment: security audit, firewall configuration and implementation of a backup policy.' },
          { name: 'Cloud migration', description: 'Sample assignment: progressive migration of services and user accounts to a cloud environment.' },
          { name: 'Business application', description: 'Sample assignment: development of a web-based management application with process automation.' },
          { name: 'IP video surveillance', description: 'Sample assignment: installation of IP cameras, remote access setup and access control.' }
        ],
        cta: { title: 'Your projects deserve a strong presentation', text: 'Entrust us with your next project and share the elements you would like to highlight.', button: 'Discuss a project' }
      },
      contact: {
        eyebrow: 'Contact', title: 'Let’s talk about your IT project',
        lead: 'Tell us about your need. We will reply with an initial analysis and a proposal tailored to your context.',
        form: {
          title: 'Send a request', subtitle: 'Fields marked with an asterisk are required.',
          firstName: 'First name *', lastName: 'Last name *', company: 'Company',
          email: 'Email address *', phone: 'Phone', service: 'Requested service *',
          servicePlaceholder: 'Select a service', other: 'Other / Not specified',
          message: 'Describe your need *', messagePlaceholder: 'Describe your environment, objectives and timeline…',
          consent: 'I agree that BGS may use these details to respond to my request. *',
          submit: 'Send my request', sending: 'Sending…',
          successTitle: 'Request sent', successText: 'Thank you for your message. Our team will get back to you shortly.',
          errorTitle: 'Sending failed', errorText: 'An error occurred. Please try again or contact us directly.',
          reset: 'Send another request', privacy: 'Your data is used only to process your request.'
        },
        info: {
          title: 'Our details', subtitle: 'The information below should be filled in the site configuration.',
          email: 'Email', phone: 'Phone', address: 'Address', hours: 'Opening hours',
          whatsappTitle: 'Quick contact on WhatsApp', whatsappText: 'Talk directly with our team on WhatsApp.',
          whatsappButton: 'Open WhatsApp'
        },
        faq: {
          title: 'Frequently asked questions',
          items: [
            { q: 'How does a first contact work?', a: 'We discuss your context and objectives, then define together the scope of a potential assignment.' },
            { q: 'Do you provide on-site support?', a: 'Yes, depending on the nature of the mission and your location. The arrangements are defined when your request is reviewed.' },
            { q: 'Can I request a quote for several services?', a: 'Yes. List all your needs in the form or contact us on WhatsApp.' }
          ]
        }
      },
      footer: {
        tagline: 'Infrastructure, security and digital transformation in service of your business.',
        quickTitle: 'Navigation', servicesTitle: 'Our services', contactTitle: 'Contact', socialTitle: 'Follow us',
        legal: 'Legal notice', privacy: 'Privacy policy',
        copyright: '© {year} BGS. All rights reserved.',
        rights: 'Built for organisations that value reliability and clarity.',
        setupNotice: 'Some contact details still need to be filled in assets/js/config.js before going live.',
        backToTop: 'Back to top'
      },
      legal: {
        title: 'Legal notice', updated: 'Last updated: to be completed',
        intro: 'This website is published by BGS. The information below must be completed with the real legal details before publication.',
        sections: [
          { title: 'Website publisher', body: 'BGS — legal form, registration number, registered office address, phone and email: to be completed.' },
          { title: 'Publication director', body: 'Name and role of the publication director: to be completed.' },
          { title: 'Hosting', body: 'Hosting provider name, address and contact details: to be completed.' },
          { title: 'Intellectual property', body: 'All content, text, logos and graphic elements on this site are the property of BGS or their respective rights holders. Any reproduction, even partial, requires prior authorisation.' },
          { title: 'Hyperlinks', body: 'BGS does not control the content of third-party websites linked from this site and accepts no responsibility for their content.' },
          { title: 'Contact', body: 'For any question regarding this notice, please use the contact form or the details available on the site.' }
        ]
      },
      privacy: {
        title: 'Privacy policy', updated: 'Last updated: to be completed',
        intro: 'BGS cares about the protection of your personal data. This document describes, as a template, the information collected through the site and how it is processed.',
        sections: [
          { title: 'Data collected', body: 'The contact form collects the information you voluntarily provide: first name, last name, company, email address, phone number, requested service and description of your need.' },
          { title: 'Purposes', body: 'This data is used solely to process your request, reply to you and manage the commercial relationship.' },
          { title: 'Retention', body: 'Data is kept for the time needed to handle the request and manage the relationship, then deleted or archived according to applicable legal obligations.' },
          { title: 'Recipients', body: 'Data is not sold. It may be processed by technical providers responsible for hosting and email delivery as part of service provision.' },
          { title: 'Your rights', body: 'You may request access, rectification, deletion or restriction of processing, and object to certain processing, by contacting us through the contact form.' },
          { title: 'Cookies', body: 'This site only uses local information required for its operation, in particular remembering your language choice. No advertising cookies are set.' },
          { title: 'Security', body: 'Technical and organisational measures are in place to limit data access, including form validation, anti-spam controls and rate limiting on submissions.' }
        ]
      },
      notfound: { code: '404', title: 'This page could not be found', text: 'The page you are looking for does not exist or has moved. You can return home or browse our services.', button: 'Back to home' },
      validation: {
        firstName: 'Please enter your first name.', lastName: 'Please enter your last name.',
        email: 'Please enter a valid email address.', phone: 'Please enter a valid phone number.',
        service: 'Please select a service.', message: 'Please describe your need (at least 10 characters).',
        consent: 'Your agreement is required to send the request.',
        spam: 'The request could not be validated. Please try again.',
        network: 'Unable to reach the server. Check your connection or use WhatsApp.'
      }
    },

    /* =============================== العربية ============================== */
    ar: {
      code: 'ar', dir: 'rtl', label: 'العربية', short: 'AR',
      meta: {
        home:      { title: 'الرئيسية', description: 'شركة بى جى إس — شريكك التكنولوجي لمستقبل متصل. البنية التحتية والشبكات والأمن السيبراني والحوسبة السحابية وتطوير البرمجيات.' },
        about:     { title: 'من نحن', description: 'تعرّف على شركة بى جى إس لخدمات تكنولوجيا المعلومات: رؤيتنا ورسالتنا وقيمنا ونهجنا في الابتكار.' },
        services:  { title: 'خدماتنا', description: 'أحد عشر مجال خبرة لدى بى جى إس: البنية التحتية والشبكات والألياف البصرية ونظم CRM وتطبيقات الويب والهاتف وبيع المعدات وتركيب BLR وVSAT والأمن السيبراني والدعم والسحابة والمراقبة والاستشارات وإدارة المخزون.' },
        solutions: { title: 'حلولنا', description: 'حلول بى جى إس التقنية مصنّفة حسب المجال واحتياج العميل: الاستمرارية والتعاون والأمان والاتصال والإشراف.' },
        itsupportMeta: { title: 'BGS IT SUPPORT', description: 'مركزية الحوادث والتذاكر وجرد المعدات والتدخلات والإشراف على الشبكة في منصة واحدة.' },
        products:  { title: 'منتجاتنا', description: 'معدات الاتصالات وتكنولوجيا المعلومات وتركيب BLR وVSAT وإدارة المخزون — كتالوج BGS يُدار عبر الإنترنت.' },
        projects:  { title: 'مشاريعنا', description: 'معرض مشاريع تكنولوجيا المعلومات لدى بى جى إس. محتوى قابل للتعديل دون ذكر عملاء أو مراجع وهمية.' },
        contact:   { title: 'اتصل بنا', description: 'تواصل مع بى جى إس لطلب عرض سعر أو تدقيق أو خدمة تقنية. نموذج اتصال وواتساب.' },
        legal:     { title: 'الإشعار القانوني', description: 'الإشعار القانوني لموقع بى جى إس.' },
        privacy:   { title: 'سياسة الخصوصية', description: 'سياسة الخصوصية ومعالجة البيانات الشخصية في موقع بى جى إس.' },
        notfound:  { title: 'الصفحة غير موجودة', description: 'تعذّر العثور على الصفحة المطلوبة.' }
      },
      nav: {
        home: 'الرئيسية', about: 'من نحن', services: 'خدماتنا', solutions: 'حلولنا',
        projects: 'مشاريعنا', products: 'منتجاتنا', contact: 'اتصل بنا', quote: 'اطلب عرض سعر',
        whatsapp: 'واتساب', language: 'اللغة', menu: 'فتح القائمة', close: 'إغلاق القائمة',
        skip: 'الانتقال إلى المحتوى الرئيسي', topbarTagline: 'تكنولوجيا · بنية تحتية · أمان',
        phone: 'الهاتف', email: 'البريد الإلكتروني'
      },
      common: {
        learnMore: 'اعرف المزيد', requestQuote: 'اطلب عرض سعر', contactUs: 'تواصل معنا',
        discoverServices: 'اكتشف خدماتنا', seeAllServices: 'عرض جميع الخدمات',
        seeAllProjects: 'عرض جميع المشاريع', readMore: 'اقرأ المزيد', backHome: 'العودة للرئيسية',
        toConfigure: 'يُحدد لاحقاً', unavailable: 'معلومة يجب إضافتها في إعدادات الموقع.',
        features: 'الخدمات المضمنة', deliverables: 'المخرجات', benefits: 'المزايا',
        scroll: 'مرّر', close: 'إغلاق', expand: 'عرض التفاصيل', collapse: 'إخفاء التفاصيل',
        example: 'محتوى تجريبي — يُستبدل بمعلوماتكم الخاصة.'
      },
      admin: {
        eyebrow: 'مساحة المسؤول',
        title: 'إدارة الموقع',
        lead: 'أنشئ حسابك الآمن لإدارة كتالوج المنتجات.',
        setupTitle: 'إنشاء حساب المسؤول',
        loginTitle: 'تسجيل دخول المسؤول',
        username: 'اسم المستخدم',
        password: 'كلمة المرور',
        passwordHint: '8 أحرف على الأقل.',
        setupButton: 'إنشاء حسابي',
        loginButton: 'تسجيل الدخول',
        loggedIn: 'تم تسجيل الدخول',
        welcome: 'مرحباً، {site}',
        openCatalog: 'إدارة المنتجات',
        logout: 'تسجيل الخروج',
        protected: 'هذه المساحة مخصصة لمسؤول الموقع.',
        accountNote: 'يُحفظ الحساب على الخادم. لا توجد بيانات دخول افتراضية.',
        invalid: 'اسم المستخدم أو كلمة المرور غير صحيحة.',
        taken: 'يوجد حساب مسؤول بالفعل.',
        network: 'الخادم غير متاح. يُرجى المحاولة مرة أخرى.',
        required: 'يُرجى تعبئة جميع الحقول.',
        weak: 'يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل.',
        successSetup: 'تم إنشاء الحساب. جارٍ التوجيه إلى الكتالوج…',
        successLogin: 'تم تسجيل الدخول. جارٍ التوجيه…'
      },
      wa: {
        tooltip: 'تواصل معنا عبر واتساب', header: 'واتساب',
        message: 'مرحباً BGS، أود الحصول على معلومات حول خدماتكم في مجال تكنولوجيا المعلومات.',
        notConfigured: 'رقم واتساب يجب إضافته في assets/js/config.js',
        floatingLabel: 'تحدث معنا عبر واتساب'
      },
      director: {
        eyebrow: 'كلمة المدير العام',
        title: 'كلمة من مديرنا العام',
        salutation: 'أعزائي الشركاء والعملاء والزوار،',
        welcome: 'يسعدني كثيراً أن أرحب بكم في الموقع الرسمي لشركة BGS.',
        p1: 'في عالم تتطور فيه التكنولوجيا باستمرار، نؤمن أن الابتكار والخبرة وجودة الخدمات هي مفاتيح النجاح. من هذا المنطلق، تلتزم BGS بدعم الشركات والمؤسسات والمنظمات في مشاريع التحول الرقمي والتطوير التكنولوجي.',
        p2: 'طموحنا هو تقديم حلول موثوقة ومبتكرة ومصممة لتلبية احتياجات عملائنا، مع وضع الرضا والقرب والثقة في صدارة أولوياتنا.',
        p3: 'في BGS، نؤمن أن كل مشروع هو فرصة لخلق قيمة ومواجهة تحديات جديدة وبناء شراكات مستدامة.',
        p4: 'أتقدم بخالص الشكر لعملائنا وشركائنا ومتعاونينا على ثقتهم والتزامهم. معاً، سنواصل بناء مستقبل يستند إلى التميز والابتكار والأداء.',
        signature: 'BGS، شريكك الموثوق لمستقبل متصل ومبتكر.',
        name: 'Cherif Mohamed El Habib Oumar Bah',
        role: 'المدير العام لشركة BGS',
        cta: 'اقرأ كلمة المدير العام',
        lead: 'رؤية تقودها إدارة BGS: الابتكار والخبرة والقرب.'
      },
      welcome: {
        eyebrow: 'مرحباً بكم من موريتانيا',
        title: 'أهلاً وسهلاً بكم في BGS',
        text: 'يرحب بكم فريقنا ويتولى احتياجاتكم التقنية، من التواصل الأول حتى النشر في الموقع. فريق واحد، إجابات واضحة، ومتابعة مستمرة.',
        alt: 'صورة استقبال BGS في موريتانيا',
        button: 'تحدث مع فريقنا',
        caption: 'جهة اتصالك في BGS — موريتانيا'
      },
      fibre: {
        eyebrow: 'نشر الألياف البصرية',
        title: 'فنيونا ينشرون شبكة الألياف البصرية',
        text: 'من الدراسة حتى الربط، ترافق BGS مشاريع FTTH وFTTB وOSM في موريتانيا بفريق ميداني واختبارات التشغيل.',
        items: [
          'الدراسة والتصميم وخطة التمديد',
          'التركيب والربط والتعريف بالوصلات',
          'اختبارات بصرية وتشغيل الخدمة'
        ],
        button: 'اكتشف خدمة الألياف'
      },
      expertise: {
        eyebrow: 'الهندسة والخبرة',
        title: 'مهندسون للتصميم والتحليل والتأمين',
        text: 'يعمل مهندسونا على البنية والأداء والأمن. يحولون القيد التقني إلى حل قابل للاستخدام وموثق.',
        items: ['التدقيق والبنية', 'المراقبة والأداء', 'الأمن واستمرارية العمل'],
        button: 'اطّلع على كل خبراتنا'
      },
      productWeek: {
        eyebrow: 'منتج الأسبوع',
        title: 'اكتشفه هذا الأسبوع',
        note: 'المرجع والمواصفات والسعر يُحدد في الإعدادات.',
        open: 'منتج الأسبوع',
        catalog: 'عرض كل المنتجات',
        close: 'إغلاق',
        stock: 'التوفر',
        ref: 'المرجع'
      },
      home: {
        badge: 'مُكامل · مستشار · شريك تكنولوجي',
        titleLead: 'شريكك التكنولوجي',
        titleAccent: 'لمستقبل متصل',
        subtitle: 'تصمّم شركة بى جى إس البيئات التقنية للمؤسسات وتنشرها وتؤمّنها. من البنية التحتية إلى السحابة، نحوّل التكنولوجيا إلى ميزة ملموسة لنشاطك التجاري.',
        primary: 'اكتشف خدماتنا', secondary: 'اطلب عرض سعر',
        heroPanel: {
          title: 'منظومة بى جى إس', subtitle: 'بنية تحتية · شبكة · أمان',
          online: 'تعمل', nodes: 'عُقد نشطة', protection: 'حماية', cloud: 'سحابة هجينة', sync: 'متزامن'
        },
        trustTitle: 'خبرات تغطي كامل سلسلتك الرقمية',
        trust: ['البنية التحتية', 'الشبكات والاتصالات', 'الألياف البصرية', 'الأمن السيبراني', 'الدعم والصيانة', 'السحابة والتحول الرقمي', 'التطوير ونظم CRM', 'المعدات والمخزون'],
        intro: {
          eyebrow: 'من نحن؟',
          title: 'التكنولوجيا في خدمة أداء مؤسستك',
          p1: 'تدعم بى جى إس المؤسسات في تصميم أنظمة معلوماتها ونشرها وتشغيلها. نجمع بين الخبرة التقنية والمنهجية والقرب من العميل لتلبية احتياجات حقيقية.',
          p2: 'نغطي دورة الحياة كاملة: التدقيق، المعمارية، الدمج، الحماية، الدعم والتطوير. نقطة اتصال واحدة، رؤية متماسكة، وحلول تدوم.',
          link: 'اعرف المزيد عن بى جى إس',
          team: 'يضم فريقنا ملفات متكاملة في البنية التحتية والشبكات والألياف البصرية والأمان والسحابة والتطوير. يعمل أعضاؤه جميعاً بمعيار واحد: فهم الحاجة، تصميم حل مناسب، ثم متابعته وصيانته عبر الوقت. تتيح لنا هذه التعددية تولي مشاريعك من البداية إلى النهاية دون تعدد جهات الاتصال.'
        },
        services: {
          eyebrow: 'خبراتنا', title: 'خدمات تقنية متكاملة ومتماسكة',
          subtitle: 'أحد عشر مجال خبرة متكاملة لبناء بيئتك الرقمية وتأمينها وتطويرها.'
        },
        why: {
          eyebrow: 'لماذا بى جى إس', title: 'شريك صارم إلى جانبك',
          subtitle: 'نولي أهمية لجودة التنفيذ ووضوح التواصل وديمومة الحلول المقدّمة.',
          items: [
            { title: 'خبرة متعددة التخصصات', text: 'الشبكات والخوادم والأمان والسحابة والتطوير في فريق واحد.' },
            { title: 'استجابة ميدانية سريعة', text: 'دعم عن بُعد وفي الموقع بما يتناسب مع درجة استعجال كل موقف.' },
            { title: 'حلول مصمّمة خصيصاً', text: 'معماريات مبنية على مؤسستك، لا على كتالوج عام.' },
            { title: 'الأمان منذ التصميم', text: 'حماية الأنظمة والبيانات مُدمجة منذ مرحلة الدراسة.' },
            { title: 'الشفافية', text: 'نطاق عمل ومخرجات وتكاليف واضحة قبل كل تدخل.' },
            { title: 'مرافقة مستدامة', text: 'توثيق وتدريب ونقل معارف للحفاظ على استقلاليتك.' }
          ]
        },
        process: {
          eyebrow: 'منهجيتنا', title: 'أربع خطوات وتنفيذ محكوم',
          subtitle: 'منهج بسيط ودقيق من أول تواصل حتى التحسين المستمر.',
          steps: [
            { title: 'الاستماع والتدقيق', text: 'فهم سياقك وقيودك وأهدافك.' },
            { title: 'التصميم', text: 'تحديد المعمارية والحلول وخطة النشر.' },
            { title: 'النشر', text: 'الدمج والضبط والاختبار والتأمين مع متابعة شفافة.' },
            { title: 'التشغيل', text: 'الإشراف والصيانة والتطوير عبر الوقت.' }
          ]
        },
        stats: [
          { value: '11', label: 'مجالات خبرة' },
          { value: '03', label: 'لغات متاحة' },
          { value: '01', label: 'جهة اتصال مخصصة' }
        ],
        cta: { title: 'لديك مشروع تقني؟', text: 'لنتحدث عن احتياجاتك. سنقدّم إجابة واضحة تناسب سياقك وأولوياتك.', button: 'اطلب عرض سعر', wa: 'راسلنا عبر واتساب' }
      },
      about: {
        eyebrow: 'عن بى جى إس', title: 'شركة تكنولوجية تركز على الفعل',
        lead: 'تجمع بى جى إس كروات متكاملة حول طموح واحد: جعل أنظمة المعلومات موثوقة وآمنة ومفيدة للمؤسسات التي تعتمد عليها.',
        company: {
          title: 'شركتنا',
          p1: 'بى جى إس شركة خدمات تكنولوجيا معلومات متخصصة في دمج الحلول التقنية والتحول الرقمي. نرافق المؤسسات في تحديث بنيتها التحتية وتأمين أنظمتها وتطوير استخداماتها الرقمية.',
          p2: 'دورنا هو دور الشريك التقني الشامل: نحلل ونصمم وننشر ونصون بيئات تقنية متماسكة، مع حرص دائم على سهولة الاستخدام والتحكم في التكاليف.'
        },
        vision: { title: 'رؤيتنا', text: 'أن نكون مرجعاً إقليمياً في خدمات تكنولوجيا المعلومات: شركة تجمع بين الصرامة التقنية والابتكار المسؤول والفهم العميق لتحديات أعمال عملائنا.' },
        mission: { title: 'رسالتنا', text: 'تقديم حلول تقنية موثوقة ومتاحة، ومساعدة كل مؤسسة على بناء بيئة رقمية عالية الأداء وآمنة وقابلة للتوسع.' },
        values: {
          title: 'قيمنا', subtitle: 'المبادئ التي تُوجّه قراراتنا وعملنا اليومي.',
          items: [
            { title: 'الصرامة', text: 'منهجيات موثقة واختبارات دقيقة وانتباه للتفاصيل.' },
            { title: 'الموثوقية', text: 'حلول متينة والتزامات يُوفى بها على المدى الطويل.' },
            { title: 'الابتكار', text: 'اعتماد التقنيات المفيدة دون الانسياب وراء الموضة.' },
            { title: 'القرب', text: 'فهم الأعمال والتحدث بلغة شركائنا.' },
            { title: 'النزاهة', text: 'توصيات مستقلة وصادقة ومتناسبة مع الحاجة.' },
            { title: 'نقل المعرفة', text: 'مشاركة الخبرات ليصبح عملاؤنا مستقلين.' }
          ]
        },
        commitment: {
          title: 'التزامنا تجاه عملائنا',
          p1: 'نلتزم بنتائج قابلة للقياس: أنظمة متاحة وآجال محترمة ومعلومات واضحة في كل مرحلة. لكل مهمة نطاق محدد ومتابعة مستمرة وتسليم موثّق.',
          p2: 'أولويتنا الرضا الدائم: نفضّل حلّاً مصمّماً جيداً ومصاناً جيداً على تدخل مؤقت ينقل المشكلة إلى مكان آخر.'
        },
        team: {
          title: 'كفاءة فريقنا',
          subtitle: 'ملفات متكاملة والتزام واحد تجاه النتيجة.',
          p1: 'تعتمد بى جى إس على فريق من متخصصي تكنولوجيا المعلومات والاتصالات، يجمع مهارات هندسة الشبكات وإدارة الأنظمة والأمن السيبراني ونشر الألياف البصرية والحوسبة السحابية والتطوير. يسمح هذا التنوع لنا بمعالجة كل مشروع برؤية شاملة، من الدراسة التقنية حتى التشغيل.',
          p2: 'اعتاد فرقنا العمل في الموقع وعن بُعد، داخل بيئات تعمل باستمرار. نعتمد منهجيات موثقة واختبارات قبل التشغيل وعرضاً واضحاً للنتائج. كما يُعد تطوير مهارات متعاونيكم جزءاً أساسياً من مرافقتنا.',
          items: [
            { title: 'هندسة الشبكات والألياف', text: 'التصميم والمدّ ونشر FTTH / FTTB / OSM والإشراف على الوصلات.' },
            { title: 'الأنظمة والسحابة', text: 'إدارة الخوادم والافتراضية والهجرة إلى السحابة والنسخ الاحتياطي.' },
            { title: 'الأمان والاستمرارية', text: 'التحصين وحماية الصلاحيات وخطط استعادة النشاط.' },
            { title: 'إدارة المشاريع', text: 'تحديد النطاق والجدولة والتوثيق ونقل المعرفة.' }
          ]
        },
        approach: {
          title: 'الابتكار والجودة', subtitle: 'نهجنا في التحسين المستمر.',
          items: [
            { title: 'التقييم قبل التوصية', text: 'كل مقترح يستند إلى تدقيق واحتياجات مُعبّر عنها.' },
            { title: 'التصميم للديمومة', text: 'معماريات قابلة للتوسع وموثقة وسهلة التسليم.' },
            { title: 'قياس الجودة', text: 'اختبارات وإشراف ومؤشرات للتحقق من النتائج الفعلية.' },
            { title: 'التحسين المستمر', text: 'الدروس المستفادة ومتابعة التقنيات جزء من ممارساتنا.' }
          ]
        },
        cta: { title: 'لنبنِ بيئتك الرقمية معاً', text: 'عرّفنا بسياقك: سنقدّم تحليلاً أولياً وخطوة عملية واضحة.', button: 'ناقش مشروعك' }
      },
      services: {
        eyebrow: 'خدماتنا', title: 'أحد عشر مجال خبرة لبنيتك الرقمية',
        lead: 'كل خدمة تُكيّف مع سياقك: حجم المؤسسة وقيود الأعمال ومستوى الأمان المطلوب والميزانية. تجد أدناه تفاصيل كل مجال.',
        note: 'يتم الاتفاق على النطاق والمخرجات معك قبل كل مهمة.',
        items: [
          {
            id: 'infrastructure', icon: 'server', name: 'البنية التحتية لتكنولوجيا المعلومات',
            short: 'أسس متينة لأنظمتك وتطبيقاتك.',
            description: 'تصميم ونشر وإدارة بنيتك التحتية المادية والافتراضية، من الخوادم إلى محطات المستخدمين.',
            features: ['تركيب الخوادم وضبطها', 'Windows Server وLinux', 'الافتراضية', 'صيانة المعدات التقنية', 'إدارة البنية التحتية'],
            detailTitle: 'بنية تحتية مبنية لتدوم',
            deliverables: ['مخطط معماري وجرد للأصول', 'خطة نشر وإجراءات تشغيل', 'وثائق تقنية تُسلّم لفريقك'],
            benefits: ['توافر وأداء أفضل', 'توسّع مُتحكّم به', 'إدارة يومية أبسط']
          },
          {
            id: 'reseaux', icon: 'network', name: 'الشبكات والاتصالات',
            short: 'شبكة سريعة ومستقرة وجاهزة للتوسع.',
            description: 'دراسة وتركيب ومراقبة شبكات LAN وWAN، مع اهتمام خاص بجودة الاتصال.',
            features: ['تركيب شبكات LAN وWAN', 'تأسيس كابلات Cat6 والألياف البصرية', 'ضبط الموجهات والمبدّلات', 'واي فاي احترافي', 'مراقبة الشبكات'],
            detailTitle: 'اتصال موثوق من طرف إلى طرف',
            deliverables: ['مخطط كابلات ومخطط منطقي للشبكة', 'ضبط موثّق للأجهزة', 'تقرير اختبارات وأداء'],
            benefits: ['سرعة واستقرار أفضل', 'تغطية واي فاي تناسب الاستخدام', 'اكتشاف سريع للحوادث']
          },
          {
            id: 'cybersecurite', icon: 'shield', name: 'الأمن السيبراني',
            short: 'حماية أنظمتك وبياناتك ومستخدميك.',
            description: 'تقييم وتقوية ومراقبة بيئتك الرقمية لتقليل التعرض للتهديدات وتعزيز المرونة.',
            features: ['تدقيق أمن تكنولوجيا المعلومات', 'حماية الشبكات والخوادم', 'جدران حماية ومضادات فيروسات احترافية', 'النسخ الاحتياطي والاستعادة', 'التوعية بالأمن السيبراني'],
            detailTitle: 'الأمان كعملية لا كمنتج',
            deliverables: ['تقرير تدقيق مع أولويات المعالجة', 'سياسات أمان وقواعد حماية', 'خطة نسخ احتياطي واستعادة مُختبرة'],
            benefits: ['تقليل سطح الهجوم', 'جاهزية للاستجابة للحوادث', 'مستخدمون أكثر وعياً']
          },
          {
            id: 'support', icon: 'headset', name: 'الدعم والصيانة التقنية',
            short: 'مساعدة متاحة عندما يحتاج نشاطك إليها.',
            description: 'معالجة الحوادث والطلبات اليومية مع متابعة واضحة وتدخلات تناسب قيود الخدمة لديك.',
            features: ['المساعدة التقنية', 'مكتب المساعدة وإدارة التذاكر', 'الصيانة الوقائية والتصحيحية', 'مراقبة محطات العمل', 'دعم عن بُعد وفي الموقع'],
            detailTitle: 'دعم مُتابع وشفاف',
            deliverables: ['عملية تذاكر ومستويات أولوية', 'تقرير تدخل بعد كل مهمة', 'تقرير متابعة الحوادث المتكررة'],
            benefits: ['تقليل توقف العمل', 'سجل واضح للتدخلات', 'صيانة استباقية للأجهزة']
          },
          {
            id: 'cloud', icon: 'cloud', name: 'السحابة والتحول الرقمي',
            short: 'حدّث استخداماتك دون فقدان السيطرة.',
            description: 'مرافقة في الهجرة إلى السحابة وتشغيلها، مع إدارة دقيقة للهويات والصلاحيات والبيانات.',
            features: ['الهجرة إلى السحابة', 'Microsoft 365', 'إدارة الحسابات والصلاحيات', 'حلول النسخ الاحتياطي', 'مرافقة التحول الرقمي'],
            detailTitle: 'سحابة مفيدة ومُحكومة وآمنة',
            deliverables: ['دراسة هجرة وخطة انتقال', 'ضبط الخدمات والصلاحيات', 'دليل إدارة وأفضل الممارسات'],
            benefits: ['تعاون أسهل', 'تحكم أفضل بالتكاليف والوصول', 'استمرارية خدمات أقوى']
          },
          {
            id: 'developpement', icon: 'code', name: 'التطوير التقني',
            short: 'أدوات رقمية تناسب عملياتك التجارية.',
            description: 'تصميم وتطوير حلول ويب وتطبيقات إدارية، مع الدمج مع الأنظمة القائمة وأتمتة المهام.',
            features: ['تطوير أنظمة CRM', 'إنشاء مواقع الويب', 'تطبيقات الويب والهاتف', 'تطبيقات الإدارة', 'أتمتة العمليات', 'دمج حلول الأعمال'],
            detailTitle: 'من الحاجة التجارية إلى أداة تشغيلية',
            deliverables: ['مواصفات ونماذج وظيفية', 'تطبيق مطوّر ومُختبر', 'وثائق تقنية وتدريب المستخدمين'],
            benefits: ['عمليات أكثر سلاسة', 'بيانات مركزية', 'أدوات قابلة للتوسع والصيانة']
          },
          {
            id: 'video', icon: 'camera', name: 'المراقبة بالفيديو والتحكم في الدخول',
            short: 'تأمين الأماكن وإدارة الدخول.',
            description: 'نشر أنظمة المراقبة بالفيديو والتحكم في الدخول، المدمجة في شبكتك والمتاحة للإشراف عن بُعد.',
            features: ['تركيب كاميرات IP', 'ضبط أنظمة المراقبة بالفيديو', 'التحكم في الدخول', 'تأمين المنشآت'],
            detailTitle: 'مراقبة يمكن استخدامها يومياً',
            deliverables: ['دراسة توزيع الكاميرات ونقاط الدخول', 'ضبط الأنظمة وإعدادها', 'تدريب على الاستخدام والاطلاع على التسجيلات'],
            benefits: ['رؤية لحظية', 'دخول مُتحكّم وموثّق', 'أرشفة تناسب احتياجاتك']
          },
          {
            id: 'conseil', icon: 'compass', name: 'الاستشارات والمرافقة التقنية',
            short: 'قراراتك برؤية تقنية واضحة ومستقلة.',
            description: 'تدقيق ودراسة معمارية واستشارة تقنية لترشيد قراراتك وتنمية مهارات فرقك.',
            features: ['تدقيق أنظمة تكنولوجيا المعلومات', 'دراسة وتصميم المعماريات', 'استشارات تقنية', 'تدريب الفرق', 'مرافقة المؤسسات'],
            detailTitle: 'قرار مدروس وخطة عملية',
            deliverables: ['تقرير تدقيق وتحليل الفجوات', 'مقترح معمارية وخارطة طريق', 'مواد تدريبية مُكيّفة للفرق'],
            benefits: ['خيارات تقنية مبررة', 'ترتيب أولويات الاستثمار', 'تعزيز المهارات الداخلية']
          },
          {
            id: 'fibre-optique', icon: 'fiber', name: 'نشر شبكات الألياف البصرية',
            short: 'ربط مواقعك بوصلة بصرية عالية الأداء وموثوقة.',
            description: 'تصميم ونشر وربط شبكات الألياف البصرية FTTH وFTTB وOSM، مع اختبار الوصلات والإشراف عليها.',
            features: ['تصميم وتحديد حجم شبكة الألياف', 'نشر FTTH (الألياف إلى المشترك)', 'نشر FTTB (الألياف إلى المبنى)', 'نشر OSM', 'المدّ والربط واختبار الوصلات'],
            detailTitle: 'اتصال بصري مصمّم ليدوم',
            deliverables: ['خطة النشر ومخطط التوجيه', 'تقرير اختبار وتأهيل الوصلات', 'توثيق المعدات ونقاط الربط'],
            benefits: ['سرعات عالية وزمن استجابة منخفض', 'قابلية التوسع للمواقع المستقبلية', 'بنية بصرية موثّقة وقابلة للصيانة']
          },
          {
            id: 'vente-materiel', icon: 'layers', name: 'بيع معدات الاتصالات وتكنولوجيا المعلومات',
            short: 'المعدة المناسبة، تُختار وتُسلّم وتُركّب.',
            description: 'توفير معدات الاتصالات وتكنولوجيا المعلومات الملائمة لاحتياجاتك، مع المشورة في اختيار الأجهزة والتركيب ومتابعة المراجع.',
            features: ['توفير معدات الشبكات والاتصالات', 'معدات الألياف البصرية (كابلات وODF ووحدات SFP)', 'أجهزة كمبيوتر وخوادم ومعدات تقنية', 'اختيار يناسب ميزانيتك', 'التركيب والضبط', 'إدارة المخزون ومتابعة المراجع'],
            detailTitle: 'توريد بسيط ومُتحكّم به',
            deliverables: ['قائمة المعدات المقترحة مع المواصفات', 'إشعار تسليم وحالة المعدات', 'شهادة التركيب والتشغيل'],
            benefits: ['معدات تناسب بيئتك', 'متابعة أفضل للمشتريات والمخزون', 'تركيب جاهز للاستخدام']
          },
          {
            id: 'blr-vsat', icon: 'activity', name: 'تركيب BLR وVSAT',
            short: 'ربط المواقع يصعب الوصول إليها عبر موجات الراديو أو القمر الصناعي.',
            description: 'تركيب وتشغيل وصلات BLR (الحلقة المحلية الراديوية) ومحطات VSAT لضمان الاتصال للمواقع البعيدة أو المعزولة.',
            features: ['تركيب وصلات BLR (الحلقة المحلية الراديوية)', 'تركيب محطات VSAT ومحاذاتها', 'ضبط المودمات والموجّهات', 'اختبار الوصلات والتشغيل', 'الصيانة والإشراف على التركيبات'],
            detailTitle: 'اتصال موثوق حتى دون شبكة أرضية',
            deliverables: ['دراسة التغطية وتحديد حجم الوصلة', 'تقرير التركيب ونتائج اختبارات الأداء', 'إجراءات التشغيل والصيانة'],
            benefits: ['ربط المواقع البعيدة بالشبكة', 'متابعة السرعة والتوفر', 'تدخلات صيانة منظّمة']
          }
        ],
        cta: { title: 'احتياجك غير مدرج في القائمة؟', text: 'تواصل معنا: ندرس كل طلب ويمكننا الجمع بين عدة مجالات خبرة.', button: 'ناقش مشروعي' }
      },
      itsupport: {
        nav: 'BGS IT SUPPORT',
        eyebrow: 'BGS IT SUPPORT',
        title: 'سهّل إدارة تقنية المعلومات لديك!',
        lead: 'اكتشف حلاً احترافياً يتيح مركزية إدارة الحوادث والتذاكر وجرد معدات تكنولوجيا المعلومات والتدخلات والإشراف على الشبكة.',
        pitch: 'مع BGS IT SUPPORT، ترفع إنتاجية فرقك وتوفّر الوقت وتتحكّم في بنيتك التحتية التقنية من منصة واحدة.',
        audience: 'حل موجّه للشركات والإدارات والمؤسسات.',
        slogan: 'BGS IT SUPPORT: تقنيتك تحت السيطرة!',
        cta: { title: 'تواصل معنا لحجز عرض توضيحي', text: 'تعرّف على حلولنا وناقش احتياجاتك مع فريقنا.', button: 'اطلب عرضاً توضيحياً' },
        features: {
          eyebrow: 'منصة واحدة لجميع عملياتك', title: 'وحدات BGS IT SUPPORT',
          items: [
            { title: 'إدارة الحوادث', text: 'مركزية البلاغات وتحديد خطورتها ومتابعة حلّها.' },
            { title: 'التذاكر والطلبات', text: 'تنظيم طلبات المستخدمين بأولويات ومسؤولين واضحين.' },
            { title: 'جرد المعدات', text: 'جرد الأجهزة وحالتها وإسنادها وسجل التدخلات.' },
            { title: 'التدخلات', text: 'التخطيط والمتابعة وتقرير التدخل في الموقع أو عن بُعد.' },
            { title: 'الإشراف على الشبكة', text: 'رؤية لتوفر المعدات وتنبيهات عند حدوث حادث.' },
            { title: 'لوحات المتابعة', text: 'مؤشرات واضحة لإدارة النشاط وجودة الخدمة.' }
          ]
        },
        benefits: {
          eyebrow: 'المزايا', title: 'تقنيتك تحت السيطرة',
          items: [
            { title: 'إنتاجية أعلى', text: 'وقت أقل في التنسيق ومتابعة الطلبات.' },
            { title: 'استجابة أسرع', text: 'رؤية فورية للحوادث ومراحل معالجتها.' },
            { title: 'بنية تحتية متحكّم بها', text: 'جرد محدّث وإشراف مستمر على المعدات.' }
          ]
        },
        home: {
          eyebrow: 'BGS IT SUPPORT', title: 'تقنيتك تحت السيطرة',
          text: 'الحوادث والتذاكر وجرد المعدات والتدخلات والإشراف على الشبكة: منصة واحدة لإدارة بنيتك التحتية.',
          button: 'اكتشف BGS IT SUPPORT'
        }
      },
      products: {
        eyebrow: 'المنتجات والمخزون',
        title: 'معدات وحلول تناسب نشاطك',
        lead: 'معدات الاتصالات وتكنولوجيا المعلومات والشبكات والأقمار الصناعية: تعرّف على عائلات المنتجات التي يمكن ل بى جى إس توفيرها وتركيبها وصيانتها. يُدار الكتالوج من مساحة المسؤول ويتطور حسب احتياجاتك.',
        note: 'كتالوج الخادم — تظهر الإضافات والحذف لجميع الزوار بعد تسجيل دخول المسؤول.',
        categoriesTitle: 'تصفية حسب الفئة',
        categories: {
          all: 'كل المنتجات',
          telecom: 'الاتصالات',
          informatique: 'تكنولوجيا المعلومات',
          reseau: 'الشبكات',
          fibre: 'الألياف البصرية',
          satellite: 'الأقمار الصناعية / VSAT'
        },
        ref: 'المرجع',
        stock: {
          label: 'التوفر',
          available: 'متوفر',
          low: 'كمية محدودة',
          out: 'نفد المخزون'
        },
        stats: {
          total: 'مراجع',
          available: 'متوفرة',
          alert: 'تحت المتابعة'
        },
        management: {
          eyebrow: 'إدارة المخزون',
          title: 'متابعة مخزون واضحة وسريعة',
          p1: 'ننظّم متابعة معداتك: الوارد والصادر ومستويات المخزون وحدود التنبيه والجرد. يُسجّل كل تحرك لتجنّب النفاد أو تجميد المعدات دون استخدام.',
          p2: 'يمكن دمج هذه المتابعة في أدواتك الداخلية أو في تطبيق ويب مخصّص نطوّره وفق عملياتك وعادات عملك.',
          items: [
            {
              title: 'الوارد والصادر',
              text: 'تسجيل التحركات ومتابعة الكميات لكل مرجع.'
            },
            {
              title: 'حدود التنبيه',
              text: 'تنبيه عند انخفاض المخزون والتحضير لإعادة التوريد.'
            },
            {
              title: 'الجرد',
              text: 'فحوص دورية وتوثيق الفروق بين المخزون النظري والفعلي.'
            },
            {
              title: 'التتبّع',
              text: 'سجل العمليات والمسؤولين والتواريخ متاح لفريقك.'
            }
          ]
        },
        admin: {
          eyebrow: 'إدارة الكتالوج',
          title: 'إضافة منتج أو حذفه',
          note: 'تُحفظ التعديلات على الخادم وتظهر لجميع الزوار. يلزم تسجيل دخول المسؤول.',
          name: 'اسم المنتج (فرنسي)',
          nameEn: 'الاسم (إنجليزي، اختياري)',
          nameAr: 'الاسم (عربي، اختياري)',
          nameEs: 'الاسم (إسباني، اختياري)',
          description: 'الوصف (فرنسي)',
          descriptionEs: 'الوصف (إسباني، اختياري)',
          category: 'الفئة',
          ref: 'المرجع',
          stock: 'التوفر',
          add: 'إضافة المنتج',
          delete: 'حذف من الكتالوج',
          reset: 'إعادة ضبط الكتالوج',
          success: 'أُضيف المنتج إلى كتالوج الخادم.',
          deleted: 'حُذف المنتج من كتالوج الخادم.',
          resetOk: 'أُعيد ضبط كتالوج الخادم.',
          required: 'أدخل على الأقل اسم المنتج بالفرنسية.',
          loginRequired: 'سجّل الدخول لتعديل الكتالوج.',
          catalogNote: 'تم تسجيل الدخول كمسؤول. أضف المنتجات أو احذفها أدناه.',
          logout: 'تسجيل الخروج'
        },
        cta: {
          title: 'تحتاج معدات أو حلاً مخصصاً؟',
          text: 'أخبرنا بالمرجع المطلوب أو بحاجتك: سنقدّم عرضاً مناسباً وأجلاً واضحاً.',
          button: 'اطلب عرض سعر'
        }
      },
      solutions: {
        eyebrow: 'حلولنا', title: 'إجابات منظّمة حول احتياجاتك',
        lead: 'إلى جانب الخدمات المنفردة، تجمع بى جى إس لبنات تقنية متماسكة لمواقف ملموسة: الموثوقية والاتصال والحماية والتعاون والإشراف.',
        domains: [
          { id: 'infrastructure', icon: 'server', name: 'البنية التحتية والاستمرارية', text: 'أسس مكررة ومراقبة للحفاظ على استمرار نشاطك.',
            items: ['بنية تحتية افتراضية', 'نسخ احتياطي واستعادة', 'إشراف مركزي', 'صيانة وقائية'] },
          { id: 'collaboration', icon: 'cloud', name: 'مكان العمل الرقمي', text: 'أدوات تعاون آمنة يمكن الوصول إليها أينما تعمل فرقك.',
            items: ['Microsoft 365', 'الهوية والصلاحيات', 'محطة عمل موحّدة', 'التعاون عن بُعد'] },
          { id: 'securite', icon: 'shield', name: 'الأمان والامتثال', text: 'حماية تناسب مستوى تعرضك وحساسية بياناتك.',
            items: ['تدقيق وخطة معالجة', 'جدران حماية وتقسيم شبكي', 'توعية الفرق', 'استعادة مُختبرة'] },
          { id: 'connectivite', icon: 'network', name: 'الاتصال والمواقع', text: 'ربط مواقعك وأجهزتك ومستخدميك عبر شبكات موثوقة.',
            items: ['LAN / WAN والألياف البصرية', 'وصلات BLR وVSAT', 'واي فاي احترافي', 'مراقبة IP بالفيديو', 'التحكم في الدخول'] }
        ],
        byNeed: {
          title: 'حسب احتياج العميل', subtitle: 'كل سياق يستدعي استجابة مُصمّمة خصيصاً.',
          items: [
            { title: 'الشركات الصغيرة والمتوسطة النامية', text: 'تنظيم البنية التحتية والاستخدامات الرقمية دون تعقيد الإدارة.' },
            { title: 'المؤسسات متعددة المواقع', text: 'توحيد الاتصال والأمان والإشراف بين عدة مواقع.' },
            { title: 'البيئات الحساسة', text: 'تعزيز حماية الأنظمة والصلاحيات والبيانات الحرجة.' },
            { title: 'مشاريع التحول', text: 'تحديث الأدوات تدريجياً عبر خطة هجرة مُحكومة.' }
          ]
        },
        cta: { title: 'لنبنِ الحل المناسب لسياقك', text: 'صف لنا بيئتك وأهدافك: سنقترح معمارية وخارطة طريق.', button: 'ناقش حلي' }
      },
      projects: {
        eyebrow: 'مشاريعنا', title: 'مشاريع معروضة لأغراض التوضيح',
        lead: 'هذا المعرض قالب قابل للتعديل: استبدل كل مثال بمشاريعك الخاصة مع الصور والأوصاف والفئات والتقنيات المستخدمة. لم يتم اختراع أي عميل أو مرجع هنا.',
        note: 'محتوى تجريبي — يُستبدل بمشاريعك الفعلية.',
        filters: { all: 'الكل', infrastructure: 'البنية التحتية', reseaux: 'الشبكات', securite: 'الأمان', cloud: 'السحابة', developpement: 'التطوير' },
        items: [
          { name: 'نشر بنية تحتية', description: 'مهمة تجريبية: تصميم وتركيب بنية تحتية افتراضية مع وثائق تشغيل.' },
          { name: 'تحديث الشبكة', description: 'مهمة تجريبية: إعادة تنظيم شبكة محلية وتأسيس كابلات وواي فاي احترافي.' },
          { name: 'تعزيز الأمان', description: 'مهمة تجريبية: تدقيق أمني وضبط جدران الحماية واعتماد سياسة نسخ احتياطي.' },
          { name: 'الهجرة إلى السحابة', description: 'مهمة تجريبية: نقل تدريجي للخدمات وحسابات المستخدمين إلى بيئة سحابية.' },
          { name: 'تطبيق تجاري', description: 'مهمة تجريبية: تطوير تطبيق ويب للإدارة مع أتمتة العمليات.' },
          { name: 'مراقبة بالفيديو IP', description: 'مهمة تجريبية: تركيب كاميرات IP وضبط الوصول عن بُعد والتحكم في الدخول.' }
        ],
        cta: { title: 'مشاريعك تستحق عرضاً يليق بها', text: 'ائتمنا بمشروعك القادم وزوّدنا بالعناصر التي ترغب في إبرازها.', button: 'ناقش مشروعاً' }
      },
      contact: {
        eyebrow: 'اتصل بنا', title: 'لنتحدث عن مشروعك التقني',
        lead: 'صف لنا احتياجك. سنرد بتحليل أولي ومقترح يناسب سياقك.',
        form: {
          title: 'إرسال طلب', subtitle: 'الحقول المعلّمة بعلامة * إلزامية.',
          firstName: 'الاسم *', lastName: 'اللقب *', company: 'الشركة',
          email: 'البريد الإلكتروني *', phone: 'الهاتف', service: 'الخدمة المطلوبة *',
          servicePlaceholder: 'اختر خدمة', other: 'أخرى / غير محدد',
          message: 'وصف الحاجة *', messagePlaceholder: 'صف بيئتك وأهدافك والجدول الزمني…',
          consent: 'أوافق على استخدام شركة بى جى إس هذه المعلومات للرد على طلبي. *',
          submit: 'إرسال طلبي', sending: 'جارٍ الإرسال…',
          successTitle: 'تم إرسال الطلب', successText: 'شكراً لرسالتك. سيعود إليك فريقنا في أقرب وقت.',
          errorTitle: 'تعذّر الإرسال', errorText: 'حدث خطأ. يُرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.',
          reset: 'إرسال طلب آخر', privacy: 'تُستخدم بياناتك لمعالجة طلبك فقط.'
        },
        info: {
          title: 'معلوماتنا', subtitle: 'يجب إدخال المعلومات أدناه في إعدادات الموقع.',
          email: 'البريد الإلكتروني', phone: 'الهاتف', address: 'العنوان', hours: 'ساعات العمل',
          whatsappTitle: 'تواصل سريع عبر واتساب', whatsappText: 'تحدث مباشرة مع فريقنا عبر واتساب.',
          whatsappButton: 'فتح واتساب'
        },
        faq: {
          title: 'الأسئلة الشائعة',
          items: [
            { q: 'كيف تتم أول عملية تواصل؟', a: 'نناقش سياقك وأهدافك، ثم نحدّد معاً نطاق المهمة المحتملة.' },
            { q: 'هل تقدمون دعماً في الموقع؟', a: 'نعم، حسب طبيعة المهمة وموقعك. تُحدّد الترتيبات عند دراسة طلبك.' },
            { q: 'هل يمكنني طلب عرض سعر لعدة خدمات؟', a: 'نعم. اذكر جميع احتياجاتك في النموذج أو تواصل معنا عبر واتساب.' }
          ]
        }
      },
      footer: {
        tagline: 'البنية التحتية والأمان والتحول الرقمي في خدمة نشاطك.',
        quickTitle: 'التنقل', servicesTitle: 'خدماتنا', contactTitle: 'اتصل بنا', socialTitle: 'تابعنا',
        legal: 'الإشعار القانوني', privacy: 'سياسة الخصوصية',
        copyright: '© {year} بى جى إس. جميع الحقوق محفوظة.',
        rights: 'صُمّم للمؤسسات التي تقدّر الموثوقية والوضوح.',
        setupNotice: 'لا تزال بعض معلومات التواصل بحاجة إلى الإضافة في assets/js/config.js قبل النشر.',
        backToTop: 'العودة للأعلى'
      },
      legal: {
        title: 'الإشعار القانوني', updated: 'آخر تحديث: يُستكمل',
        intro: 'هذا الموقع منشور من قِبل بى جى إس. يجب استكمال المعلومات أدناه بالبيانات القانونية الفعلية قبل النشر.',
        sections: [
          { title: 'ناشر الموقع', body: 'بى جى إس — الشكل القانوني ورقم التسجيل وعنوان المقر والهاتف والبريد الإلكتروني: يُستكمل.' },
          { title: 'مدير النشر', body: 'اسم وصفة مدير النشر: يُستكمل.' },
          { title: 'الاستضافة', body: 'اسم مزوّد الاستضافة وعنوانه وبيانات التواصل: يُستكمل.' },
          { title: 'الملكية الفكرية', body: 'جميع المحتويات والنصوص والشعارات والعناصر الرسومية في هذا الموقع مملوكة لشركة بى جى إس أو لأصحاب الحقوق المعنيين. أي إعادة إنتاج، حتى جزئية، تتطلب إذناً مسبقاً.' },
          { title: 'الروابط التشعبية', body: 'لا تتحكم بى جى إس في محتوى المواقع الخارجية المرتبطة ولا تتحمل مسؤولية محتواها.' },
          { title: 'التواصل', body: 'لأي سؤال حول هذا الإشعار، استخدم نموذج التواصل أو المعلومات المتاحة على الموقع.' }
        ]
      },
      privacy: {
        title: 'سياسة الخصوصية', updated: 'آخر تحديث: يُستكمل',
        intro: 'تولي بى جى إس أهمية لحماية بياناتك الشخصية. يصف هذا المستند كقالب المعلومات التي يُجمعها الموقع وكيفية معالجتها.',
        sections: [
          { title: 'البيانات المجمعة', body: 'يجمع نموذج التواصل المعلومات التي تُدخلها طوعاً: الاسم واللقب والشركة والبريد الإلكتروني والهاتف والخدمة المطلوبة ووصف الحاجة.' },
          { title: 'الأغراض', body: 'تُستخدم هذه البيانات حصراً لمعالجة طلبك والرد عليك وإدارة العلاقة التجارية.' },
          { title: 'مدة الاحتفاظ', body: 'تُحفظ البيانات للمدة اللازمة لمعالجة الطلب وإدارة العلاقة، ثم تُحذف أو تؤرشف وفق الالتزامات القانونية المعمول بها.' },
          { title: 'جهات الاستلام', body: 'لا تُباع البيانات. قد تُعالج من قِبل مزوّدي الخدمات التقنيين المسؤولين عن الاستضافة والبريد الإلكتروني.' },
          { title: 'حقوقك', body: 'يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها أو تقييد معالجتها، والاعتراض على بعض المعالجات، عبر التواصل معنا بالنموذج المخصص.' },
          { title: 'ملفات تعريف الارتباط', body: 'يستخدم هذا الموقع فقط معلومات محلية لازمة لعمله، خصوصاً تذكّر اللغة المختارة. لا تُوضع ملفات تعريف إعلانية.' },
          { title: 'الأمان', body: 'تُتخذ تدابير تقنية وتنظيمية للحد من الوصول إلى البيانات، منها التحقق من النماذج ومكافحة البريد العشوائي وتقييد محاولات الإرسال.' }
        ]
      },
      notfound: { code: '404', title: 'الصفحة غير موجودة', text: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة للرئيسية أو الاطلاع على خدماتنا.', button: 'العودة للرئيسية' },
      validation: {
        firstName: 'يُرجى إدخال اسمك.', lastName: 'يُرجى إدخال لقبك.',
        email: 'يُرجى إدخال بريد إلكتروني صالح.', phone: 'يُرجى إدخال رقم هاتف صالح.',
        service: 'يُرجى اختيار خدمة.', message: 'يُرجى وصف حاجتك (10 أحرف على الأقل).',
        consent: 'موافقتك مطلوبة لإرسال الطلب.',
        spam: 'تعذّر التحقق من الطلب. يُرجى المحاولة مرة أخرى.',
        network: 'تعذّر الاتصال بالخادم. تحقق من اتصالك أو استخدم واتساب.'
      }
    },
    es: {
      "code": "es",
      "dir": "ltr",
      "label": "Español",
      "short": "ES",
      "meta": {
        "home": {
          "title": "Inicio",
          "description": "BGS: su socio tecnológico para un futuro conectado. Infraestructura, redes, ciberseguridad, nube y desarrollo TI."
        },
        "about": {
          "title": "Acerca de",
          "description": "Descubra BGS, una empresa de servicios de TI: nuestra visión, nuestra misión, nuestros valores y nuestro enfoque hacia la innovación."
        },
        "services": {
          "title": "Nuestros servicios",
          "description": "Las 11 áreas de especialización de BGS: infraestructura, redes, fibra óptica, CRM y aplicaciones web/móviles, venta de equipos, BLR/VSAT, ciberseguridad, soporte, nube, videovigilancia, consultoría y gestión de stock."
        },
        "solutions": {
          "title": "Nuestras soluciones",
          "description": "Soluciones tecnológicas de BGS organizadas por dominio y necesidad: continuidad, colaboración, seguridad, conectividad y gestión."
        },
        "itsupportMeta": {
          "title": "SOPORTE DE TI DE BGS",
          "description": "Centraliza incidencias, tickets, equipos informáticos, intervenciones y supervisión de red en una única plataforma."
        },
        "products": {
          "title": "Nuestros productos",
          "description": "Equipos de telecomunicaciones, TI, BLR/VSAT y gestión de stock: catálogo BGS gestionado en línea."
        },
        "projects": {
          "title": "Nuestros logros",
          "description": "Galería de proyectos de TI de BGS. Contenido modificable, sin referencia de cliente inventada."
        },
        "contact": {
          "title": "Contacto",
          "description": "Póngase en contacto con BGS para obtener un presupuesto, una auditoría o un servicio de TI. Formulario de contacto y WhatsApp."
        },
        "legal": {
          "title": "Avisos legales",
          "description": "Avisos legales del sitio BGS."
        },
        "privacy": {
          "title": "Política de privacidad",
          "description": "Política de confidencialidad y gestión de datos personales del sitio BGS."
        },
        "notfound": {
          "title": "Página no encontrada",
          "description": "No se pudo encontrar la página solicitada."
        }
      },
      "nav": {
        "home": "Inicio",
        "about": "Acerca de",
        "services": "Nuestros servicios",
        "solutions": "Nuestras soluciones",
        "projects": "Nuestros logros",
        "products": "Nuestros productos",
        "contact": "Contacto",
        "quote": "Solicitar una cotización",
        "whatsapp": "WhatsApp",
        "language": "Idioma",
        "menu": "abrir menú",
        "close": "Cerrar menú",
        "skip": "Ir al contenido principal",
        "topbarTagline": "Tecnologías · Infraestructura · Seguridad",
        "phone": "Teléfono",
        "email": "Correo electrónico"
      },
      "common": {
        "learnMore": "Más información",
        "requestQuote": "Solicitar una cotización",
        "contactUs": "Contáctenos",
        "discoverServices": "Descubra nuestros servicios",
        "seeAllServices": "Ver todos los servicios",
        "seeAllProjects": "Ver todos los logros",
        "readMore": "Leer más",
        "backHome": "volver a casa",
        "toConfigure": "Estar informado",
        "unavailable": "Información a ingresar en la configuración del sitio.",
        "features": "Servicios incluidos",
        "deliverables": "Entregables",
        "benefits": "Beneficios",
        "scroll": "Desplazarse",
        "close": "Cerrar",
        "expand": "Mostrar detalles",
        "collapse": "Ocultar detalles",
        "example": "Contenido de ejemplo: reemplácelo con su información."
      },
      "admin": {
        "eyebrow": "Área de administrador",
        "title": "administración del sitio",
        "lead": "Crea tu cuenta segura para gestionar el catálogo de productos.",
        "setupTitle": "Crear la cuenta de administrador",
        "loginTitle": "Inicio de sesión de administrador",
        "username": "Identificador",
        "password": "Contraseña",
        "passwordHint": "8 caracteres mínimo.",
        "setupButton": "crear mi cuenta",
        "loginButton": "Iniciar sesión",
        "loggedIn": "Conectado",
        "welcome": "Bienvenido, {site}",
        "openCatalog": "Administrar productos",
        "logout": "Cerrar sesión",
        "protected": "Espacio reservado para el administrador del sitio.",
        "accountNote": "La cuenta está registrada en el servidor. No se proporciona ningún identificador predeterminado.",
        "invalid": "Nombre de usuario o contraseña incorrectos.",
        "taken": "Ya existe una cuenta de administrador.",
        "network": "Servidor no disponible. Intentar otra vez.",
        "required": "Complete todos los campos.",
        "weak": "La contraseña debe contener al menos 8 caracteres.",
        "successSetup": "Cuenta creada. Redirección al catálogo…",
        "successLogin": "Conexión exitosa. Redirigir…"
      },
      "wa": {
        "tooltip": "Contáctanos por WhatsApp",
        "header": "WhatsApp",
        "message": "Hola BGS, me gustaría obtener información sobre sus servicios TI.",
        "notConfigured": "Número de WhatsApp para configurar en activos/js/config.js",
        "floatingLabel": "Chatea en whatsapp"
      },
      "director": {
        "eyebrow": "Palabra del Director General",
        "title": "Unas palabras de nuestro Gerente General",
        "salutation": "Estimados socios, queridos clientes y visitantes,",
        "welcome": "Es un gran placer darle la bienvenida al sitio web oficial de BGS.",
        "p1": "En un mundo donde las tecnologías evolucionan constantemente, estamos convencidos de que la innovación, la experiencia y la calidad de los servicios son las claves del éxito. Es con esta visión que BGS apuesta por apoyar a empresas, instituciones y organizaciones en sus proyectos de transformación digital y desarrollo tecnológico.",
        "p2": "Nuestra ambición es ofrecer soluciones fiables e innovadoras adaptadas a las necesidades de nuestros clientes, situando la satisfacción, la proximidad y la confianza en el centro de nuestras prioridades.",
        "p3": "En BGS creemos que cada proyecto es una oportunidad para crear valor, asumir nuevos desafíos y construir alianzas duraderas.",
        "p4": "Me gustaría agradecer calurosamente a nuestros clientes, socios y colaboradores por su confianza y compromiso. Juntos, continuaremos construyendo un futuro basado en la excelencia, la innovación y el desempeño.",
        "signature": "BGS, su socio de confianza para un futuro conectado e innovador.",
        "name": "Cherif Mohamed El Habib Oumar Bah",
        "role": "Director General de BGS",
        "cta": "Lea el mensaje del Director General",
        "lead": "Una visión respaldada por la dirección de BGS: innovación, experiencia y proximidad."
      },
      "welcome": {
        "eyebrow": "Bienvenidos a Mauritania",
        "title": "Hola, bienvenido a BGS",
        "text": "Nuestro equipo le da la bienvenida y se ocupa de sus necesidades de TI, desde el primer intercambio hasta la implementación en el sitio. Un solo equipo, respuestas claras y seguimiento en el tiempo.",
        "alt": "Visual de bienvenida de BGS en Mauritania",
        "button": "Chatea con nuestro equipo",
        "caption": "Su contacto de BGS — Mauritania"
      },
      "fibre": {
        "eyebrow": "Despliegue de fibra óptica",
        "title": "Nuestros técnicos despliegan tu red de fibra",
        "text": "Desde el estudio hasta la conexión, BGS apoya sus proyectos FTTH, FTTB y OSM en Mauritania con un equipo de campo y pruebas de puesta en marcha.",
        "items": [
          "Estudio, dimensionamiento y plano de instalación.",
          "Instalación, conexión y marcado de conexiones.",
          "Pruebas ópticas y puesta en marcha."
        ],
        "button": "Descubre el servicio de fibra"
      },
      "expertise": {
        "eyebrow": "Ingeniería y experiencia",
        "title": "Ingenieros para diseñar, analizar y asegurar",
        "text": "Nuestros ingenieros trabajan en la arquitectura, el rendimiento y la seguridad de sus sistemas. Transforman una restricción técnica en una solución explotable y documentada.",
        "items": [
          "Auditoria y arquitectura",
          "Supervisión y desempeño",
          "Seguridad y continuidad"
        ],
        "button": "Vea toda nuestra experiencia"
      },
      "productWeek": {
        "eyebrow": "Producto de la semana",
        "title": "Para descubrir esta semana",
        "note": "Referencia, características y precio a introducir en la configuración.",
        "open": "Producto de la semana",
        "catalog": "Ver todo el catálogo",
        "close": "Cerrar",
        "stock": "Disponibilidad",
        "ref": "Referencia"
      },
      "home": {
        "badge": "Integrador · Asesor · Socio tecnológico",
        "titleLead": "Tu socio tecnológico",
        "titleAccent": "por un futuro conectado",
        "subtitle": "BGS diseña, implementa y protege los entornos de TI de las organizaciones. Desde la infraestructura hasta la nube, transformamos la tecnología en un beneficio real para tu negocio.",
        "primary": "Descubra nuestros servicios",
        "secondary": "Solicitar una cotización",
        "heroPanel": {
          "title": "Ecosistema BGS",
          "subtitle": "Infraestructura · Red · Seguridad",
          "online": "Operacional",
          "nodes": "Nodos activos",
          "protection": "Protección",
          "cloud": "Nube híbrida",
          "sync": "sincronizado"
        },
        "trustTitle": "Experiencia que cubre todo tu canal digital",
        "trust": [
          "Infraestructura",
          "Redes y telecomunicaciones",
          "Fibra óptica",
          "Ciberseguridad",
          "Soporte y mantenimiento",
          "Nube y digital",
          "Desarrollo y CRM",
          "Material y existencias"
        ],
        "intro": {
          "eyebrow": "¿Quiénes somos?",
          "title": "Tecnología al servicio del desempeño de tu negocio",
          "p1": "BGS apoya a las empresas en el diseño, implementación y operación de sus sistemas de información. Nuestro enfoque combina experiencia técnica, método y proximidad para satisfacer las necesidades reales.",
          "p2": "Trabajamos en todo el ciclo: auditoría, arquitectura, integración, seguridad, soporte y evolución. Un contacto único, una visión coherente, soluciones duraderas.",
          "link": "Más información sobre BGS",
          "team": "Nuestro equipo reúne perfiles complementarios en infraestructura, redes, fibra óptica, seguridad, nube y desarrollo. Interviene con la misma exigencia: entender la necesidad, diseñar una solución adecuada y mantenerla en el tiempo. Esta versatilidad te permite hacerte cargo de tus proyectos de principio a fin, sin multiplicar el número de contactos."
        },
        "services": {
          "eyebrow": "Nuestra experiencia",
          "title": "Servicios de TI integrales y consistentes",
          "subtitle": "Once áreas de intervención complementarias para construir, proteger y hacer evolucionar su entorno digital."
        },
        "why": {
          "eyebrow": "¿Por qué elegir BGS?",
          "title": "Un socio exigente, a tu lado",
          "subtitle": "Priorizamos la calidad de la ejecución, la claridad de las discusiones y la durabilidad de las soluciones entregadas.",
          "items": [
            {
              "title": "Experiencia transversal",
              "text": "Red, servidores, seguridad, nube y desarrollo unidos en un mismo equipo."
            },
            {
              "title": "Capacidad de respuesta de campo",
              "text": "Asistencia remota y presencial adaptada a la urgencia de cada situación."
            },
            {
              "title": "Soluciones a medida",
              "text": "Arquitecturas diseñadas para su organización, no para un catálogo genérico."
            },
            {
              "title": "Seguridad por diseño",
              "text": "Protección de sistemas y datos integrados desde la fase de estudio."
            },
            {
              "title": "Transparencia",
              "text": "Alcances, entregables y costos claramente definidos antes de cada intervención."
            },
            {
              "title": "Apoyo sostenible",
              "text": "Transferencia de documentación, formación y habilidades para seguir siendo independiente."
            }
          ]
        },
        "process": {
          "eyebrow": "Nuestro método",
          "title": "Cuatro pasos, ejecución controlada",
          "subtitle": "Un método sencillo y riguroso, desde el primer cambio hasta la mejora continua.",
          "steps": [
            {
              "title": "Escuchar y auditar",
              "text": "Comprenda su contexto, sus limitaciones y sus objetivos."
            },
            {
              "title": "Diseño",
              "text": "Definir la arquitectura, las soluciones y el plan de despliegue."
            },
            {
              "title": "Implementación",
              "text": "Integre, configure, pruebe y proteja con un monitoreo transparente."
            },
            {
              "title": "Operación",
              "text": "Supervisar, mantener y evolucionar en el tiempo."
            }
          ]
        },
        "stats": [
          {
            "value": "11",
            "label": "Áreas de especialización"
          },
          {
            "value": "03",
            "label": "Idiomas disponibles"
          },
          {
            "value": "01",
            "label": "Persona de contacto dedicada"
          }
        ],
        "cta": {
          "title": "¿Un proyecto de TI en mente?",
          "text": "Hablemos de tus necesidades. Te ofrecemos una respuesta clara, adaptada a tu contexto y a tus prioridades.",
          "button": "Solicitar una cotización",
          "wa": "Escribe en WhatsApp"
        }
      },
      "about": {
        "eyebrow": "Acerca de BGS",
        "title": "Una empresa tecnológica orientada a la acción",
        "lead": "BGS reúne habilidades complementarias en torno a la misma ambición: hacer que los sistemas de información sean confiables, seguros y útiles para las organizaciones que los utilizan.",
        "company": {
          "title": "nuestra empresa",
          "p1": "BGS es una empresa de servicios TI especializada en la integración de soluciones tecnológicas y transformación digital. Apoyamos a las organizaciones a modernizar su infraestructura, proteger sus sistemas y desarrollar sus usos digitales.",
          "p2": "Nuestro papel es el de un socio técnico global: analizamos, diseñamos, implementamos y mantenemos entornos de TI coherentes, con una preocupación constante por la facilidad de uso y el control de costos."
        },
        "vision": {
          "title": "Nuestra visión",
          "text": "Ser reconocidos como un referente regional en servicios de TI: una empresa capaz de combinar rigor técnico, innovación responsable y un conocimiento detallado de los desafíos comerciales de sus clientes."
        },
        "mission": {
          "title": "Nuestra misión",
          "text": "Proporcionar soluciones tecnológicas confiables y accesibles, y apoyar a cada organización en la construcción de un entorno digital eficiente, seguro y escalable."
        },
        "values": {
          "title": "Nuestros valores",
          "subtitle": "Los principios que guían nuestras decisiones e intervenciones diarias.",
          "items": [
            {
              "title": "rigor",
              "text": "Métodos documentados, pruebas serias y atención al detalle."
            },
            {
              "title": "Fiabilidad",
              "text": "Soluciones sólidas y un compromiso a largo plazo."
            },
            {
              "title": "Innovación",
              "text": "Adoptar tecnologías útiles, sin ceder a las modas."
            },
            {
              "title": "Proximidad",
              "text": "Comprender las profesiones y hablar el idioma de nuestros interlocutores."
            },
            {
              "title": "integridad",
              "text": "Recomendaciones independientes, honestas y proporcionadas."
            },
            {
              "title": "Transmisión",
              "text": "Compartir conocimientos para empoderar a nuestros clientes."
            }
          ]
        },
        "commitment": {
          "title": "Nuestro compromiso con nuestros clientes",
          "p1": "Apostamos por resultados medibles: sistemas disponibles, plazos cumplidos e información clara en cada etapa. Cada misión está sujeta a un alcance definido, seguimiento y retroalimentación documentada.",
          "p2": "Nuestra prioridad es la satisfacción duradera: preferimos una solución bien diseñada y bien mantenida a una intervención única que solucione el problema."
        },
        "team": {
          "title": "La competencia de nuestro equipo.",
          "subtitle": "Perfiles complementarios, misma exigencia de resultado.",
          "p1": "BGS cuenta con un equipo de profesionales de TI y telecomunicaciones, que reúne habilidades en ingeniería de redes, administración de sistemas, ciberseguridad, implementación de fibra óptica, nube y desarrollo. Esta diversidad de perfiles nos permite abordar cada proyecto con una visión completa, desde el estudio técnico hasta la operación.",
          "p2": "Nuestros equipos están acostumbrados a trabajar in situ y de forma remota, en entornos activos. Prefieren un método documentado, pruebas antes de la puesta en servicio y una restitución clara de los resultados. Mejorar las habilidades de sus empleados es una parte integral de nuestro apoyo.",
          "items": [
            {
              "title": "Ingeniería de redes y fibra",
              "text": "Diseño, cableado, despliegue FTTH/FTTB/OSM y supervisión de enlaces."
            },
            {
              "title": "Sistemas y nube",
              "text": "Administración de servidores, virtualización, migración a la nube y respaldos."
            },
            {
              "title": "Seguridad y continuidad",
              "text": "Planes de endurecimiento, protección de acceso y recuperación ante desastres."
            },
            {
              "title": "Gestión de proyectos",
              "text": "Encuadre, planificación, documentación y transferencia de habilidades."
            }
          ]
        },
        "approach": {
          "title": "Innovación y calidad",
          "subtitle": "Nuestro enfoque de mejora continua.",
          "items": [
            {
              "title": "Valorar antes de recomendar",
              "text": "Cualquier propuesta se basa en un inventario y necesidades expresadas."
            },
            {
              "title": "Diseño para durar",
              "text": "Arquitecturas escalables, documentadas y fáciles de retomar."
            },
            {
              "title": "Calidad de medición",
              "text": "Pruebas, supervisión e indicadores para verificar el resultado real."
            },
            {
              "title": "Mejorar continuamente",
              "text": "Retroalimentación y seguimiento tecnológico integrados a nuestras prácticas."
            }
          ]
        },
        "cta": {
          "title": "Construyamos juntos tu entorno digital",
          "text": "Preséntanos tu contexto: te ofreceremos un análisis inicial y un curso de acción concreto.",
          "button": "Habla de tu proyecto"
        }
      },
      "services": {
        "eyebrow": "Nuestros servicios",
        "title": "Once conocimientos para su infraestructura digital",
        "lead": "Cada servicio se adapta a su contexto: tamaño de la organización, limitaciones comerciales, nivel de seguridad esperado y presupuesto. Encuentre detalles de nuestras áreas de intervención a continuación.",
        "note": "Los alcances y entregables se definen contigo antes de cada misión.",
        "items": [
          {
            "id": "infraestructura",
            "icon": "servidor",
            "name": "infraestructura de TI",
            "short": "Bases sólidas para sus sistemas y aplicaciones.",
            "description": "Diseño, despliegue y administración de su infraestructura física y virtualizada, desde el servidor hasta las estaciones de los usuarios.",
            "features": [
              "Instalación y configuración de servidores.",
              "Servidor Windows y Linux",
              "Virtualización",
              "Mantenimiento de equipos informáticos.",
              "Gestión de infraestructura"
            ],
            "detailTitle": "Una infraestructura diseñada para durar",
            "deliverables": [
              "Plano arquitectónico e inventario del parque.",
              "Plan de implementación y procedimientos operativos.",
              "Documentación técnica proporcionada a su equipo."
            ],
            "benefits": [
              "Disponibilidad y rendimiento mejorados",
              "Escalabilidad controlada",
              "Administración diaria simplificada"
            ]
          },
          {
            "id": "redes",
            "icon": "red",
            "name": "Redes y telecomunicaciones",
            "short": "Una red rápida, estable y lista para evolucionar.",
            "description": "Estudio, instalación y supervisión de sus redes locales y extendidas, con especial atención a la calidad de la conectividad.",
            "features": [
              "Instalación de redes LAN y WAN.",
              "Cableado informático Cat6 y fibra óptica.",
              "Configuración de enrutadores y conmutadores.",
              "Wifi profesional",
              "Monitoreo de red"
            ],
            "detailTitle": "Conectividad confiable de extremo a extremo",
            "deliverables": [
              "Plan de cableado y diagrama lógico de red.",
              "Configuración del equipo documentada",
              "Informe de prueba y rendimiento."
            ],
            "benefits": [
              "Rendimiento y estabilidad mejorados",
              "Cobertura wifi adaptada a usos",
              "Detección rápida de incidentes"
            ]
          },
          {
            "id": "seguridad cibernética",
            "icon": "escudo",
            "name": "Ciberseguridad",
            "short": "Proteja sus sistemas, sus datos y a sus usuarios.",
            "description": "Evaluar, reforzar y monitorear su entorno digital para reducir la exposición a amenazas y desarrollar resiliencia.",
            "features": [
              "auditoría de seguridad informática",
              "Protección de redes y servidores.",
              "Cortafuegos y antivirus profesionales",
              "Copia de seguridad y restauración",
              "Concienciación sobre ciberseguridad"
            ],
            "detailTitle": "La seguridad como proceso, no como producto",
            "deliverables": [
              "Informe de auditoría con prioridades de remediación",
              "Políticas de seguridad y reglas de protección.",
              "Plan de respaldo y recuperación probado"
            ],
            "benefits": [
              "Superficie de ataque reducida",
              "Capacidad de respuesta a incidentes",
              "Usuarios mejor informados"
            ]
          },
          {
            "id": "apoyo",
            "icon": "auriculares",
            "name": "Soporte y mantenimiento TI",
            "short": "Soporte disponible cuando su negocio lo necesite.",
            "description": "Gestión de incidencias y solicitudes diarias, con un seguimiento claro e intervenciones adaptadas a las limitaciones de su servicio.",
            "features": [
              "Soporte técnico",
              "Servicio de asistencia y gestión de tickets",
              "Mantenimiento preventivo y correctivo.",
              "Supervisión de estaciones de trabajo",
              "Soporte remoto y en sitio"
            ],
            "detailTitle": "Seguimiento y soporte transparente",
            "deliverables": [
              "Proceso de tickets y niveles de prioridad",
              "Informe de intervención después de cada misión",
              "Tabla de seguimiento de incidentes recurrentes"
            ],
            "benefits": [
              "Tiempo de inactividad reducido",
              "Historial claro de intervenciones.",
              "Parque mantenido proactivamente"
            ]
          },
          {
            "id": "nube",
            "icon": "nube",
            "name": "La nube y la transformación digital",
            "short": "Moderniza tus usos sin perder el control.",
            "description": "Soporte en la migración y operación de servicios en la nube, con gestión rigurosa de identidades, accesos y datos.",
            "features": [
              "Migración a la nube",
              "microsoft 365",
              "Gestión de cuentas y accesos.",
              "Soluciones de respaldo",
              "Apoyo a la transformación digital"
            ],
            "detailTitle": "Una nube útil, controlada y segura",
            "deliverables": [
              "Estudio migratorio y plan de transición",
              "Configuración de servicios y acceso",
              "Guía de administración y mejores prácticas."
            ],
            "benefits": [
              "La colaboración es fácil",
              "Costos y acceso mejor controlados",
              "Continuidad del servicio fortalecida"
            ]
          },
          {
            "id": "desarrollo",
            "icon": "código",
            "name": "desarrollo de TI",
            "short": "Herramientas digitales adaptadas a tus procesos de negocio.",
            "description": "Diseño y desarrollo de soluciones web y aplicaciones de gestión, con integración a sistemas existentes y automatización de tareas.",
            "features": [
              "Desarrollo de CRM",
              "Creación de sitios web",
              "Aplicaciones web y móviles",
              "Aplicaciones de gestión",
              "Automatización de procesos",
              "Integración de soluciones empresariales."
            ],
            "detailTitle": "De necesidad empresarial a herramienta operativa",
            "deliverables": [
              "Especificaciones y modelos funcionales.",
              "Aplicación desarrollada y probada",
              "Documentación técnica y formación de usuarios."
            ],
            "benefits": [
              "Procesos simplificados",
              "Datos centralizados",
              "Herramientas escalables y mantenibles"
            ]
          },
          {
            "id": "vídeo",
            "icon": "cámara",
            "name": "Videovigilancia y control de accesos",
            "short": "Asegure las instalaciones y controle el acceso.",
            "description": "Despliegue de sistemas de videovigilancia y control de acceso, integrados en su red y accesibles según sus necesidades de supervisión.",
            "features": [
              "Instalación de cámaras IP.",
              "Configuración de sistemas de videovigilancia.",
              "control de acceso",
              "Seguridad de instalaciones"
            ],
            "detailTitle": "Monitoreo que se puede utilizar a diario.",
            "deliverables": [
              "Estudio de implantación de cámaras y puntos de acceso.",
              "Configuración y configuración de sistemas.",
              "Formación en uso y consulta."
            ],
            "benefits": [
              "Visibilidad en tiempo real",
              "Acceso controlado y rastreado",
              "Archivar según sus necesidades"
            ]
          },
          {
            "id": "consejo",
            "icon": "brújula",
            "name": "Asesoramiento y soporte TI",
            "short": "Decidir con una visión técnica clara e independiente.",
            "description": "Auditoría, estudio arquitectónico y asesoramiento tecnológico para informar tus decisiones y apoyar el desarrollo de habilidades de tus equipos.",
            "features": [
              "Auditoría de sistemas informáticos.",
              "Estudio y diseño arquitectónico.",
              "Consultoría tecnológica",
              "Entrenamiento en equipo",
              "Apoyo a las empresas"
            ],
            "detailTitle": "Una decisión informada, un plan concreto",
            "deliverables": [
              "Informe de auditoría y análisis de brechas",
              "Propuesta de arquitectura y hoja de ruta.",
              "Materiales formativos adaptados a equipos"
            ],
            "benefits": [
              "Opciones tecnológicas justificadas",
              "Inversiones priorizadas",
              "Habilidades internas fortalecidas"
            ]
          },
          {
            "id": "fibra optica",
            "icon": "fibra",
            "name": "Despliegue de fibra óptica",
            "short": "Conecte sus sitios con un enlace óptico duradero y de alto rendimiento.",
            "description": "Estudio, despliegue y conexión de redes de fibra óptica FTTH, FTTB y OSM, con pruebas y supervisión de los enlaces.",
            "features": [
              "Estudio y dimensionamiento de la red de fibra.",
              "Despliegue FTTH (fibra hasta el abonado)",
              "Despliegue FTTB (fibra hasta el edificio)",
              "Implementación de OSM",
              "Pruebas de instalación, conexión y conexión."
            ],
            "detailTitle": "Conectividad óptica diseñada para durar",
            "deliverables": [
              "Plan de implementación y diagrama de enrutamiento",
              "Informe de calificación y prueba de enlace",
              "Documentación de equipos y puntos de conexión."
            ],
            "benefits": [
              "Altas velocidades y baja latencia",
              "Escalabilidad para sus futuros sitios",
              "Infraestructura óptica documentada y mantenible"
            ]
          },
          {
            "id": "ventas de equipos",
            "icon": "capas",
            "name": "Venta de equipos de telecomunicaciones y TI.",
            "short": "El equipo adecuado, seleccionado, entregado e instalado.",
            "description": "Suministro de equipos de telecomunicaciones e informática adaptados a sus usos, con asesoramiento en la elección de equipos, instalación y seguimiento de referencias.",
            "features": [
              "Suministro de equipos de redes y telecomunicaciones.",
              "Hardware de fibra óptica (cables, módulos ODF, SFP)",
              "Computadoras, servidores y equipos informáticos.",
              "Selección adaptada a tu presupuesto",
              "Instalación y configuración",
              "Gestión de inventario y seguimiento de referencias."
            ],
            "detailTitle": "Suministro sencillo y controlado",
            "deliverables": [
              "Listado de equipos ofertados con características.",
              "Albarán de entrega y estado del equipo.",
              "Certificado de instalación y puesta en marcha."
            ],
            "benefits": [
              "Equipo adaptado a su entorno",
              "Mejor seguimiento de compras y stocks",
              "Instalación lista para usar"
            ]
          },
          {
            "id": "blr-vsat",
            "icon": "actividad",
            "name": "Instalación BLR y VSAT",
            "short": "Conecte sitios de difícil acceso mediante radio o enlace satelital.",
            "description": "Instalación y puesta en servicio de enlaces BLR (radio local loop) y estaciones VSAT para asegurar la conectividad de sitios remotos o aislados.",
            "features": [
              "Instalación de enlaces BLR (bucle radio local)",
              "Instalación y alineación de estaciones VSAT",
              "Configuración de módems y enrutadores",
              "Pruebas de conexión y puesta en marcha.",
              "Mantenimiento y supervisión de instalaciones."
            ],
            "detailTitle": "Conectividad confiable, incluso fuera de la red terrestre",
            "deliverables": [
              "Estudio de cobertura y dimensionamiento del enlace.",
              "Informe de pruebas de instalación y rendimiento.",
              "Procedimientos de operación y mantenimiento."
            ],
            "benefits": [
              "Sitios remotos conectados a la red.",
              "Monitoreo de flujo y disponibilidad",
              "Intervenciones de mantenimiento programadas"
            ]
          }
        ],
        "cta": {
          "title": "¿Su necesidad no está incluida en esta lista?",
          "text": "Contáctenos: estudiamos cada solicitud y podemos combinar varias áreas de especialización.",
          "button": "Discutir mi proyecto"
        }
      },
      "itsupport": {
        "nav": "SOPORTE DE TI DE BGS",
        "eyebrow": "SOPORTE DE TI DE BGS",
        "title": "¡Simplifique su gestión de TI!",
        "lead": "Descubra una solución profesional que le permite centralizar la gestión de incidencias, tickets, equipos informáticos, intervenciones y supervisión de la red.",
        "pitch": "Con BGS IT SUPPORT mejora la productividad de tus equipos, ahorra tiempo y controla tu infraestructura TI desde una única plataforma.",
        "audience": "Una solución adecuada para empresas, administraciones e instituciones.",
        "slogan": "BGS IT SOPORTE: ¡Su TI bajo control!",
        "cta": {
          "title": "Contáctenos para una demostración",
          "text": "Descubra nuestras soluciones y analice sus necesidades con nuestro equipo.",
          "button": "Solicitar una demostración"
        },
        "features": {
          "eyebrow": "Una plataforma, todas tus operaciones",
          "title": "Módulos de SOPORTE TI BGS",
          "items": [
            {
              "title": "Gestión de incidencias",
              "text": "Centralice los informes, califique su gravedad y realice un seguimiento de su resolución."
            },
            {
              "title": "Entradas y solicitudes",
              "text": "Organice las solicitudes de los usuarios con prioridades y responsabilidades claras."
            },
            {
              "title": "parque de TI",
              "text": "Inventario de equipos, estado, asignación e historial de intervención."
            },
            {
              "title": "Intervenciones",
              "text": "Planificación, seguimiento y elaboración de informes de intervención en obra o de forma remota."
            },
            {
              "title": "Monitoreo de red",
              "text": "Visibilidad sobre disponibilidad de equipos y alertas en caso de incidencia."
            },
            {
              "title": "Paneles de control",
              "text": "Indicadores claros para gestionar la actividad y la calidad del servicio."
            }
          ]
        },
        "benefits": {
          "eyebrow": "los beneficios",
          "title": "Tu TI bajo control",
          "items": [
            {
              "title": "Productividad mejorada",
              "text": "Menos tiempo perdido en la coordinación y seguimiento de solicitudes."
            },
            {
              "title": "Mayor capacidad de respuesta",
              "text": "Una visión inmediata de las incidencias y su evolución."
            },
            {
              "title": "Infraestructura controlada",
              "text": "Un inventario actualizado y supervisión continua de sus equipos."
            }
          ]
        },
        "home": {
          "eyebrow": "SOPORTE DE TI DE BGS",
          "title": "Tu TI bajo control",
          "text": "Incidencias, tickets, equipos informáticos, intervenciones y supervisión de red: una única plataforma para gestionar su infraestructura.",
          "button": "Descubra el SOPORTE TI de BGS"
        }
      },
      "products": {
        eyebrow: 'Productos y stock',
        title: 'Equipos y soluciones para su actividad',
        lead: 'Equipos de telecomunicaciones, informática, red y satélite: descubra las familias de productos que BGS puede suministrar, instalar y mantener. El catálogo se gestiona desde el área de administrador y evoluciona según sus necesidades.',
        note: 'Catálogo del servidor — las altas y bajas son visibles para todos los visitantes tras iniciar sesión como administrador.',
        categoriesTitle: 'Filtrar por categoría',
        categories: {
          all: 'Todos los productos',
          telecom: 'Telecomunicaciones',
          informatique: 'Informática',
          reseau: 'Red',
          fibre: 'Fibra óptica',
          satellite: 'Satélite / VSAT'
        },
        ref: 'Referencia',
        stock: {
          label: 'Disponibilidad',
          available: 'Disponible',
          low: 'Stock limitado',
          out: 'Agotado'
        },
        stats: {
          total: 'Referencias',
          available: 'Disponibles',
          alert: 'Por seguir'
        },
        management: {
          eyebrow: 'Gestión de stock',
          title: 'Un seguimiento de stock claro y reactivo',
          p1: 'Organizamos el seguimiento de sus equipos: entradas y salidas, niveles de stock, umbrales de alerta e inventarios. Cada movimiento queda registrado para evitar roturas e inmovilizaciones innecesarias.',
          p2: 'Este seguimiento puede integrarse en sus herramientas internas o en una aplicación web dedicada, desarrollada según sus procesos y hábitos de trabajo.',
          items: [
            {
              title: 'Entradas y salidas',
              text: 'Registro de movimientos y seguimiento de cantidades por referencia.'
            },
            {
              title: 'Umbrales de alerta',
              text: 'Aviso de stock bajo y anticipación de reposiciones.'
            },
            {
              title: 'Inventarios',
              text: 'Controles periódicos y diferencias documentadas entre stock teórico y real.'
            },
            {
              title: 'Trazabilidad',
              text: 'Historial de operaciones, responsables y fechas accesible para su equipo.'
            }
          ]
        },
        admin: {
          eyebrow: 'Gestión del catálogo',
          title: 'Añadir o eliminar un producto',
          note: 'Los cambios se guardan en el servidor y son visibles para todos los visitantes. Se requiere sesión de administrador.',
          name: 'Nombre del producto (FR)',
          nameEn: 'Nombre (inglés, opcional)',
          nameAr: 'Nombre (árabe, opcional)',
          nameEs: 'Nombre (español, opcional)',
          description: 'Descripción (FR)',
          descriptionEs: 'Descripción (español, opcional)',
          category: 'Categoría',
          ref: 'Referencia',
          stock: 'Disponibilidad',
          add: 'Añadir producto',
          delete: 'Quitar del catálogo',
          reset: 'Restablecer catálogo',
          success: 'Producto añadido al catálogo del servidor.',
          deleted: 'Producto eliminado del catálogo del servidor.',
          resetOk: 'Catálogo del servidor restablecido.',
          required: 'Indique al menos el nombre del producto en francés.',
          loginRequired: 'Inicie sesión para modificar el catálogo.',
          catalogNote: 'Ha iniciado sesión como administrador. Añada o elimine productos a continuación.',
          logout: 'Cerrar sesión'
        },
        cta: {
          title: '¿Necesita equipos o una solución a medida?',
          text: 'Indíquenos la referencia que busca o su necesidad: le propondremos una oferta adecuada y un plazo claro.',
          button: 'Solicitar una cotización'
        }
      },
      "solutions": {
        "eyebrow": "Nuestras soluciones",
        "title": "Respuestas organizadas según sus necesidades",
        "lead": "Más allá de los servicios aislados, BGS ensambla ladrillos tecnológicos coherentes para responder a situaciones concretas: aumentar la confiabilidad, conectar, proteger, colaborar y gestionar.",
        "domains": [
          {
            "id": "infraestructura",
            "icon": "servidor",
            "name": "Infraestructura y continuidad",
            "text": "Fundaciones redundantes y supervisadas para mantener su negocio en funcionamiento.",
            "items": [
              "Infraestructura virtualizada",
              "Copia de seguridad y recuperación",
              "Monitoreo centralizado",
              "Mantenimiento preventivo"
            ]
          },
          {
            "id": "colaboración",
            "icon": "nube",
            "name": "Espacio de trabajo digital",
            "text": "Herramientas colaborativas seguras, accesibles dondequiera que trabajen sus equipos.",
            "items": [
              "microsoft 365",
              "Identidad y acceso",
              "Estación de trabajo estandarizada",
              "Colaboración remota"
            ]
          },
          {
            "id": "seguridad",
            "icon": "escudo",
            "name": "Seguridad y cumplimiento",
            "text": "Protección adaptada a su exposición y a la sensibilidad de sus datos.",
            "items": [
              "Plan de auditoría y remediación",
              "Firewall y segmentación",
              "Conciencia del equipo",
              "Restauración probada"
            ]
          },
          {
            "id": "conectividad",
            "icon": "red",
            "name": "Conectividad y sitios",
            "text": "Conecte sus sitios, sus equipos y sus usuarios con redes confiables.",
            "items": [
              "LAN/WAN y fibra óptica",
              "Enlaces BLR y VSAT",
              "Wifi profesional",
              "Videovigilancia IP",
              "control de acceso"
            ]
          }
        ],
        "byNeed": {
          "title": "Por necesidad del cliente",
          "subtitle": "Cada contexto exige una respuesta adaptada.",
          "items": [
            {
              "title": "Pymes en crecimiento",
              "text": "Estructurar la infraestructura y los usos digitales sin complejizar la gestión."
            },
            {
              "title": "Organizaciones multisitio",
              "text": "Unifique la conectividad, la seguridad y el monitoreo en múltiples ubicaciones."
            },
            {
              "title": "Ambientes sensibles",
              "text": "Fortalecer la protección de sistemas, accesos y datos críticos."
            },
            {
              "title": "Proyectos de transformación",
              "text": "Modernizar gradualmente las herramientas con un plan de migración controlado."
            }
          ]
        },
        "cta": {
          "title": "Construyamos la solución adaptada a tu contexto",
          "text": "Descríbenos tu entorno y tus objetivos: te ofreceremos una arquitectura y una hoja de ruta.",
          "button": "Habla sobre mi solución."
        }
      },
      "projects": {
        "eyebrow": "Nuestros logros",
        "title": "Proyectos presentados con fines ilustrativos.",
        "lead": "Esta galería es una plantilla editable: reemplaza cada ejemplo con tus propios proyectos, con fotos, descripciones, categorías y tecnologías utilizadas. Aquí no se inventan clientes ni referencias.",
        "note": "Contenido de ejemplo: reemplácelo con sus logros reales.",
        "filters": {
          "all": "Todos",
          "infrastructure": "Infraestructura",
          "reseaux": "Redes",
          "securite": "Seguridad",
          "cloud": "nube",
          "developpement": "Desarrollo"
        },
        "items": [
          {
            "name": "Despliegue de infraestructura",
            "description": "Ejemplo de misión: diseño e instalación de una infraestructura virtualizada, con documentación operativa."
          },
          {
            "name": "Modernización de la red",
            "description": "Ejemplo de misión: reestructuración de una red local, cableado estructurado y despliegue de Wi-Fi profesional."
          },
          {
            "name": "Refuerzo de seguridad",
            "description": "Ejemplo de misión: auditoría de seguridad, configuración de firewalls e implementación de una política de respaldo."
          },
          {
            "name": "Migración a la nube",
            "description": "Ejemplo de misión: cambio gradual de servicios y cuentas de usuarios a un entorno de nube."
          },
          {
            "name": "Aplicación empresarial",
            "description": "Ejemplo de misión: desarrollo de una aplicación web de gestión con automatización de procesos."
          },
          {
            "name": "Videovigilancia IP",
            "description": "Ejemplo de misión: instalación de cámaras IP, configuración de acceso remoto y control de acceso."
          }
        ],
        "cta": {
          "title": "Tus proyectos merecen una presentación digna",
          "text": "Confíanos tu próximo proyecto y danos los elementos que quieres potenciar.",
          "button": "hablar de un proyecto"
        }
      },
      "contact": {
        "eyebrow": "Contacto",
        "title": "Hablemos de tu proyecto TI",
        "lead": "Descríbanos su necesidad. Te respondemos con un análisis inicial y una propuesta adaptada a tu contexto.",
        "form": {
          "title": "Enviar una solicitud",
          "subtitle": "Todos los campos marcados con un asterisco son obligatorios.",
          "firstName": "Nombre *",
          "lastName": "Nombre *",
          "company": "Negocios",
          "email": "Dirección de correo electrónico *",
          "phone": "Teléfono",
          "service": "Servicio deseado *",
          "servicePlaceholder": "Seleccione un servicio",
          "other": "Otro / No definido",
          "message": "Descripción de la necesidad *",
          "messagePlaceholder": "Describe tu entorno, tus objetivos y tu plazo…",
          "consent": "Acepto que BGS utilizará esta información para responder a mi solicitud. *",
          "submit": "enviar mi solicitud",
          "sending": "Envío en curso…",
          "successTitle": "Solicitud enviada",
          "successText": "Gracias por tu mensaje. Nuestro equipo le responderá lo antes posible.",
          "errorTitle": "No se puede enviar",
          "errorText": "Ha ocurrido un error. Inténtalo de nuevo o contáctanos directamente.",
          "reset": "Enviar otra solicitud",
          "privacy": "Sus datos se utilizan únicamente para procesar su solicitud."
        },
        "info": {
          "title": "Nuestros datos de contacto",
          "subtitle": "La siguiente información debe ingresarse en la configuración del sitio.",
          "email": "Correo electrónico",
          "phone": "Teléfono",
          "address": "Dirección",
          "hours": "Horarios",
          "whatsappTitle": "Contacto rápido por whatsapp",
          "whatsappText": "Chatea directamente con nuestro equipo a través de WhatsApp.",
          "whatsappButton": "abrir WhatsApp"
        },
        "faq": {
          "title": "Preguntas frecuentes",
          "items": [
            {
              "q": "¿Cómo se produce un primer contacto?",
              "a": "Discutimos su contexto y sus objetivos, luego definimos juntos el alcance de una posible intervención."
            },
            {
              "q": "¿Ofrecen soporte en sitio?",
              "a": "Sí, dependiendo de la naturaleza de la misión y su ubicación. Los términos y condiciones se definen cuando se estudia su solicitud."
            },
            {
              "q": "¿Puedo solicitar una cotización para múltiples servicios?",
              "a": "Sí. Indique todas sus necesidades en el formulario o contáctenos por WhatsApp."
            }
          ]
        }
      },
      "footer": {
        "tagline": "Infraestructura, seguridad y transformación digital al servicio de su negocio.",
        "quickTitle": "Navegación",
        "servicesTitle": "Nuestros servicios",
        "contactTitle": "Contacto",
        "socialTitle": "Síguenos",
        "legal": "Avisos legales",
        "privacy": "Política de privacidad",
        "copyright": "© {year} BGS. Reservados todos los derechos.",
        "rights": "Diseñado para organizaciones que exigen confiabilidad y claridad.",
        "setupNotice": "Ciertos datos de contacto aún deben ingresarse en activos/js/config.js antes de conectarse.",
        "backToTop": "Volver arriba"
      },
      "legal": {
        "title": "Avisos legales",
        "updated": "Última actualización: por completar",
        "intro": "Este sitio es publicado por BGS. La siguiente información debe complementarse con datos legales reales antes de su publicación.",
        "sections": [
          {
            "title": "editor del sitio",
            "body": "BGS: forma jurídica, número de registro, dirección de la sede, teléfono y dirección de correo electrónico: para completar."
          },
          {
            "title": "director de publicacion",
            "body": "Nombre y cargo del director de la publicación: por completar."
          },
          {
            "title": "Alojamiento",
            "body": "Nombre del anfitrión, dirección y datos de contacto: por completar."
          },
          {
            "title": "Propiedad intelectual",
            "body": "Todos los contenidos, textos, logotipos y elementos gráficos del sitio son propiedad de BGS o de sus respectivos titulares de derechos. Cualquier reproducción, incluso parcial, está sujeta a autorización previa."
          },
          {
            "title": "Hipervínculos",
            "body": "BGS no controla el contenido de los sitios de terceros a los que pueden hacer referencia los enlaces y declina toda responsabilidad por su contenido."
          },
          {
            "title": "Contacto",
            "body": "Para cualquier consulta relacionada con estas menciones, utilice el formulario de contacto o los datos de contacto disponibles en el sitio."
          }
        ]
      },
      "privacy": {
        "title": "Política de privacidad",
        "updated": "Última actualización: por completar",
        "intro": "BGS concede importancia a la protección de sus datos personales. Este documento describe, a modo de modelo, la información recopilada a través del sitio y la forma en que se procesa.",
        "sections": [
          {
            "title": "Datos recopilados",
            "body": "El formulario de contacto recoge la información que usted introduce voluntariamente: nombre, apellidos, empresa, dirección de correo electrónico, número de teléfono, servicio deseado y descripción de la necesidad."
          },
          {
            "title": "Propósitos",
            "body": "Estos datos se utilizan exclusivamente para procesar su solicitud, responderle y realizar el seguimiento de la relación comercial."
          },
          {
            "title": "Preservación",
            "body": "Los datos se conservan durante el tiempo necesario para procesar la solicitud y controlar la relación, luego se eliminan o archivan de acuerdo con las obligaciones legales aplicables."
          },
          {
            "title": "Destinatarios",
            "body": "Los datos no se venden. Podrán ser tratados por los prestadores de servicios técnicos encargados del hosting y mensajería, como parte de la prestación del servicio."
          },
          {
            "title": "Tus derechos",
            "body": "Puede solicitar el acceso, rectificación, supresión o limitación del tratamiento de sus datos, así como oponerse a determinados tratamientos, contactando con nosotros a través del formulario habilitado al efecto."
          },
          {
            "title": "galletas",
            "body": "Este sitio sólo utiliza información local necesaria para su funcionamiento, incluida la memorización del idioma elegido. No se colocan cookies publicitarias."
          },
          {
            "title": "Seguridad",
            "body": "Se implementan medidas técnicas y organizativas para limitar el acceso a los datos, incluyendo validación de formularios, control antispam y limitación de intentos de envío."
          }
        ]
      },
      "notfound": {
        "code": "404",
        "title": "Esta página no se puede encontrar.",
        "text": "La página que buscas no existe o ha sido movida. Puede volver a la página de inicio o consultar nuestros servicios.",
        "button": "volver a casa"
      },
      "validation": {
        "firstName": "Por favor ingrese su nombre.",
        "lastName": "Por favor ingrese su nombre.",
        "email": "Por favor, introduce una dirección de correo electrónico válida.",
        "phone": "Por favor ingrese un número de teléfono válido.",
        "service": "Por favor seleccione un servicio.",
        "message": "Describa su necesidad (mínimo 10 caracteres).",
        "consent": "Se requiere su consentimiento para enviar la solicitud.",
        "spam": "La solicitud no pudo ser validada. Por favor inténtalo de nuevo.",
        "network": "No se puede llegar al servidor. Comprueba tu conexión o utiliza WhatsApp."
      }
    },
  };
})(window);

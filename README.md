# BGS — Site institutionnel

Site web professionnel pour **BGS** : identité visuelle originale, 11 prestations (fibre optique, CRM, applications web/mobiles, vente de matériel, BLR/VSAT), solutions, galerie de réalisations, contact avec formulaire sécurisé, WhatsApp sur toutes les pages et support complet **français / anglais / arabe (RTL)**.

Technologie : HTML, CSS et JavaScript natifs, sans dépendance front-end. Un petit serveur Node.js (optionnel) fournit l'API du formulaire.

---

## 1. Démarrage rapide

```bash
cd C:\Users\Tech\Projets\bgs-website
npm start
```

Ouvrez ensuite **http://localhost:3000**.

Aucune installation de paquets n'est nécessaire (`npm start` lance simplement `node server.js`). Node.js 18 ou supérieur est requis.

Le site peut aussi être ouvert directement dans un navigateur via `index.html` ; seul l'envoi du formulaire nécessite le serveur ou un service de formulaire externe.

---

## 2. Configuration obligatoire avant mise en ligne

Tout se passe dans **`assets/js/config.js`**. Aucune page n'a besoin d'être modifiée.

|Élément|Clé|Action|
|---|---|---|
| Numéro WhatsApp|`whatsapp.number`|Renseigner le numéro international **sans `+`, sans espace, sans tiret** (ex. `22212345678`). Tous les boutons et le message prérempli s'activent automatiquement.|
| E-mail|`site.email`|Adresse professionnelle de contact.|
| Téléphone|`site.phone` / `site.phoneInternational`|Numéro affiché et numéro pour les liens `tel:` (sans `+` pour ce dernier).|
| Adresse|`site.address`|Adresse réelle du siège.|
| Ville / pays|`site.city`, `site.country`|Informations complémentaires.|
| URL du site|`site.url`|Remplacer `https://bgs-site.onrender.com` par le vrai domaine (canonical, SEO, sitemap).|
| Réseaux sociaux|`social.*`|Coller les URLs ; les liens vides sont automatiquement masqués.|
| Formulaire|`contact.endpoint`|`/api/contact` avec le serveur fourni, ou URL d'un service externe (voir §6).|
| Réalisations|`projects`|Remplacer les 6 projets d'exemple par vos projets réels (images, catégories, technologies).|
| Mentions légales|pages dédiées|Compléter les champs « à compléter ».|

Tant qu'une information n'est pas renseignée, le site affiche **« À renseigner »** plutôt qu'une donnée inventée. Le bouton WhatsApp est désactivé tant que `whatsapp.number` est vide — c'est volontaire pour ne pas inventer de numéro.

Pour afficher un rappel discret dans le pied de page pendant la phase de préparation, passez `ui.showSetupNotice` à `true`.

---

## 3. Structure des fichiers

```
bgs-website/
├── index.html                     Accueil
├── a-propos.html                  À propos
├── services.html                  9 prestations détaillées
├── solutions.html                 Solutions par domaine et par besoin
├── realisations.html              Galerie filtrable
├── produits.html                  Catalogue produits + gestion de stock
├── bgs-it-support.html            Plateforme de gestion IT (marketing)
├── contact.html                   Formulaire + coordonnées + FAQ
├── mentions-legales.html
├── politique-confidentialite.html
├── 404.html
├── robots.txt / sitemap.xml
├── server.js                      Serveur statique + API /api/contact
├── package.json / .env.example
└── assets/
    ├── css/styles.css             Design system complet (RTL inclus)
    ├── js/config.js               >>> informations à modifier <<<
    ├── js/i18n.js                 >>> traductions FR / EN / AR <<<
    ├── js/app.js                  Langues, rendu, WhatsApp, formulaire
    └── img/                       Logo, icônes favorites, illustrations
```

---

## 4. Identité visuelle et logo

Fichiers dans `assets/img/` :

- **`bgs-logo.svg`** — logo horizontal bleu marine (fonds clairs : en-tête, documents, factures).
- **`bgs-logo-light.svg`** — version blanche (fonds sombres : pied de page, bandeaux, cartes de visite sombres).
- **`bgs-mark.svg`** — marque seule hexagone/réseau (favicon, courriel, signature, icône d'application).
- **`favicon.svg`** — favicon carré.
- **`about-illustration.svg`** et `img/projects/*.svg` — illustrations technologiques originales.
- **`ecosysteme-reelle.jpg`** — photo de la section « Écosystème BGS » de l’accueil (image fournie, optimisée en JPEG progressif 1408×768).

Le logo associe un hexagone (infrastructure et cybersécurité), un réseau de nœuds reliés (interconnexion) et la typographie **BGS**. Il reste lisible en petit format et sur fond clair comme sur fond sombre.

> Pour générer des PNG haute résolution à partir des SVG (cartes de visite, documents), ouvrez le SVG dans un navigateur ou utilisez un outil tel qu'Inkscape / `sharp`, puis exportez en 512 px et 2048 px avec fond transparent.

---

## 5. Multilingue et RTL

- Sélecteur **FR / EN / AR** dans le bandeau supérieur et dans le menu mobile.
- La langue choisie est mémorisée (`localStorage`) **et** ajoutée à l'URL (`?lang=ar`), donc conservée pendant la navigation et partageable.
- Le passage à l'arabe applique `dir="rtl"` sur `<html>` : navigation, cartes, formulaires, alignements et icônes directionnelles s'inversent.
- **Tous les contenus traduisibles** (menus, pages, services, boutons, messages d'erreur, message WhatsApp, footer, mentions légales) sont centralisés dans **`assets/js/i18n.js`**.
- Le message WhatsApp est traduit automatiquement selon la langue active.

Pour ajouter une traduction : modifiez la clé correspondante dans les trois objets `fr`, `en`, `ar` en conservant la même structure.

---

## 6. Intégration WhatsApp

Un seul numéro configurable (`whatsapp.number`) alimente **tous** les emplacements :

- bouton flottant en bas à droite (présent sur toutes les pages, animation discrète, infobulle au survol) ;
- bandeau supérieur ;
- en-tête ;
- menu mobile ;
- page Contact (carte verte) ;
- bandeaux d'appel à l'action ;
- pied de page.

Lien généré : `https://wa.me/<numéro>?text=<message traduit>`.

Messages préremplis :
- FR — *Bonjour BGS, je souhaite obtenir des informations sur vos prestations de services informatiques.*
- EN — *Hello BGS, I would like to get information about your IT services.*
- AR — *مرحباً BGS، أود الحصول على معلومات حول خدماتكم في مجال تكنولوجيا المعلومات.*

---

## 7. Formulaire de contact

Champs : prénom, nom, entreprise, e-mail, téléphone, service souhaité, description du besoin et consentement.

### Avec le serveur fourni (recommandé)

`contact.endpoint` = `/api/contact`. Les demandes sont :

- validées côté navigateur **et** côté serveur ;
- protégées par un champ honeypot, un délai minimal de remplissage et une limite de 5 envois par heure et par IP ;
- enregistrées dans `data/leads.json` (dossier non accessible publiquement, fichier en mode `600`) ;
- optionnellement notifiées via un webhook défini dans `.env` (`CONTACT_WEBHOOK_URL`).

Pour activer le webhook : copiez `.env.example` vers `.env`, renseignez la variable, puis redémarrez le serveur. Les variables d'environnement peuvent aussi être passées directement à la commande de lancement.

### En hébergement statique (sans Node)

Remplacez `contact.endpoint` par l'URL d'un service compatible JSON (Formspree, Getform, Web3Forms, etc.). Le formulaire envoie déjà un objet JSON ; aucun autre code n'est à modifier. Vous pouvez également conserver le serveur Node derrière un reverse proxy.

---

## 8. SEO, performance et accessibilité

- Balises sémantiques, titres et descriptions uniques par page, `hreflang` FR/EN/AR, canonical, Open Graph, JSON-LD `Organization` / `WebPage`.
- `robots.txt` et `sitemap.xml` (à mettre à jour avec le vrai domaine).
- Aucune bibliothèque JavaScript externe ; images SVG vectorielles et chargement différé (`loading="lazy"`).
- Polices chargées avec `display=swap`, CSS et JS mis en cache par le serveur.
- Liens d'évitement, `aria-*` sur les contrôles, focus visibles, support `prefers-reduced-motion`.
- En-têtes de sécurité HTTP (CSP, `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`).

---

## 9. Contenus modifiables et préparation de l'avenir

- **Aucun client, partenaire, certificat, adresse ou chiffre d'affaires n'est inventé.** Les projets sont explicitement signalés comme exemples.
- Les 11 services (dont fibre optique FTTH / FTTB / OSM, CRM, applications web/mobiles, vente de matériel, BLR/VSAT), leurs prestations, livrables et bénéfices sont dans `i18n.js` (`services.items`) — modifiables sans toucher au HTML.
- Le texte sur la compétence de l’équipe se trouve dans `i18n.js` (`about.team` et `home.intro.team`) et s’affiche sur l’accueil et la page À propos.
- La galerie est pilotée par `config.js` (`projects`) + `i18n.js` (`projects.items`).
- La structure est prête pour ajouter un espace client : le serveur peut être étendu avec des routes `/api/auth/*` et des sessions sans refondre le front.

---

## 10. Vérification rapide

1. `npm start` puis ouvrir `http://localhost:3000`.
2. Tester le sélecteur de langue (le `?lang=...` doit rester présent après navigation).
3. Vérifier l'alignement en arabe (RTL).
4. Renseigner le numéro WhatsApp et cliquer sur le bouton flottant : la conversation doit s'ouvrir avec le bon message traduit.
5. Envoyer une demande de test : vérifier le message de succès et `data/leads.json`.
6. Vérifier le rendu sur mobile, tablette et ordinateur.


---

## 11. Catalogue produits et gestion de stock

La page **`produits.html`** affiche un catalogue filtrable et un tableau de bord de stock (références, disponibilités, alertes).

- **Ajouter un produit** : ajoutez un objet dans `config.js` → `products` avec `id`, `category` (`telecom`, `informatique`, `reseau`, `satellite`), `ref`, `stock` (`available`, `low`, `out`) et les textes `name` / `description` dans les trois langues. La carte, le filtre et les compteurs se mettent à jour automatiquement.
- **Catégories traduites** : `i18n.js` → `products.categories`.
- **Texte de gestion de stock** : `i18n.js` → `products.management`.
- Les produits fournis sont des **modèles génériques** : aucun prix ni référence commerciale n’est inventé.

---

## 12. BGS IT SUPPORT (page marketing)

La page **`bgs-it-support.html`** valorise la solution de centralisation des incidents, tickets, parc informatique, interventions et supervision réseau. Le texte marketing fourni est intégré en français et traduit en anglais et en arabe dans `i18n.js` → `itsupport`. Un encart dédié figure également sur l’accueil.

Pour un vrai back-office (ajout/suppression de produits, mouvements de stock, utilisateurs et droits), le serveur Node peut être étendu avec une API `/api/products` et un espace administrateur sécurisé.


### Ajout et suppression de produits

Sur `produits.html`, une section **Gestion du catalogue** permet d’ajouter un produit (nom FR/EN/AR, description, catégorie, référence, disponibilité) et de retirer n’importe quelle fiche. Les fiches fibre optique (câble, ODF, module SFP) sont incluses dans le catalogue de démonstration.

- Les ajouts/suppressions sont conservés dans le `localStorage` du navigateur (`bgs-products-v1`) : la démonstration fonctionne sans serveur ni compte.
- Le bouton **Réinitialiser le catalogue** restaure les produits définis dans `config.js`.
- Pour un catalogue partagé entre plusieurs postes, étendre le serveur avec une API `/api/products` authentifiée (voir section 11).


---

## 13. Logo officiel

Le logo fourni est intégré sous `assets/img/bgs-logo-officiel.png` (PNG transparent 1774×887). Il remplace les anciens logos SVG dans l’en-tête, le menu mobile et le pied de page. Sur fond sombre, un filtre CSS le rend blanc pour conserver une bonne lisibilité.


---

## 14. Visuels, expertise et produit de la semaine

- Le hero et la section **Déploiement fibre optique** utilisent des illustrations de techniciens (`assets/img/fibre-technicians-bg.svg`, `assets/img/fibre-deployment-bg.svg`).
- La section **Accueil / bienvenue** intègre une illustratrice d’accueil (`assets/img/welcome-lady.svg`) et mentionne la Mauritanie (`config.js → site.country`).
- La section **Ingénierie & expertise** utilise `assets/img/engineers-expertise-bg.svg` et présente des ingénieurs en architecture, supervision et sécurité.
- Une fenêtre **Produit de la semaine** s’ouvre automatiquement une fois par navigateur. Elle affiche le produit défini par `config.js → featuredProductId` (par défaut : câble fibre optique), sans prix ni référence inventés. Un onglet en bas à gauche permet de la rouvrir. La fermeture est mémorisée dans `localStorage`.
- Les illustrations SVG ont été remplacées par les photos fournies : `fibre-reelle.jpg` (hero + déploiement fibre), `accueil-reelle.jpg` (section accueil, réimportée depuis Gemini_Generated_Image_kjf5eekjf5eekjf5.jpg), `expertise-reelle.jpg` (ingénierie & expertise) et `ecosysteme-reelle.jpg` (section « Écosystème BGS » de l’accueil, depuis Gemini_Generated_Image_jqic7hjqic7hjqic.jpg). Elles sont optimisées en JPEG progressif. Si l’ordre ne correspond pas, il suffit de permuter les fichiers dans `assets/img/`.


---

## 15. Mot du Directeur Général

Le message complet de **Cherif Mohamed El Habib Oumar Bah**, Directeur Général de BGS, est publié sur `a-propos.html` (section `#mot-du-directeur`) et résumé sur l’accueil avec un lien de lecture. Le texte est traduit en FR / EN / AR dans `i18n.js` (`director.*`). Aucune photo n’a été inventée : un monogramme et un sceau graphique représentent la signature.


---

## 16. Langue espagnole

L’espagnol (**ES**) est la quatrième langue du site. Le sélecteur est disponible sur toutes les pages, avec `?lang=es`, la persistance dans `localStorage` et `dir="ltr"`. Les traductions sont centralisées dans `assets/js/i18n.js` (`es.*`). Les produits intègrent aussi `name.es` et `description.es`.

## 17. Espace administrateur et catalogue serveur

1. Ouvrez **`admin.html`** (lien « Administration » en pied de page).
2. Au premier lancement, créez votre identifiant (3 à 32 caractères) et votre mot de passe (8 caractères minimum) : il n’existe **aucun compte par défaut**.
3. Le compte est enregistré dans `data/admin.json` avec un mot de passe haché (`scrypt` + sel). La session utilise un cookie `HttpOnly` / `SameSite=Strict`.
4. Depuis `produits.html`, une fois connecté, vous pouvez **ajouter**, **supprimer** et **réinitialiser** les produits. Les modifications sont enregistrées dans `data/products.json` et visibles immédiatement par tous les visiteurs.
5. Le catalogue initial est importé depuis `assets/js/config.js` lors du premier accès à l’API.

Variables d’environnement utiles :

- `COOKIE_SECURE=true` : à activer uniquement si le site est servi en HTTPS (ou derrière un proxy HTTPS).
- `PORT`, `HOST`, `CONTACT_WEBHOOK_URL` : inchangées.

> Les fichiers `data/` ne sont jamais servis publiquement par `server.js`. En cas de perte de `data/admin.json`, un nouveau compte peut être créé depuis `admin.html`.

---

## 18. Hébergement gratuit (Render + Neon)

**Site en ligne : https://bgs-site.onrender.com**

Le guide complet est dans **`DEPLOY.md`**. En résumé :

1. Créez une base PostgreSQL gratuite sur https://console.neon.tech (1 Go, sans expiration).
2. Déposez le projet sur GitHub (le dossier `data/` est exclu par `.gitignore`).
3. Créez un **Web Service gratuit** sur https://dashboard.render.com depuis ce dépôt.
4. Ajoutez la variable d’environnement `DATABASE_URL` avec la connection string Neon.
5. Ouvrez l’URL `.onrender.com`, créez votre compte admin dans `admin.html`, puis gérez le catalogue depuis `produits.html`.

Dès que `DATABASE_URL` est définie, le serveur stocke le compte admin, les produits et
les demandes de contact dans PostgreSQL au lieu des fichiers `data/*.json`. Sans cette
variable, le fonctionnement local reste identique à avant.

Le plan gratuit de Render met le site en veille après 15 minutes d’inactivité : le
premier visiteur attend environ une minute. Neon se réveille automatiquement et ses
données ne sont jamais supprimées.

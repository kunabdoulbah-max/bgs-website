# Hébergement gratuit du site BGS — Render + Neon

## ✅ Déploiement actuel (en ligne)

- **Site** : https://bgs-site.onrender.com
- **Admin** : https://bgs-site.onrender.com/admin.html (créez votre compte au premier accès)
- **Code source** : https://github.com/kunabdoulbah-max/bgs-website
- **Base** : Neon `bgs-site` (Frankfurt), 7 produits initiaux, 0 compte admin

Le guide ci-dessous documente la procédure complète si vous devez recréer l’environnement.

Ce guide vous permet de mettre le site en ligne **gratuitement**, avec un vrai espace
administrateur sécurisé et un catalogue qui persiste (contrairement aux fichiers JSON locaux).

## Pourquoi cette solution ?

Render héberge le serveur Node.js gratuitement, mais **efface les fichiers** à chaque
redémarrage. On utilise donc une base PostgreSQL gratuite chez Neon pour stocker :

- le compte administrateur (mot de passe haché `scrypt`) ;
- le catalogue produits ;
- les demandes du formulaire de contact.

Aucun changement n’est à faire dans le code : le serveur détecte automatiquement la
variable `DATABASE_URL`. Sans elle, il continue d’utiliser `data/*.json` en local.

---

## Étape 1 — Créer la base gratuite (Neon)

1. Allez sur https://console.neon.tech et créez un compte (offre **Free**, 0 €).
2. Créez un nouveau projet :
   - **Name** : `bgs-site`
   - **Region** : `Europe (Frankfurt)` (`eu-central-1`)
   - **Postgres version** : 16 ou 17
3. Dans la page du projet, repérez la **connection string** (onglet *Connection Details*
   ou bouton *Connect*), au format :

   ```
   postgresql://neondb_owner:motdepasse@ep-xxxx.eu-central-1.aws.neon.tech/neondb?sslmode=require
   ```

   Copiez-la entièrement. Vous la collerez dans Render à l’étape 3.

4. (Facultatif) Les tables sont créées **automatiquement** au premier démarrage du site.
   Si vous préférez les créer à la main, ouvrez le **SQL Editor** de Neon et exécutez
   le contenu de `db/schema.sql`.

> Offre gratuite Neon : 1 Go de données, 100 CU-heures/mois, arrêt automatique après
> 5 min d’inactivité avec **réveil automatique**. Aucune carte bancaire requise.
> Les données ne sont jamais supprimées.

---

## Étape 2 — Mettre le projet sur GitHub

Render déploie depuis un dépôt Git. Si vous n’avez pas encore de compte GitHub,
créez-en un, puis créez un dépôt **privé ou public** nommé `bgs-website` (sans README
au départ, pour éviter un conflit).

Dans PowerShell, depuis le dossier du projet :

```powershell
cd C:\Users\Tech\Projets\bgs-website
git init
git add .
git status
```

Vérifiez que `data/` et `.env` n’apparaissent **pas** dans la liste (ils sont exclus par
`.gitignore`). Le compte admin de test ne sera donc jamais envoyé en ligne.

```powershell
git commit -m "Site BGS multilingue"
git branch -M main
git remote add origin https://github.com/VOTRE-PSEUDO/bgs-website.git
git push -u origin main
```

---

## Étape 3 — Déployer sur Render

1. Allez sur https://dashboard.render.com et créez un compte (offre **Free**).
2. Cliquez sur **New → Blueprint**.
3. Connectez votre compte GitHub, sélectionnez le dépôt `bgs-website`, branche `main`.
4. Render lit le fichier `render.yaml` et vous demande la variable secrète :
   - **DATABASE_URL** : collez la connection string copiée à l’étape 1.
5. Cliquez sur **Apply**.

> Si vous préférez créer le service manuellement :
> **New → Web Service** → repo `bgs-website` → Name `bgs-site`, Region `Frankfurt`,
> Runtime `Node`, Plan `Free`, Build `npm install`, Start `npm start`, puis ajoutez
> les variables d’environnement `DATABASE_URL`, `NODE_ENV=production` et
> `COOKIE_SECURE=true`.

Le premier déploiement prend 2 à 5 minutes.

---

## Étape 4 — Première connexion

1. Ouvrez l’URL donnée par Render (elle finit par `.onrender.com`).
   Au premier accès, il faut attendre environ **1 minute** : le serveur gratuit
   se réveille après une période d’inactivité.
2. Ouvrez `https://votre-site.onrender.com/admin.html` et **créez votre compte
   administrateur** (identifiant + mot de passe d’au moins 8 caractères).
3. Retournez sur `produits.html` : le catalogue initial (7 produits) est créé
   automatiquement dans la base. Vous pouvez ajouter, supprimer et réinitialiser
   les produits depuis cette page.
4. Testez le formulaire de contact : les demandes sont enregistrées dans la table
   `bgs_leads` de Neon.

---

## Limites de l’offre gratuite (à connaître)

| Point | Détail |
|---|---|
| Réveil | Après 15 min sans visite, Render met le site en veille. Le premier visiteur attend ~1 min. |
| Temps de calcul | 750 heures/mois offertes, largement suffisant pour un site institutionnel. |
| Base de données | 1 Go chez Neon, sans expiration. |
| Sessions admin | Stockées en mémoire : après une mise en veille, reconnectez-vous simplement. |
| Domaine | Un sous-domaine `.onrender.com` est fourni. Vous pouvez ajouter votre propre domaine gratuitement dans l’onglet *Custom Domains*. |
| HTTPS | Certificat SSL gratuit et automatique. |

---

## Dépannage

**La page affiche « Service Unavailable » au premier clic.**
C’est normal : le serveur gratuit se réveille. Attendez 60 secondes et rechargez.

**Erreur 500 sur `/api/products` ou `/api/admin/status`.**
Vérifiez dans les logs Render (*Logs*) le message `[BGS] Initialisation base de données`.
Il indique presque toujours une `DATABASE_URL` incorrecte (mot de passe ou région).

**Le catalogue est vide.**
Supprimez la variable `DATABASE_URL`, redémarrez, puis vérifiez que le catalogue local
contient bien les 7 produits. Vous pouvez aussi exécuter la réinitialisation depuis
`produits.html` une fois connecté.

**Je veux revenir en local.**
Supprimez (ou commentez) `DATABASE_URL` et lancez `npm start` : le site réutilise
`data/*.json` comme avant.

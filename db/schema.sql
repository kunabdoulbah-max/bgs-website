-- BGS — schéma PostgreSQL (Neon gratuit)
-- Le serveur crée ces tables automatiquement au démarrage (initStore).
-- Ce fichier est fourni à titre d'information : vous pouvez aussi l'exécuter une fois
-- dans le SQL Editor de Neon si vous préférez préparer la base à la main.

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
  position integer NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS bgs_leads (
  id text PRIMARY KEY,
  received_at timestamptz NOT NULL,
  payload jsonb NOT NULL
);

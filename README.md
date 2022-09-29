# Aubergines Symfony Starter

Toutes les commandes listées dans ce document s'exécutent à la racine du projet.

## Configuration de la BDD

- Créer le fichier `.env.local`
- Mettre à jour les paramètres de connexion : 

```bash
DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7"
```

## Installation

L'installation se fait à l'aide de la commande :

```bash
composer install-project
```

et la mise à jour (suite à un changement de branche par exemple) via cette commande :

```bash
composer update-branch
```

Installation Manuel des Assets :

```bash
yarn install
yarn encore dev
```

## Fixtures

L'installation est automatique.
Vous pouvez relancer les fixtures via la commande :

```bash
php bin/console doctrine:fixtures:load
```

Pour la génération des fixtures :

> Documentation Faker : https://github.com/fzaninotto/Faker

## Connexion sur la plateforme

Connexion en tant qu'administrateur :

> Email : admin@test.com \
> Mot de passe : password

Connexion en tant qu'utilisateur :

> Email : client1@test.com \
> Mot de passe : password
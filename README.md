Projet Chi Fou Mi

#Pour un bon déroulement du programme

Objectif du Projet : 
- Le but est de créer projet Chi Fou Mi. C'est un jeu en ligne où deux joueurs s'affrontent sur trois manches. Cool, non ?

Démarrer le Frontend : 
Ouvrez le dossier dans VSCode, lancez un terminal et suivez ces étapes :

```shell
cd chifumi
```
```shell
npm install
```
```shell
npm audit fix
```
```shell
npm run dev
```
Lancer le Serveur Backend
Et pour que la magie opère côté serveur, faites ceci :

```shell
cd chifumi
```
```shell
cd chifoumi-server-main
```
```shell
cd functions
```
```shell
docker compose up
```

Authentification et API
On utilise des tokens JWT pour l'authentification. Voici quelques endpoints clés :

/register pour s'inscrire.
/login pour se connecter.
/matches pour créer et lister les parties.

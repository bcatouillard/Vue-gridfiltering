# VueJS 2.x - Ag-grid filter in URL

## Installation du projet

Installer les dépendances à partir du package-lock.json

```
npm ci
```

### Démarrer le projet 

```
npm run serve
```

## Filtre

Les filtres sont envoyés dans l'URL afin de pouvoir le partager à d'autres personnes.

Par exemple : 
[Filtre sur la marque](http://localhost:8080/?make=%257B%2522filterType%2522%253A%2522text%2522%252C%2522type%2522%253A%2522contains%2522%252C%2522filter%2522%253A%2522Ford%2522%257D&model=null&price=null)
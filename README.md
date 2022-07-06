# calculatuindemnizacion API DOCS

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Requerimientos

- Nodejs v16.15.1

### Installation

Crear un fichero **.env** como copia de **.env.example** y rellenar con los datos

```
npm i
```

### Local Development

```
npm start
```

### Deployment

Desde el branch master

```
npm run deploy
```

Desde el branch develop

```
git push && git checkout master && git merge develop && git push && npm run deploy && git checkout develop 
```


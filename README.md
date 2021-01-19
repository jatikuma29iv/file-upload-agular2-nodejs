# File Upload Angular2 nodejs

The uploaded files will be stored under folder `api/uploads`

## Build and run from cli

### Angular2 spa

**Prerequisit**
Angular CLI version 11.0.7 and node 12 should be installed
`npm i -g @angular/cli@11.0.7`

```bash
cd spa
npm install
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### nodejs api

```bash
cd api
npm install
node server.js
```
The api server runs on http://localhost:3000


## Build in docker

### Angular2 spa

```bash
cd spa
docker build --target dev-env -t fu_spa .
docker run --rm -it -v ${PWD}:/app -u node --entrypoint npm fu_spa install
docker run --rm -it -v ${PWD}:/app -u node -p 8080:4200 -e CHOKIDAR_USEPOLLING=true --name fu_spa -d fu_spa
```
Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

### nodejs api
```bash
cd api
docker build --target dev-env -t fu_api .
docker run --rm -it -v ${PWD}:/app -u node --entrypoint npm fu_api install
docker run --rm -it -v ${PWD}:/app -u node -e APP_BASE_URL="http://localhost:8080" -p 3000 --name fu_api -d fu_api
```

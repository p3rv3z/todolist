# Todolist App

## Tech
- Adonis
- Vue
- Vuetify

## Run The Server
```sh
cd todolist-app/server
yarn install
```
#### Change Database configuration in "env.ts" file  

```sh
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DB_NAME=<your database name>
```
#### Then Migrate and serve the server
 
```
node ace migrate
yarn run dev
```

## Run The Client
```sh
cd todolist-app/client
yarn install
yarn serve
```
#### You can change the baseURL going to this file "todolist-app/client/src/services/http.js"

# CRA Express Boilerplate

[x] Create React App
[x] Express
[x] React Router
[x] React Redux
[x] Redux Saga
[x] Reselect
[x] Styled Components
[ ] TypeORM
[ ] Passport
[ ] Docker


## Setup

```bash
$ docker-compose exec db mysql -u root -p --execute="CREATE DATABASE bucketlist;"
$ docker-compose exec webapp node_modules/.bin/ts-node -P tsconfig.server.json scripts/setup.ts
```

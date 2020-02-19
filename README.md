# CRA Express Boilerplate

- [x] Create React App
- [x] Express
- [x] React Router
- [x] React Redux
- [x] Redux Saga
- [x] Reselect
- [x] Styled Components
- [x] TypeORM
- [x] Docker
- [ ] Production Bundle
- [ ] Passport
- [ ] Jest

## Setup

1. Create the .env file and add `MYSQL_ROOT_PASSWORD=<some password>`

2.

```bash
$ docker-compose up --build
$ docker-compose exec db mysql -u root -p --execute="CREATE DATABASE bucketlist;"
$ docker-compose exec webapp node_modules/.bin/ts-node -P tsconfig.server.json scripts/setup.ts
$ docker-compose restart
```

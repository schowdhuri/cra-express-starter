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
- [ ] Passport
- [ ] Jest
- [ ] Production Image
  - [ ] nginx
  - [ ] pm2

## Development

1. Create the `.env.dev` file and add `MYSQL_ROOT_PASSWORD=<some password>`

2. Get the development environment up and running:

```bash
$ docker-compose -f docker-compose.dev.yml up --build
$ docker-compose -f docker-compose.dev.yml exec db mysql -u root -p --execute="CREATE DATABASE bucketlist;"
$ docker-compose -f docker-compose.dev.yml exec webapp node_modules/.bin/ts-node -P tsconfig.server.json scripts/setup.ts
$ docker-compose -f docker-compose.dev.yml restart
```

Open `http://localhost:3000`

## Deploy

1. Create the `.env.prod` file and add `MYSQL_ROOT_PASSWORD=<some password>`

2. Create the production docker image:

```bash
$ docker-compose -f docker-compose.prod.yml up --build
$ docker-compose -f docker-compose.prod.yml exec db mysql -u root -p --execute="CREATE DATABASE bucketlist;"
$ docker-compose -f docker-compose.prod.yml exec webapp node_modules/.bin/ts-node -P tsconfig.server.json scripts/setup.ts
$ docker-compose -f docker-compose.prod.yml restart
```

The app is served on `http://localhost/`

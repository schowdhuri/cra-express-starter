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

## Setup

1. Create the .env file and add `MYSQL_ROOT_PASSWORD=<some password>`

2. Get the development environment up and running:

```bash
$ docker-compose up --build
$ docker-compose exec db mysql -u root -p --execute="CREATE DATABASE bucketlist;"
$ docker-compose exec webapp node_modules/.bin/ts-node -P tsconfig.server.json scripts/setup.ts
$ docker-compose restart
```

Open `http://localhost:3000`

3. Create the production build:

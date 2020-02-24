FROM node:alpine

WORKDIR /var/www/webapp

COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .

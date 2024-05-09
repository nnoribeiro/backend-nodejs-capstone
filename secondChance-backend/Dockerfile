FROM node:18.12.1-bullseye-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3060

# import data to mongo
WORKDIR /usr/src/app/util/import-mongo
RUN npm install

WORKDIR /usr/src/app

CMD ["node", "app.js"]
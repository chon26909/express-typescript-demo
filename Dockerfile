FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

COPY .env ./dist

EXPOSE 4000

CMD node ./dist/index.js
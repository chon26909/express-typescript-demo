FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

COPY .env ./dist

EXPOSE 4000

CMD node ./dist/index.js
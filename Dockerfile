FROM node:12.13.1

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]
FROM node:20.11.0-alpine3.19

RUN mkdir app

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]

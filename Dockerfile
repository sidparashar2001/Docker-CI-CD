FROM node

WORKDIR /developer/nodejs/app_from_github

COPY . .

RUN npm install

EXPOSE 8000

CMD node server.js
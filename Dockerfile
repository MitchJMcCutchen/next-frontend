FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD package.json /usr/src/app

RUN npm install

ADD . /usr/src/app

EXPOSE 4200

CMD ["npm", "start"]

FROM node:8.11.2-alpine

LABEL hapi-app.version="0.0.1"

ARG environment

WORKDIR /usr/local/app

ENV NODE_ENV=$environment
ENV NODE_PATH=/usr/local/app/node_modules

COPY package.json package.json
RUN npm install
COPY lib lib

EXPOSE 8080

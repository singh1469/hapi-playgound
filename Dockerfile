FROM node:8.11.2-alpine

LABEL hapi-app.version="0.0.1"

ARG environment

WORKDIR /usr/local/app

ENV NODE_ENV=$environment
ENV NODE_PATH=/usr/local/app/node_modules

COPY package.json package.json
RUN npm install
COPY lib lib

# Ugly - CircleCI 2.0 doesn't support (docker-compose) mounted volumes
# Workaround, add dev file here to enable linting on CI
COPY .eslintrc .eslintrc

EXPOSE 8080

CMD ["npm", "run", "prod"]

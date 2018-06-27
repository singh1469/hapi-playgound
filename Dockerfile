###################################
###### STAGE 1 - base #############
###################################

FROM node:8.11.2-alpine AS base
LABEL hapi-app.version="0.0.1"
ARG environment
ENV NODE_ENV=$environment
ENV NODE_PATH=/usr/local/app/node_modules
WORKDIR /usr/local/app
COPY package.json package.json
RUN npm install
COPY lib lib
EXPOSE 8080

###################################
###### STAGE 2 - development ######
###################################

# Ugly - CircleCI 2.0 doesn't support (docker-compose) mounted volumes
# Workaround, add dev file here to enable linting on CI
FROM base AS development
COPY .eslintrc .eslintrc
COPY ./test ./test
CMD ["npm", "run", "serve:dev"]

###################################
###### STAGE 3 - release ##########
###################################

FROM base AS release
CMD ["npm", "run", "serve:prod"]

FROM mongo:3.6.5

LABEL hapi-app.version="0.0.1"

ARG mongo_password
ARG app_db_name
ARG app_username
ARG app_password

ENV MONGO_PASSWORD=$mongo_password
ENV APP_DB_NAME=$app_db_name
ENV APP_USERNAME=$app_username
ENV APP_PASSWORD=$app_password

COPY init.sh /docker-entrypoint-initdb.d/init.sh

EXPOSE 27017

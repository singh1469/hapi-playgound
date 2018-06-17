#!/usr/bin/env bash
set -e

mongo --nodb --quiet <<EOF
    var adminPassword='${MONGO_PASSWORD}';
    var appDbName='${APP_DB_NAME}';
    var appUsername='${APP_PASSWORD}';
    var appPassword='${APP_PASSWORD}';
    var conn = new Mongo();

    var db = conn.getDB('admin');
    db.createUser({
        user: 'admin',
        pwd: adminPassword,
        roles: [{
            role: 'userAdminAnyDatabase',
            db: 'admin'
        }]
    });

    db = conn.getDB('app');
    db.createUser({
        user: appUsername,
        pwd: appPassword,
        roles: [{
            role: 'readWrite',
            db: appDbName
        }]
    });
EOF

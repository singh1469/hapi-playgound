'use strict';

const pkg = require('../package.json');

module.exports = {
    logLevel: {
        debug: 'debug',
        info: 'info',
        warn: 'warn',
        error: 'error',
        critical: 'critical',
    },
    port: process.env.APP_PORT || 8080,
    version: pkg.version,
    db: {
        name: process.env.APP_DB_NAME || '',
        user: process.env.APP_DB_USERNAME || '',
        password: process.env.APP_DB_PASSWORD || '',
        host: process.env.MONGO_URL || '',
    },
};

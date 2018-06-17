'use string'
const pkg = require('../package.json');

module.exports = {
    logLevel: {
        debug: 'debug',
        info: 'info',
        warn: 'warn',
        error: 'error',
        critical: 'critical'
    },
    port: process.env.APP_PORT || 8080,
    version: pkg.version,
    db: {
        name: process.env.DB_NAME || '',
        user: process.env.DB_USERNAME || '',
        password: process.env.DB_PASSWORD || '',
        host: process.env.MONGO_URL || ''
    }
};

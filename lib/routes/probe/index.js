'use strict';

const path = require('path');

const prefix = path.basename(__dirname);
const controller = {};
controller.name = 'asasd';//path.basename(__dirname);
controller.method = async (server, options) => {
    const isReady = () => {
        const data = {
            dbStatus: options.db.readyState,
        };
        return data;
    };

    server.route([{
        method: 'GET',
        path: `/${prefix}/readiness`,
        // eslint-disable-next-line no-unused-vars
        handler: (request, h) => isReady(request),
        config: {
            description: 'Check readiness of service.',
            notes: 'Returns a JSON object.',
            tags: ['api'],
        },
    }]);
};

module.exports = controller;

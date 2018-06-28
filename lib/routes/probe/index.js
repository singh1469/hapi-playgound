'use strict';

const path = require('path');
const handler = require('./handler');

const prefix = path.basename(__dirname);
const Plugin = {};
Plugin.name = path.basename(__dirname);
Plugin.method = async (server, options) => {

    server.route([{
        method: 'GET',
        path: `/${prefix}/readiness`,
        // eslint-disable-next-line no-unused-vars
        handler: (request, h) => handler.isReady(request),
        config: {
            description: 'Check readiness of service.',
            notes: 'Returns a JSON object.',
            tags: ['api'],
        },
    }]);
};

module.exports = Plugin;

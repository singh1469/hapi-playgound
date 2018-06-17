'use strict';
const path = require('path');

const prefix = path.basename(__dirname);
const controller = {};
controller.name = path.basename(__dirname);
controller.method = async (server, options) => {

        const isReady = () => {
            const data = {
                dbStatus: options.db.readyState
            };
            return data;
        };

        server.route([{
            method: 'GET',
            path: `/${prefix}/readiness`,
            handler: (request, h) => {
                return isReady(request);
            },
            config: {
                description: 'Check readiness of service.',
                notes: 'Returns a JSON object.',
                tags: ['api']
            }
        }]);
};

module.exports = controller;

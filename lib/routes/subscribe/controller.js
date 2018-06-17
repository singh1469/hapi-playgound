'use strict';
const path = require('path');
const validate = require('./validator');
const userModel = require('../../models/user');

const prefix = path.basename(__dirname);
const controller = {};
controller.name = path.basename(__dirname);
controller.method = async (server, options) => {
server.log(`/${prefix}/form`)
        const getSubscribe = h => {
            return h.view('form.html');
        };

        const postSubscribe = () => {
            return 'Thanks!';
        };

        server.route([{
            method: 'GET',
            path: `/${prefix}/form`,
            handler: (request, h) => {
                return getSubscribe(h);
            },
            config: {
                description: 'Register for our service.',
                notes: 'Returns a HTML form.',
                tags: ['api']
            }
        }, {
            method: 'POST',
            path: `/${prefix}/form`,
            handler: (request, h) => {
                return postSubscribe();
            },
            config: {
                description: 'Handle register form submission.',
                notes: 'Returns a string',
                tags: ['api'],
                plugins: {
                    'hapi-swagger': {
                        payloadType: 'form'
                    }
                },
                payload: {
                    output: 'data'
                },
                validate: validate.subscribeForm
            }

        }]);
};

module.exports = controller;

'use strict';

const path = require('path');
const validate = require('./validator');
// eslint-disable-next-line no-unused-vars
const userModel = require('../../models/user');

const prefix = path.basename(__dirname);
const Plugin = {};
Plugin.name = path.basename(__dirname);
// eslint-disable-next-line no-unused-vars
Plugin.method = async (server, options) => {
    server.log(`/${prefix}/form`);
    const getSubscribe = h => h.view('form.html');

    const postSubscribe = () => 'Thanks!';

    server.route([{
        method: 'GET',
        path: `/${prefix}/form`,
        handler: (request, h) => getSubscribe(h),
        config: {
            description: 'Register for our service.',
            notes: 'Returns a HTML form.',
            tags: ['api'],
        },
    }, {
        method: 'POST',
        path: `/${prefix}/form`,
        // eslint-disable-next-line no-unused-vars
        handler: (request, h) => postSubscribe(),
        config: {
            description: 'Handle register form submission.',
            notes: 'Returns a string',
            tags: ['api'],
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form',
                },
            },
            payload: {
                output: 'data',
            },
            validate: validate.subscribeForm,
        },

    }]);
};

module.exports = Plugin;

'use strict';

// eslint-disable global-require

const Hapi = require('hapi');
const Vision = require('vision');
const handlebars = require('handlebars');
const config = require('./config');
const helper = require('./initHelper')(config);

// custom deps
const routesSubscribe = require('./routes/subscribe');
const routesProbe = require('./routes/probe');
const extensionOnRequest = require('./extensions/onRequest');


const server = Hapi.server({
    port: config.port,
    app: config,
    routes: {
        cors: true,
    },
});

const init = async () => {
    await server.ext('onRequest', extensionOnRequest);
    await server.register(Vision);
    server.views({
        engines: {
            html: handlebars,
        },
        relativeTo: __dirname,
        path: 'templates',
    });

    if (process.env.NODE_ENV === 'development') {
        const swaggerOptions = {
            info: {
                title: 'API Documentation',
                version: config.version,
            },
            host: '127.0.0.1:8080',
        };
        await server.register([
            // eslint-disable-next-line import/no-extraneous-dependencies, global-require
            require('inert'),
            {
                // eslint-disable-next-line import/no-extraneous-dependencies, global-require
                plugin: require('hapi-swagger'),
                options: swaggerOptions,
            },
        ]);
    }

    await server.register({
        name: routesProbe.name,
        register: routesProbe.register,
        options: {
            db: helper.db,
        },
    });

    await server.register({
        name: routesSubscribe.name,
        register: routesSubscribe.register,
        options: {
            db: helper.db,
        },
    });

    server.events.on('log', (event, tags) => {
        console.log(tags);
    });
    server.events.on('request', (event, tags) => {
        console.log(tags);
    });

    await server.start();

    console.log(`Server running here: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
module.exports = server;

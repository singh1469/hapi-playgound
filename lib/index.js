'use strict';

const Hapi = require('hapi');
const Vision = require('vision');
const config = require('./config'); // etst
const helper = require('./initHelper')(config);

const server = Hapi.server({
    port: config.port,
    app: config,
    routes: {
        cors: true,
    },
});

const init = async () => {
    await server.ext('onRequest', require('./extensions/onRequest'));
    await server.register(Vision);
    server.views({
        engines: {
            html: require('handlebars'),
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
            require('inert'),
            {
                plugin: require('hapi-swagger'),
                options: swaggerOptions,
            },
        ]);
    }

    await server.register({
        plugin: require('./routes/probe'),
        options: {
            db: helper.db,
        },
    });

    await server.register({
        plugin: require('./routes/subscribe'),
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

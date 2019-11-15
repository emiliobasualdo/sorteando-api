'use strict';
const Hapi = require('@hapi/hapi');
const routesUp = require('./src/routes');
const settings = require('./settings');
const AuthService = require('./src/services/auth');
const hapiJwt = require('hapi-auth-jwt2');

// bring your own validation function
const validateUser = async function (decoded, request, h) {
    // do your checks to see if the person is valid
    if (AuthService.isValidJwt(decoded)) {
        return { isValid: true };
    } else {
        return { isValid: false };
    }
};

const init = async () => {
    const server = Hapi.server({
        port: settings.server.port,
        host: settings.server.host
    });


    await server.register(hapiJwt);
    server.auth.strategy('jwt', 'jwt',
        { key: settings.jwt.key, // Never Share your secret key
            validate: validateUser  // validate function defined above
        });

    server.auth.default('jwt');

    await server.register({
        plugin: require('hapi-cors'),
    });

    server.events.on('response', function (request) {
        console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.path + ' --> ' + request.response.statusCode);
    });

    // routes config
    routesUp(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

// no fucking clue qué hace esto
process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();

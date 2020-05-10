'use strict';
const Hapi = require('@hapi/hapi');
const routesUp = require('./src/routes');
const settings = require('./settings');
const AuthService = require('./src/services/auth');
const hapiJwt = require('hapi-auth-jwt2');
const cron = require('node-cron');
const mongoose = require('mongoose');
const {selectWinners} = require("./src/services/winner");
mongoose.set('debug', true);

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
    // conectamos con mongo
    await mongoose.connect(settings.mongo.url, {useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', () => {console.error(`Unable to connect to Mongo server: ${settings.mongo.url}`);process.exit(1);});
    db.once('open', _ => {console.log('Database connected:', settings.mongo.url)});
    // levantamos los servicios
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
    
    //schedulerUp();
    selectWinners();
    console.log('Scheduler up');
};

// no fucking clue qué hace esto
process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();

const schedulerUp = () => {
    cron.schedule('9,19,29,39,49,59 * * * *', () => {
        selectWinners();
    });
};

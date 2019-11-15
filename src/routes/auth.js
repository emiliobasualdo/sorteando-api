const Joi = require('@hapi/joi');
const AuthService = require('./../services/auth');
const { auth } = require('./../constants/auth');
const { emailSchema, passwdSchema, fbTokenSchema, sourceSchema } = require('./_schemas');

const basicAuthPayloadSchema = Joi.object({
    source: sourceSchema.required(),
    email: Joi
        .when('source', { is: auth.method.fb, then: Joi.invalid() })
        .when('source', { is: auth.method.email, then: emailSchema.required() }),
    password: Joi
        .when('source', { is: auth.method.fb, then: Joi.invalid() })
        .when('source', { is: auth.method.email, then: passwdSchema.required() }),
    fbToken: Joi
        .when('source', { is: auth.method.fb, then: fbTokenSchema.required() })
        .when('source', { is: auth.method.email, then: Joi.invalid() }),
});

const signup = {
    method: 'post',
    path: '/auth/signup',
    options: {
        auth: false,
        validate: {
            payload: basicAuthPayloadSchema
        }
    },
    handler: (req, h) => {
        const { source, email, password, fbToken } = req.payload;
        const { msg } = AuthService.signup(source, email, password, fbToken);

        return msg
    }
};

const signin = {
    method: 'post',
    path: '/auth/signin',
    options: {
        auth: false,
        validate: {
            payload: basicAuthPayloadSchema
        }
    },
    handler: (req, h) => {
        const { source, email, password, fbToken } = req.payload;
        const { error, user, jwt } = AuthService.signin(source, email, password, fbToken);
        return {
            user,
            jwt
        }
    }
};

module.exports = [
    signup,
    signin
];
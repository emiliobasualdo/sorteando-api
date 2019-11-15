const Joi = require('@hapi/joi');
const { auth } = require('./../constants/auth');
const { draw } = require('./../constants/api');

module.exports.drawIdSchema = Joi.number().integer().min(0);

module.exports.userIdSchema = Joi.number().integer().min(0);
module.exports.emailSchema = Joi.string().email();
module.exports.passwdSchema = Joi.string().min(8).max(30);
module.exports.fbTokenSchema = Joi.string().min(8).max(30);
module.exports.sourceSchema = Joi.string().valid(auth.method.email, auth.method.fb);
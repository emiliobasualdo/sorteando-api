const Joi = require('@hapi/joi');

module.exports.drawIdSchema = Joi.string().min(24);

module.exports.userIdSchema = Joi.string().min(24);

module.exports.phoneNumberSchema = Joi.string().max(20);

module.exports.smsCodeSchema = Joi.string().min(6).max(6);
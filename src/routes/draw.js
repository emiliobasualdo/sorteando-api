const Joi = require('@hapi/joi');
const DrawService = require('./../services/draw');
const AuthService = require('./../services/auth');
const { drawIdSchema } = require('./_schemas');

const get = {
    method: 'GET',
    path: '/draw/{id}',
    options: {
        auth: false,
        validate: {
            params: Joi.object({
                id: drawIdSchema.required()
            })
        }
    },
    handler: (req, h) => {
        const { id } = req.params;
        return DrawService.getDraw(id)
    }
};

const getWinner = {
    method: 'GET',
    path: '/draw/{id}/winner',
    options: {
        auth: false,
        validate: {
            params: Joi.object({
                id: drawIdSchema.required()
            })
        }
    },
    handler: (req, h) => {
        const { id } = req.params;
        return DrawService.getDraw(id).winner
    }
};



module.exports = [
    get,
    getWinner
];
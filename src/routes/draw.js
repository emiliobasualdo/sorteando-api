const Joi = require('@hapi/joi');
const DrawService = require('./../services/draw');
const { drawIdSchema } = require('./_schemas');
const Boom = require('boom');

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
        const draw = DrawService.getDraw(id);
        return draw.winner ? draw.winner : Boom.badRequest("Draw has not yet finished");
    }
};



module.exports = [
    get,
    getWinner
];
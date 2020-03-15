const Joi = require('@hapi/joi');
const DrawService = require('./../services/draw');
const {DrawStillRunning} = require("../constants/exceptions");
const {NoSuchDraw} = require("../constants/exceptions");
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
    handler: async (req, h) => {
        const { id } = req.params;
        try {
            const draw = await DrawService.findById(id);
            return h.response(draw).code(200);
        } catch (e) {
            if (e instanceof NoSuchDraw) {
                return h.response(e.resp).code(404);
            }
            throw e;
        }
        
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
    handler: async (req, h) => {
        const { id } = req.params;
        try {
            const draw = await DrawService.findById(id);
            //if(draw.end_date >= Date.now()) throw new DrawStillRunning;
            return h.response(draw.winner).code(200)
        } catch (e) {
            if (e instanceof NoSuchDraw)
                return h.response(e.resp).code(404);
            if (e instanceof DrawStillRunning)
                return h.response(e.resp).code(409);
            throw e;
        }
    }
};


module.exports = [
    get,
    getWinner
];
const Joi = require('@hapi/joi');
const DrawService = require('./../services/draw');
const AuthService = require('./../services/auth');
const { drawIdSchema } = require('./_schemas');

const participate = {
    method: 'POST',
    path: '/me/draws',
    options: {
        auth: 'jwt',
        validate: {
            params: Joi.object({
                id: drawIdSchema.required()
            })
        }
    },
    handler: (req, h) => {
        const { id: drawId } = req.params;
        const { credentials } = req.auth;
        DrawService.participate(credentials.id, drawId);

        return "You are know participating"
    }
};

const stopParticipating = {
    method: 'DELETE',
    path: '/me/draws/{drawId}',
    options: {
        auth: 'jwt',
        validate: {
            params: Joi.object({
                drawId: drawIdSchema.required(),
            })
        }
    },
    handler: (req, h) => {
        const { drawId } = req.params;
        const { credentials } = req.auth;
        DrawService.stopParticipating(credentials.id, drawId);

        return "You are no longer participating"
    }
};

module.exports = [
    get,
    participate,
    stopParticipating
];
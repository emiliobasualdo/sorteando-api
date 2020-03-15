const Joi = require('@hapi/joi');
const AuthService = require('./../services/auth');
const UserService = require('./../services/user');
const {InvalidVerificationCode, FinishedDraw, NoSuchDraw, NoSuchUser, InvalidPhoneNumber, MaximumParticipations} = require("../constants/exceptions");
const {drawIdSchema} = require('./_schemas');

const userDto = (user) => {
  const dto = user;
  dto.current_draws = Object.keys(user.current_draws);
  delete dto.participate;
  delete dto.stopParticipating;
  delete dto.updated_at;
  delete dto.__v;
  return dto;
};
const get = {
  method: 'GET',
  path: '/users/me',
  options: {
    auth: 'jwt',
  },
  handler: async (req, h) => {
    const {credentials} = req.auth;
    console.log("credentials:", credentials);
    try {
      return userDto(await AuthService.getUserById(credentials.id));
    } catch (e) {
      if (e instanceof NoSuchUser)
        return h.response(e.resp).code(404);
      throw e;
    }
  }
};

const sendSms = {
  method: 'POST',
  path: '/users/me',
  options: {
    auth: false,
  },
  handler: async (req, h) => {
    const {phone_number} = req.payload;
    try {
      await AuthService.sendSms(phone_number);
      return h.response("Sms sent").code(200);
    } catch (e) {
      if (e instanceof InvalidPhoneNumber)
        return h.response(e.resp).code(400);
      throw e
    }
  }
};

const verifyCode = {
  method: 'POST',
  path: '/users/me/verify',
  options: {
    auth: false,
  },
  handler: async (req, h) => {
    const {code, phone_number} = req.payload;
    try {
      const data = await AuthService.verifyCode(phone_number, code);
      data.user = userDto(data.user);
      console.log(data);
      return h.response(data).code(201);
    } catch (e) {
      if (e instanceof InvalidVerificationCode)
        return h.response(e.resp).code(400);
      else
        throw e;
    }
  }
};

const participate = {
  method: 'POST',
  path: '/users/me/draws',
  options: {
    auth: 'jwt',
    validate: {
      payload: Joi.object({
        drawId: drawIdSchema.required()
      })
    }
  },
  handler: async (req, h) => {
    const {drawId} = req.payload;
    const {credentials} = req.auth;
    try {
      const user = await UserService.participate(credentials.id, drawId);
      return h.response(userDto(user)).code(200);
    } catch (e) {
      if (e instanceof NoSuchUser)
        return h.response(e.resp).code(404);
      if (e instanceof NoSuchDraw)
        return h.response(e.resp).code(404);
      if (e instanceof FinishedDraw)
        return h.response(e.resp).code(409);
      if (e instanceof MaximumParticipations)
        return h.response(e.resp).code(409);
      throw e;
    }
  }
};

const stopParticipating = {
  method: 'DELETE',
  path: '/users/me/draws/{drawId}',
  options: {
    auth: 'jwt',
    validate: {
      params: Joi.object({
        drawId: drawIdSchema.required()
      })
    }
  },
  handler: async (req, h) => {
    const {drawId} = req.params;
    const {credentials} = req.auth;
    try {
      const user = await UserService.stopParticipating(credentials.id, drawId);
      return h.response(userDto(user)).code(200);
    } catch (e) {
      if (e instanceof NoSuchDraw)
        return h.response(e.resp).code(404);
      if (e instanceof FinishedDraw)
        return h.response(e.resp).code(409);
      throw e;
    }
  }
};


module.exports = [
  sendSms,
  verifyCode,
  get,
  participate,
  stopParticipating
];
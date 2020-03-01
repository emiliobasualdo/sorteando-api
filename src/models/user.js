const mongoose = require('mongoose');
const Schema = require("mongoose");
const {NoSuchUser} = require("../constants/exceptions");
const {PhoneNumberInUse} = require('./../constants/exceptions');
const drawInscription = new mongoose.Schema({
  _id: false,
  id: {type: Schema.Types.ObjectId, ref: 'Draw', required: true},
  date: {type: Date, default: Date.now, required: true}
});
const userSchema = new mongoose.Schema({
  phone_number: {
    type: String,
    unique: [true, "phone number already exists"],
    required: [true, "phone number is required"]
  },
  current_draws: {
    type: Map,
    default: {},
    of: drawInscription
  },
  finished_draws: {
    type: [drawInscription],
    default: [],
  },
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

const _User = mongoose.model('User', userSchema);

const addDraw = (user, draw) => {
  user.current_draws.set(draw.id, {id: draw._id, date: Date.now()});
  return user;
};
const removeDraw = (user, draw) => {
  user.current_draws.delete(draw.id);
  return user;
};

const modelFunctions = (user) => {
  user.addDraw = (draw) => addDraw(user, draw);
  user.removeDraw = (draw) => removeDraw(user, draw);
  user.asObject = () => user.toObject({flattenMaps:true});
  return user;
};

const newUser = (phoneNumber) => {
  const newUser = new _User({phone_number: phoneNumber});
  modelFunctions(newUser);
  return newUser.save()
    .catch(e => {
      if (e.errmsg.includes("E11000 duplicate key")) throw new PhoneNumberInUse;
      else throw e;
    })
};

const findById = (id) => _User.findById(id).exec()
  .then(u => {
    if (!u) throw new NoSuchUser;
    return modelFunctions(u)
  });

const findByPhoneNumber = (phoneNumber) => _User.findOne({phone_number: phoneNumber}).exec()
  .then(u => {
    if (!u) throw new NoSuchUser;
    return modelFunctions(u)
  });

const userExists = (_id) => _User.exists({_id});

module.exports = {
  newUser,
  findById,
  findByPhoneNumber,
  userExists
};

const mongoose = require('mongoose');
const {rand} = require("../utils");
const {NoSuchCodeRequest} = require("../constants/exceptions");
const smsCode = new mongoose.Schema({
  phone_number: {
    type: String,
    required: [true, "Phone number is required"]
  },
  code: {
    type: String,
    required: true,
  },
  verified_at: Date,
  invalidated_at: Date
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

const _SmsCode = mongoose.model('SmsCode', smsCode);

const newCode = (phoneNumber, code) => {
  const newcCode = new _SmsCode({phone_number: phoneNumber, code: code});
  return newcCode.save();
};

const modelFunctions = () => {};

const findCode = (phoneNumber, code) =>
  _SmsCode.findOne({phone_number: phoneNumber, code: code})
    .then(u => {
      if (!u) throw new NoSuchCodeRequest;
      return modelFunctions(u)
    });

const invalidateLastCode = (phoneNumber) => {
  _SmsCode.findOneAndUpdate(
    {phone_number: phoneNumber, verified_at: null, invalidated_at: null},
    {$set:{invalidated_at: Date.now()}},
    (err, doc) => {if (err) throw err}
    );
};

const validate = async (phoneNumber, code) => {
  const a = await _SmsCode.findOneAndUpdate(
    {phone_number: phoneNumber, code: code, verified_at: null, invalidated_at: null},
    {$set:{verified_at: Date.now()}},
    {new: true}
  );
  return a;
  
};

module.exports = {
  newCode,
  findCode,
  invalidateLastCode,
  validate
};

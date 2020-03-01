const {rand} = require("../../utils");
const SmsModel = require('./../../models/smsCode');

const newCode = async (phoneNumber) => {
  const code = rand(111111,999999);
  await SmsModel.invalidateLastCode(phoneNumber);
  await SmsModel.newCode(phoneNumber, code);
  return code;
};

const verify =  async (phoneNumber, code) => {
 return (await SmsModel.validate(phoneNumber, code)) !== null
};

module.exports = {
  newCode,
  verify
};
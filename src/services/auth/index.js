const JwtServices = require('./jwt');
const SmsServices = require('./sms');
const SmsCodeServices = require('./smsCode');
const {InvalidVerificationCode, PhoneNumberInUse, InvalidPhoneNumber} = require('./../../constants/exceptions');
const {newUser, findByPhoneNumber, findById, userExists: _userExists} = require("../../models/user");

const isValidPhone = (number) => {
  return number.length === 15;
};

const sendSms = async (phoneNumber) => {
  phoneNumber = phoneNumber.replace("+", "00").replace(/\D/g, '');
  if(!isValidPhone(phoneNumber)) throw new InvalidPhoneNumber;
  const code = await SmsCodeServices.newCode(phoneNumber);
  const text = `Tu código de activación Sorteando es ${code}`;
  return SmsServices.send(phoneNumber, text);
};

const verifyCode = async (phoneNumber, code) => {
  phoneNumber = phoneNumber.replace("+", "00").replace(/\D/g, '');
  const isValid = await SmsCodeServices.verify(phoneNumber, code);
  if (! isValid) throw new InvalidVerificationCode;
  const user = await newUser(phoneNumber)
    .catch(e => {
      if (e instanceof PhoneNumberInUse) {
        return findByPhoneNumber(phoneNumber)
      } else throw e
    });
  const jwt = JwtServices.sign({id: user._id});
  return {user: user.asObject(), jwt}
};

const jwtToUser = (jwt) => {
  return {};
};

const getUserById = async (id) => (await findById(id)).asObject();

const userExists = (id) => _userExists(id);

const isValidJwt = (decodedJwt) => {
  return true;
};

module.exports = {
  sendSms,
  verifyCode,
  jwtToUser,
  getUserById,
  isValidJwt,
  userExists
};
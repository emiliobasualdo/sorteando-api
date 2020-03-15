class InvalidVerificationCode extends Error {
  code = 1;
  msg = "Invalid verification code";
  resp = {code:this.code, msg: this.msg};
}

class PhoneNumberInUse extends Error {
  code = 2;
  msg = "Phone number already exists in DB";
  resp = {code:this.code, msg: this.msg};
}

class FinishedDraw extends Error {
  code = 3;
  msg = "Draw has finished";
  resp = {code:this.code, msg: this.msg};
}

class NoSuchCodeRequest extends Error {
  code = 4;
  msg = "This phone-number/code combination does not exist";
  resp = {code:this.code, msg: this.msg};
}

class NoSuchUser extends Error {
  code = 5;
  msg = "User with this id does not exist";
  resp = {code:this.code, msg: this.msg};
}

class NoSuchDraw extends Error {
  code = 6;
  msg = "Draw with this id does not exist";
  resp = {code:this.code, msg: this.msg};
}

class DrawStillRunning extends Error {
  code = 7;
  msg = "Draw did not finish";
  resp = {code:this.code, msg: this.msg};
}

class InvalidPhoneNumber extends Error {
  code = 8;
  msg = "This phone number is not valid";
  resp = {code:this.code, msg: this.msg};
}

class MaximumParticipations extends Error {
  code = 9;
  msg = "The user reached the limit of draws in which he can participate";
  resp = {code:this.code, msg: this.msg};
}

module.exports = {
  InvalidVerificationCode,
  PhoneNumberInUse,
  FinishedDraw,
  NoSuchCodeRequest,
  NoSuchUser,
  NoSuchDraw,
  DrawStillRunning,
  InvalidPhoneNumber,
  MaximumParticipations
};
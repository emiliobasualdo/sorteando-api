const AuthService = require("../../models/user");
const DrawService = require("../../models/draw");
const {MAX_PARTICIPATIONS} = require("../../constants");
const {MaximumParticipations} = require("../../constants/exceptions");
const {notifyDeveloper} = require("../../utils");

const verifyUserParticiaptions = (user) => {
  console.log(user.current_draws);
  if (user.current_draws.size >= MAX_PARTICIPATIONS)
    throw new MaximumParticipations;
};
const participate = async (userId, drawId) => {
  const user = await AuthService.findById(userId);
  const draw = await DrawService.findById(drawId);
  if (user.current_draws.get(drawId)) { // si ya participa bien
    if (!draw.current_users.get(userId)) { // ups!!!
      // todo, ver hasta que punto es necesario hacer esto
      notifyDeveloper("(participating)User includes draw but not the otherway", {userId, drawId});
      // corregimos
      draw.addUser(user);
    }
  } else {
    if (draw.current_users.get(userId)) { // ups!!!
      // todo, ver hasta que punto es necesario hacer esto
      notifyDeveloper("(participating)Draw includes user but not the otherway", {userId, drawId});
    }
    verifyUserParticiaptions(user);
    draw.addUser(user);
    user.addDraw(draw);
  }
  await user.save();
  await draw.save();
  return user.asObject();
};
const stopParticipating = async (userId, drawId) => {
  const user = await AuthService.findById(userId);
  const draw = await DrawService.findById(drawId);
  if (user.current_draws.get(drawId)) { // si ya participa
    user.removeDraw(draw);
    draw.removeUser(user);
    await user.save();
    await draw.save();
  }
  return user.asObject();
};

module.exports = {
  participate,
  stopParticipating
};
const AuthService = require("../../models/user");
const DrawService = require("../../models/draw");
const {notifyDeveloper} = require("../../utils");

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
    } else { // este sería el único caso 100% correcto
      draw.addUser(user);
    }
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
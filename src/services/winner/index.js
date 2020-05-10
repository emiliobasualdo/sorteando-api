const {getDrawsForWinnerChoosing} = require('../../models/draw');
const {rand} = require("../../utils");
const selectWinners = async () => {
  const draws = await getDrawsForWinnerChoosing();
  draws.forEach( d => {
    if (d.pre_winner || !d.current_users) return;
    const usersIds =  Array.from(d.current_users.keys());
    if (usersIds.length === 0) return;
    const num = rand(0, usersIds.length);
    d.winner = usersIds[num];
    d.save()
  })
};

module.exports = {
  selectWinners
};
module.exports.notifyDeveloper = (msg, data) => {
  console.error(msg, data);
};
module.exports.rand = (min, max) => Math.trunc(Math.random() * (max - min) + min);
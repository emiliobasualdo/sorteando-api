const feed = require('./feed');
const draw = require('./draw');
const users = require('./users');

module.exports = (server) => {
  server.route(feed);
  server.route(draw);
  server.route(users);
};
const feed = require('./feed');
const draw = require('./draw');
const auth = require('./auth');

module.exports = (server) => {
  server.route(feed);
  server.route(draw);
  server.route(auth);
};
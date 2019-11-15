const JWT   = require('jsonwebtoken');
const { jwt } = require('./../../../settings');

const sign = (obj) => {
    return JWT.sign(obj, jwt.key);
};

module.exports = {
    sign
};
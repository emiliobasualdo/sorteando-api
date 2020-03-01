const { getDraws } = require('./../draw');
const {getAll} = require("../../models/banner");

const getFeed = () => getDraws();

const getBanners = () => getAll();

module.exports = {
    getFeed,
    getBanners
};

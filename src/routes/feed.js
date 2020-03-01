const Joi = require('@hapi/joi');
const FeedService = require('./../services/feed');
const getFeed = {
    method: 'GET',
    path: '/feed',
    options: {
        auth: false,
    },
    handler: async (req, h) => {
        return await FeedService.getFeed();
    }
};

const getBanners = {
    method: 'GET',
    path: '/feed/banners',
    options: {
        auth: false
    },
    handler: async (req, h) => {
        return await FeedService.getBanners();
    }
};

module.exports = [
    getFeed,
    getBanners
];
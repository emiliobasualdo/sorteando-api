const Joi = require('@hapi/joi');
const FeedService = require('./../services/feed');
const getFeed = {
    method: 'GET',
    path: '/feed',
    options: {
        auth: false,
    },
    handler: (req, h) => {
        const page = parseInt(req.query.page);
        const draws = FeedService.getFeed(page);

        return {
            count: draws ? draws.length : 0,
            draws
        }
    }
};

const getBanners = {
    method: 'GET',
    path: '/feed/banners',
    options: {
        auth: false
    },
    handler: (req, h) => {
        return FeedService.getBanners();
    }
};

module.exports = [
    getFeed,
    getBanners
];
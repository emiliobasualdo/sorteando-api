const Joi = require('@hapi/joi');
const FeedService = require('./../services/feed');
const getFeed = {
    method: 'GET',
    path: '/feed',
    options: {
        auth: false,
        validate: {
            query: Joi.object({
                page: Joi.number().integer().min(0).default(0)
            })
        }
    },
    handler: (req, h) => {
        const page = parseInt(req.query.page);
        const feed = FeedService.getFeed(page);

        return {
            currentPage: page,
            nextPage: feed ? page + 1 : null,
            count: feed ? feed.length : 0,
            feed
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
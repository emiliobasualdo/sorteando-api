const Joi = require('@hapi/joi');
const FeedService = require('./../services/feed');
const DrawService = require('./../services/draw');

const getFeed = {
  method: 'GET',
  path: '/feed',
  options: {
    auth: false,
  },
  handler: async (req, h) => {
    const {page} = req.query;
    return await FeedService.getFeed(page);
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

const getHistory = {
  method: 'GET',
  path: '/feed/history',
  options: {
    auth: false
  },
  handler: async (req, h) => {
    const {page} = req.query;
    return await DrawService.getFinished(page);
  }
};

module.exports = [
  getFeed,
  getBanners,
  getHistory
];
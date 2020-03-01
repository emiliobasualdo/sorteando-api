const mongoose = require('mongoose');
const Schema = require("mongoose");
const banner = new mongoose.Schema({
  draw: {type: Schema.Types.ObjectId, ref: 'Draw', required: true},
  image: {type: String, required: true},
  finished: {type: Boolean, required: true},
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

const _Banner = mongoose.model('Banner', banner);

const newBanner = (drawId, image) => {
  const newBanner = new _Banner({draw: drawId, image: image, finished: false});
  return newBanner.save();
};

const getAll = async () => {
  const query = _Banner.find({ finished: false});
  return await query.exec();
};

module.exports = {
  newBanner,
  getAll,
};

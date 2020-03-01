const mongoose = require('mongoose');

const brand = new mongoose.Schema({
  name: {type: String, required: true},
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

const _Brand = mongoose.model('Brand', brand);
const registerBrand = () => {};

module.exports = {
  registerBrand
};

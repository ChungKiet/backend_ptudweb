const mongoose = require('mongoose');
const validator = require('validator');

const prodSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   buy_limit: {
      type: Number,
      required: true,
      default: 1,
   },
   price: {
      type: Number,
      required: true,
      default: 0,
   },
   images: {
      type: Array, of: String, required: false
   },
});

const Product = mongoose.model('Product', prodSchema);

module.exports = Product;

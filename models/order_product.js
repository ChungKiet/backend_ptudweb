const mongoose = require('mongoose');
const validator = require('validator');

const orderProSchema = new mongoose.Schema({
   id_user: {
      type: String,
      required: true,
   },
   id_sets: {
      type: Array, of: String, required: true,
   },
   amounts: {
      type: Array, of: Number, required: true, default: 1, 
   },
   curr_prices: {
      type: Array, of: Number, required: true,
   },
});

const OrderProduct = mongoose.model('OrderProduct', orderProSchema);

module.exports = OrderProduct;

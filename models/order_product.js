const mongoose = require('mongoose');
const validator = require('validator');

const orderProSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   idPro: {
      type: String,
      required: true,
   },
   amount: {
      type: Number,
      required: true,
   },
   currPrice: {
      type: Number,
      required: true,
   },
});

const OrderProduct = mongoose.model('OrderProduct', orderProSchema);

module.exports = OrderProduct;

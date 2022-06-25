const mongoose = require('mongoose');
const validator = require('validator');

const cartSchema = new mongoose.Schema({
   id_user: {
      type: String,
      required: true,
   },
   id_prod: {
      type: String,
      required: true,
   },
   amount: {
      type: Number,
      required: true,
      default: 1,
   },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

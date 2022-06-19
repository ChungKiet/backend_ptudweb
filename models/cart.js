const mongoose = require('mongoose');
const validator = require('validator');

const cartSchema = new mongoose.Schema({
   idUser: {
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
      default: 1,
   },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

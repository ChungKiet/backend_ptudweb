const mongoose = require('mongoose');
const validator = require('validator');

const orderSchema = new mongoose.Schema({
   idUser: {
      type: String,
      required: true,
   },
   idOrder: {
      type: String,
      required: true,
   },
   amount: {
      type: Number,
      required: true,
      default: 1,
   },
   createdAt: {
      type: Date, required: true, default: Date.now()
   },
   state: {
      type: Boolean,
      required: true,
   },
   method: {
      type: String,
      required: true,
   },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

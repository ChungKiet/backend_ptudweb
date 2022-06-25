const mongoose = require('mongoose');
const validator = require('validator');

const orderSchema = new mongoose.Schema({
   id_user: {
      type: String,
      required: true,
   },
   id_order: {
      type: String,
      required: true,
   },
   amount: {
      type: Number,
      required: true,
      default: 1,
   },
   created_at: {
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

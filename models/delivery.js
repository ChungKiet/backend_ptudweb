const mongoose = require('mongoose');
const validator = require('validator');

const deliverySchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   state: {
      type: String,
      required: true,
   },
   dayDelivery: {
      type: Date, required: true, default: Date.now()
   },
   dayExpect: {
      type: Date, required: true, default: Date.now()
   },
   address: {
      type: String,
      required: true
   },
   receiverName: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
      minlength: 10,
      maxlength: 11,
   },
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;

const mongoose = require('mongoose');
const validator = require('validator');

const paymentAccSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   amount: {
      type: Number,
      required: true,
   },
});

const PaymentAccount = mongoose.model('PaymentAccount', paymentAccSchema);

module.exports = PaymentAccount;

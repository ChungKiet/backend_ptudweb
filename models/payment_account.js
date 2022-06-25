const mongoose = require('mongoose');

const paymentAccSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      require: true
   },
   amount: {
      type: Number,
      required: true,
   },
});

const PaymentAccount = mongoose.model('PaymentAccount', paymentAccSchema);

module.exports = PaymentAccount;

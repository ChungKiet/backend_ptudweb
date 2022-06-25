const mongoose = require('mongoose');
const validator = require('validator');

const paymentHistorySchema = new mongoose.Schema({
   id_user: {
      type: String,
      required: true,
   },
   day: {
      type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
   },
   amount: {
      type: Number,
      required: true
   },
   source: {
      type: String,
      required: true
   },
});

const PaymentHis = mongoose.model('PaymentHis', paymentHistorySchema);

module.exports = PaymentHis;

const mongoose = require('mongoose');
const validator = require('validator');

const billSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   idBuyer: {
      type: String,
      required: true,
   },
   amount: {
      type: Number,
      required: true,
   },
   state: {
      type: Boolean,
      required: true,
   },
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;
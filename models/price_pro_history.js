const mongoose = require('mongoose');
const validator = require('validator');

const priceHisSChema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   idPrice: {
      type: String,
      required: true,
   },
   startTime: {
      type: Date, required: true, default: Date.now()
   },
   price: {
      type: Number,
      required: true
   },
   state: {
      type: String,
      required: true
   },
});

const PriceHis = mongoose.model('PriceHis', priceHisSChema);

module.exports = PriceHis;

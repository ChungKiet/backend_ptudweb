const mongoose = require('mongoose');
const validator = require('validator');

const priceHisSChema = new mongoose.Schema({
   id_prod: {
      type: String,
      required: true,
   },
   prices: {
      type: Array, of: Number, require: false
   },
   start_times: {
      type: Array, of: Date, require: false
   },
});

const PriceHis = mongoose.model('PriceHis', priceHisSChema);

module.exports = PriceHis;

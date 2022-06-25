const mongoose = require('mongoose');
const validator = require('validator');

const productStatSchema = new mongoose.Schema({
   id_prod: {
      type: String,
      required: true,
   },
   day: {
      type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
   },
   buy: {
      type: Number, required: true, default: 0
   },
});

const ProductStat = mongoose.model('ProductStat', productStatSchema);

module.exports = ProductStat;

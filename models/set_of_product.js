const mongoose = require('mongoose');
const validator = require('validator');

const setOfProductSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   image: {
      type: Array, of: String, require: false
   },
   id_prods : {
      type: Array, of: String, require: false
   },
   buy_limit: {
      type: Number,
      required: true,
      default: 1,
   },
   price: {
      type: Number,
      required: true,
      default: 0,
   },
   expired_at: {
      type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
   },
});

const SetOfProduct = mongoose.model('SetOfProduct', setOfProductSchema);

module.exports = SetOfProduct;


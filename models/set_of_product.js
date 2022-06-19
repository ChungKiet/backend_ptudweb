const mongoose = require('mongoose');
const validator = require('validator');

const setOfProductSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   idProd: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   image: {
      type: String, required: false
   },
   buyLimit: {
      type: Number,
      required: true,
      default: 1,
   },
   price: {
      type: Number,
      required: true,
      default: 0,
   },
   expireAt: {
      type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
   },
});

const SetOfProduct = mongoose.model('SetOfProduct', setOfProductSchema);

module.exports = SetOfProduct;


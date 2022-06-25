const mongoose = require('mongoose');

const remainPurchaseSchema = new mongoose.Schema({
   id_user : {
      type: String,
      required: true,
   },
   id_set: {
      type: String,
      required: true,
   },
   id_prods: {
      type: Array, of: String, require: true
   },
   remains: {
      type: Array, of: Number, require: true
   },
});

const RemainPurchase = mongoose.model('RemainPurchase', remainPurchaseSchema);

module.exports = RemainPurchase;


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
   remain: {
      type: Number,
      required: true,
   },
});

const RemainPurchase = mongoose.model('RemainPurchase', remainPurchaseSchema);

module.exports = RemainPurchase;


const mongoose = require('mongoose');
const validator = require('validator');

const accStateSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
   role: {
      type: Number, required: true
   },
   state: {
      type: Boolean, required: true, default: false
   },
});

const AccountState = mongoose.model('AccountState', accStateSchema);

module.exports = AccountState;

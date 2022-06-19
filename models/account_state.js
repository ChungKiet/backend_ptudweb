const mongoose = require('mongoose');
const validator = require('validator');

const accStateSchema = new mongoose.Schema({
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
      type: Boolean, required: true, default: '2001-01-01T00:00:00.000Z'
   },
});

const AccountState = mongoose.model('AccountState', accStateSchema);

module.exports = AccountState;

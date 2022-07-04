const mongoose = require('mongoose');
const validator = require('validator');

const quarantineLocationSChema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   address: {
      type: String,
   },
   capacity: {
      type: Number,
      required: true
   },
   amount: {
      type: Number,
      required: true
   },
   state: {
      type: Boolean,
      required: true,
      default: true
   },
});

const QuarantineLoc = mongoose.model('QuarantineLoc', quarantineLocationSChema);

module.exports = QuarantineLoc;

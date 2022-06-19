const mongoose = require('mongoose');
const validator = require('validator');

const activeHisSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   time: {
      type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
   },
   action: {
      type: Number, required: true
   },
});

const ActiveHis = mongoose.model('ActiveHis', activeHisSchema);

module.exports = ActiveHis;

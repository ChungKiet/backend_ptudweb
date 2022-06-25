const mongoose = require('mongoose');
const validator = require('validator');

const activeHisSchema = new mongoose.Schema({
   id_user: {
      type: String,
      required: true,
   },
   id_act: {
      type: String,
      required: true,
   },
   time: {
      type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
   },
});

const ActiveHis = mongoose.model('ActiveHis', activeHisSchema);

module.exports = ActiveHis;

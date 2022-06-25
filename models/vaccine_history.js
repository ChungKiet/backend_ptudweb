const mongoose = require('mongoose');
const validator = require('validator');

const vaccineHistorySchema = new mongoose.Schema({
   id_user: {
      type: String,
      required: true,
   },
   id_vaccine: {
      type: Number,
      required: true,
   },
   type_of_vaccine: {
      type: Number,
      required: true,
   },
   address: {
      type: String,
   },
   date_vac: {
      type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
   },
});

const VaccineHis = mongoose.model('VaccineHis', vaccineHistorySchema);

module.exports = VaccineHis;

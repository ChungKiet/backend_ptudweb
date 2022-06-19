const mongoose = require('mongoose');
const validator = require('validator');

const vaccineHistorySchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   idVaccine: {
      type: Number,
      required: true,
   },
   typeOfVaccine: {
      type: Number,
      required: true,
   },
   address: {
      type: String,
   },
   dateVac: {
      type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
   },
});

const VaccineHis = mongoose.model('VaccineHis', vaccineHistorySchema);

module.exports = VaccineHis;

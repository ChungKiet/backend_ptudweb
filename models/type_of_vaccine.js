const mongoose = require('mongoose');
const validator = require('validator');

const typeOfVaccineSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
});

const TypeOfVaccine = mongoose.model('TypeOfVaccine', typeOfVaccineSchema);

module.exports = TypeOfVaccine;
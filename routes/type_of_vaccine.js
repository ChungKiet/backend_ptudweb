const express = require('express');
const route = express.Router();

const TypeOfVaccineController = require('../controllers/type_of_vaccine_controller')

route.get('/get-all-type', TypeOfVaccineController.get_all_type);

route.post('/add-new-type', TypeOfVaccineController.add_new_type);

module.exports = route
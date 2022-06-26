const express = require('express');
const route = express.Router();

const VaccineHisController = require('../controllers/vaccine_history_controller')

route.get('/get-history-by-user', VaccineHisController.get_vaccine_history_by_id);

route.post('/add-history', VaccineHisController.add_account_state);

module.exports = route
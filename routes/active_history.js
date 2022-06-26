const express = require('express');
const route = express.Router();

const ActiveHisController = require('../controllers/active_history_controller')

route.get('/get-history-by-user', ActiveHisController.get_his_by_id);

route.post('/add-history', ActiveHisController.add_history);

module.exports = route
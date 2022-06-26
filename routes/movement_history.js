const express = require('express');
const route = express.Router();

const MovHisController = require('../controllers/movement_history_controller')

route.get('/view-by-id', MovHisController.view_by_id);

route.post('/add-history', MovHisController.add_history);

route.put('/update-detail', MovHisController.update_detail);

module.exports = route
const express = require('express');
const route = express.Router();

const ActTypeController = require('../controllers/action_type_controller')

route.post('/add-history', ActTypeController.add_history);

route.delete('/delete-history', ActTypeController.delete_his);

module.exports = route
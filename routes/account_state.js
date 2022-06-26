const express = require('express');
const route = express.Router();

const AccStateController = require('../controllers/account_state_controller');

route.get('/get-state', AccStateController.get_acc_state);

route.post('/add-account-state', AccStateController.add_account_state);

route.put('/update-state', AccStateController.update_state);

route.delete('/delete-account-state', AccStateController.delete_acc_state);

module.exports = route
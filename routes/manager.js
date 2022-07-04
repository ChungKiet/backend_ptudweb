const express = require('express');
const route = express.Router();

const ManagerController = require('../controllers/manager_controller')

route.post('/add-user', ManagerController.add_user);

route.get('/new-user-form', ManagerController.new_user_form);

route.get('/get-all-user', ManagerController.get_all_user);

route.delete('/delete-user', ManagerController.delete_user);

module.exports = route
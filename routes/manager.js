const express = require('express');
const route = express.Router();

const ManagerController = require('../controllers/manager_controller')

route.post('/add-user', ManagerController.add_user);;

route.delete('/delete-user', ManagerController.delete_user);

module.exports = route
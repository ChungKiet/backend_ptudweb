const express = require('express');
const route = express.Router();


const UserController = require('../controllers/user_controller')

route.post('/login', UserController.login);

route.get('/get-profile', UserController.user_profile);

route.put('/update-profile', UserController.update_profile);

module.exports = route
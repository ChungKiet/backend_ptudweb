const express = require('express');
const route = express.Router();

const UserController = require('../controllers/user_controller')

route.post('/login', UserController.login);

route.get('/get-profile', UserController.user_profile);
route.get('/product', UserController.user_product);
route.get('/user-order', UserController.user_order);
route.get('/budget', UserController.budget);
route.get('/cart', UserController.cart);
route.get('/details', UserController.details);
route.get('/user-payment-confirm', UserController.confirm);
route.get('/user-payment-completed', UserController.payment_completed);

route.put('/update-profile', UserController.update_profile);

module.exports = route
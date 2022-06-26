const express = require('express');
const route = express.Router();

const PaymentAccController = require('../controllers/payment_account_controller')

route.get('/view-one-account', PaymentAccController.view_one_acc);

route.get('/view-all', PaymentAccController.view_all);

route.post('/add-new-account', PaymentAccController.add_new_acc);

route.post('/login', PaymentAccController.login);

route.put('/update-payment', PaymentAccController.update_payment);

module.exports = route
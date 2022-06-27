const express = require('express');
const route = express.Router();

const PaymentHisController = require('../controllers/payment_history_controller')

route.get('/view-by-id', PaymentHisController.view_pay_his);

route.get('/view-all', PaymentHisController.view_all);

route.post('/add-history', PaymentHisController.add_history);

module.exports = route
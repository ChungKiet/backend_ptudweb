const express = require('express');
const route = express.Router();

const OrderController = require('../controllers/order_controller')

route.get('/view-order', OrderController.view_order);

route.post('/add-new-order', OrderController.add_new_order);

route.put('/update-order', OrderController.update_order);

route.delete('/delete-order', OrderController.delete_order);

module.exports = route
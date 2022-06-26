const express = require('express');
const route = express.Router();

const OrderProdController = require('../controllers/order_product_controller')

route.get('/view-by-user', OrderProdController.view_by_user_id);

route.post('/add-order-prod', OrderProdController.add_order_prod);

route.put('/update-order-prod', OrderProdController.update_order_pro);

route.delete('/delete-order-prod', OrderProdController.delete_order_pro);

module.exports = route
const express = require('express');
const route = express.Router();

const RemainPurchaseController = require('../controllers/remain_purchase_controller')

route.get('/view-by-id', RemainPurchaseController.view_by_id);

route.post('/add-new-remain', RemainPurchaseController.add_new_remain);

module.exports = route
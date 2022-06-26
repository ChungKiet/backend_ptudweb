const express = require('express');
const route = express.Router();

const BillController = require('../controllers/bill_controller')

route.get('/view-by-id', BillController.view_by_id);

route.get('/view-all', BillController.view_all);

route.post('/add-bill', BillController.add_bill);

route.put('/update-bill', BillController.update_bill);

module.exports = route
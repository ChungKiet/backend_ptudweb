const express = require('express');
const route = express.Router();

const ProdStatController = require('../controllers/product_stat_controller')

route.get('/view-all', ProdStatController.view_all);

route.post('/add-history', ProdStatController.add_history);

module.exports = route
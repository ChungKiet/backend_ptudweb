const express = require('express');
const route = express.Router();

const PriceHisController = require('../controllers/price_pro_history_controller')

route.get('/view-price-prod', PriceHisController.view_price_prod);

module.exports = route
const express = require('express');
const route = express.Router();

const SetOfProdStatController = require('../controllers/set_of_product_stat_controller')

route.get('/view-all', SetOfProdStatController.view_all);

route.post('/add-new-set', SetOfProdStatController.add_new_set);

module.exports = route
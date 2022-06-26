const express = require('express');
const route = express.Router();

const ProdController = require('../controllers/product_controller')

route.get('/view-product', ProdController.view_prod);

route.get('/view-all', ProdController.view_all);

route.post('/add-new-product', ProdController.add_new_prod);

route.put('/update-product', ProdController.update_prod);

route.delete('/delete-product', ProdController.delete_prod);

module.exports = route
const express = require('express');
const route = express.Router();

const SetOfProdController = require('../controllers/set_of_product_controller')

route.get('/view-set_of-product', SetOfProdController.view_set_of_prod);

route.get('/view-all-product', SetOfProdController.view_all_prod);

route.post('/add-new-product', SetOfProdController.add_new_prod);

route.put('/update-product', SetOfProdController.update_prod);

route.delete('/delete-set-of-product', SetOfProdController.delete_set_of_prod);

module.exports = route
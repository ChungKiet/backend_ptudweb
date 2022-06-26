const express = require('express');
const route = express.Router();

const CartController = require('../controllers/cart_controller')

route.post('/add-to-cart', CartController.add_to_cart);

route.put('/update-cart', CartController.update_cart);

route.delete('/delete-cart', CartController.delete_cart);

module.exports = route
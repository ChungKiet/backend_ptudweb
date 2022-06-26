const express = require('express');
const route = express.Router();

const DeliveryController = require('../controllers/delivery_controller')

route.post('/add-delivery', DeliveryController.add_delivery);

route.put('/update-delivery', DeliveryController.update_delivery);

route.delete('/delete-delivery', DeliveryController.delete_delivery);

module.exports = route
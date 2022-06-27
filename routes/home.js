const express = require('express');
const route = express.Router();

const HomeController = require('../controllers/home_controller');

route.get('/:slug', HomeController.not_found);

route.get('/', HomeController.index);

module.exports = route
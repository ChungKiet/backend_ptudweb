const express = require('express');
const route = express.Router();

const QuarantineLocController = require('../controllers/quarantine_location_controller')

route.get('/view-quarantine-location', QuarantineLocController.view_loc);

route.get('/view-all', QuarantineLocController.view_all_loc);

route.post('/add-new-location', QuarantineLocController.add_new_loc);

route.put('/update-location', QuarantineLocController.update_loc);

module.exports = route
const mongoose = require('mongoose');
const validator = require('validator');

const managerSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
});

const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;
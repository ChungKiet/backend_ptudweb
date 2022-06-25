const mongoose = require('mongoose');
const validator = require('validator');

const acTypeSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
});

const ActionType = mongoose.model('ActionType', acTypeSchema);

module.exports = ActionType;

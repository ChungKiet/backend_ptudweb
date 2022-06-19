const mongoose = require('mongoose');
const validator = require('validator');

const movementHisSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   address: {
      type: String,
   },
   day: {
      type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
   },
   idOther: {
      type: String,
      required: true,
   },
});

const MovementHis = mongoose.model('MovementHis', movementHisSchema);

module.exports = MovementHis;

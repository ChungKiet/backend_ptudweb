const mongoose = require('mongoose');
const validator = require('validator');

const movementHisSchema = new mongoose.Schema({
   id_user: {
      type: String,
      required: true,
   },
   info: [
      {
         id_other: String,
         address: String,
         date: Date
      }
   ]
});

const MovementHis = mongoose.model('MovementHis', movementHisSchema);

module.exports = MovementHis;

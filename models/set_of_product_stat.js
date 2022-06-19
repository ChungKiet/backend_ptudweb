const mongoose = require('mongoose');
const validator = require('validator');

const setOfProdStatSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   day: {
      type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
   },
   buy: {
      type: Number, required: true, default: 0
   },
});

const SetOfProdStat = mongoose.model('SetOfProdStat', setOfProdStatSchema);

module.exports = SetOfProdStat;

// const mongoose = require('mongoose');
// const validator = require('validator');

// const deliverySchema = new mongoose.Schema({
//    id: {
//       type: String,
//       required: true,
//    },
//    state: {
//       type: String,
//       required: true,
//    },
//    dayDelivery: {
//       type: Date, required: true, default: Date.now()
//    },
//    dayExpect: {
//       type: Date, required: true, default: Date.now()
//    },
//    address: {
//       type: String,
//       required: true
//    },
//    receiverName: {
//       type: String,
//       required: true,
//    },
//    phone: {
//       type: String,
//       minlength: 10,
//       maxlength: 11,
//    },
// });

// const Delivery = mongoose.model('Delivery', deliverySchema);

// module.exports = Delivery;


// const VaccineHis = require("../models/vaccine_history");
const Delivery = require("../models/delivery");

class DeliveryController {  

   async add_delivery(req, res, next) {
      const { id, state, day_delivery, day_expect, address, receive_name, phone } = req.body;
      const delivery = await Delivery.findOne({ id: id });
      if (delivery) {
         res.send({
            "msg": 3, 'delivery': null
         });
      }
      try {
         const delivery = await Delivery.create({ id, state, day_delivery, day_expect, address, receive_name, phone });
         res.send({ "msg": 1, 'delivery': delivery });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'delivery': null
         });
      }
   }

   // update state
   async update_delivery(req, res, next) {
      const { id, state, day_delivery, day_expect, address, receive_name, phone } = req.body;
      const delivery = await Delivery.findOne({ id: id });
      if (!delivery) {
         res.send({
            "msg": 3, 'delivery': null
         });
      }
      try {
         const delivery = await Delivery.updateOne({ id, state, day_delivery, day_expect, address, receive_name, phone });
         res.send({ "msg": 1, 'delivery': delivery });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'delivery': null
         });
      }
   }

   // delete
   async delete_delivery(req, res, next) {
      const { id } = req.body;
      try {
         const delivery = await Delivery.deleteOne({ id: id });
         res.send({ "msg": 1, 'result': "Delete delivery success" });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'result': "Delete delivery failed"
         });
      }
   }

}

module.exports = DeliveryController
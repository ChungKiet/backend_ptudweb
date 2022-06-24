const mongoose = require('mongoose');
const validator = require('validator');

const deliverySchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   state: {
      type: String,
      required: true,
   },
   dayDelivery: {
      type: Date, required: true, default: Date.now()
   },
   dayExpect: {
      type: Date, required: true, default: Date.now()
   },
   address: {
      type: String,
      required: true
   },
   receiverName: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
      minlength: 10,
      maxlength: 11,
   },
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;


const VaccineHis = require("../models/vaccine_history");
const User = require("../models/user");

class VaccineHisController {  

   // [POST] /users/register --> Create new user (call for manager)

   // find user by req.id --> if not exists --> pass else --> check type of vaccine in range of value --> oke? add
   async add_history(req, res, next) {
      const { id, name, password, birthday, address, email, phone, min_exchange, quarantine_state, updated_state } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const userExists = await User.findOne({ username });
      if (userExists) {
            res.send({
               "msg": 3, 'user': null
               // "error": { "code": 409, "message": "Username already exists" }
            });
         }
         try {
            const user = await VaccineHis.create({id, name, password, birthday, address, email, phone, min_exchange, quarantine_state, updated_state });
            res.send({ "msg": 1, 'user': user });
         }
         catch (err) {
            res.status(401).send({
               "msg": 0, 'user': null
               // "error": { "code": 401, "message": "Registration failed." }
            });
         }
   }

   // create new raw data

   // update state

   // delete

}

module.exports = VaccineHisController
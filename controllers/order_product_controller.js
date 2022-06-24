const mongoose = require('mongoose');
const validator = require('validator');

const orderProSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   idPro: {
      type: String,
      required: true,
   },
   amount: {
      type: Number,
      required: true,
   },
   currPrice: {
      type: Number,
      required: true,
   },
});

const OrderProduct = mongoose.model('OrderProduct', orderProSchema);

module.exports = OrderProduct;

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

   // update
   // update add new product in a record
   async update_order_pro(req, res, next){

   }

   // view by bill_id
   // bill detail --> all product of that bill
   async view_by_bill_id(req, res, next){

   }

   // delete when cart of user is null / empty
   async delete_order_pro(req, res, next){
      
   }

}

module.exports = VaccineHisController
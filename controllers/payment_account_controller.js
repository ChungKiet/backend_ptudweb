const mongoose = require('mongoose');
const validator = require('validator');

const paymentAccSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   amount: {
      type: Number,
      required: true,
   },
});

const PaymentAccount = mongoose.model('PaymentAccount', paymentAccSchema);

module.exports = PaymentAccount;

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
   // check amount is gt 0 and update
   async update_payment(req, res, next){

   }

   // view
   // view name and amount
   async view_one_acc(req, res, next){

   }

   // view all (limit per page)
   async view_all(req, res, next){
      
   }

}

module.exports = VaccineHisController

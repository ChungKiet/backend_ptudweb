const mongoose = require('mongoose');
const validator = require('validator');

const prodSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   buyLimit: {
      type: Number,
      required: true,
      default: 1,
   },
   price: {
      type: Number,
      required: true,
      default: 0,
   },
   images: {
      type: Array, of: String, required: false
   },
});

const Product = mongoose.model('Product', prodSchema);

module.exports = Product;

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

   // update --> update image, update or the param
   async update_prod(req, res, next){

   }
   // view
   // get all info of a product (when view and add to new set of product)
   async view_prod(req, res, next){

   }

   // view all (limit per page)
   async view_all(req, res, next){

   }

   // delete
   // check whether it in any set of product
   async delete_prod(req, res, next){
      
   }

}

module.exports = VaccineHisController
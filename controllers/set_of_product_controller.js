// const mongoose = require('mongoose');
// const validator = require('validator');

// const setOfProductSchema = new mongoose.Schema({
//    id: {
//       type: String,
//       required: true,
//    },
//    idProd: {
//       type: String,
//       required: true,
//    },
//    name: {
//       type: String,
//       required: true,
//    },
//    image: {
//       type: String, required: false
//    },
//    buyLimit: {
//       type: Number,
//       required: true,
//       default: 1,
//    },
//    price: {
//       type: Number,
//       required: true,
//       default: 0,
//    },
//    expireAt: {
//       type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
//    },
// });

// const SetOfProduct = mongoose.model('SetOfProduct', setOfProductSchema);

// module.exports = SetOfProduct;

// create

// view all

const VaccineHis = require("../models/vaccine_history");
const User = require("../models/user");
const SetOfProduct = require("../models/set_of_product")

class SetOfProdController {  

   // [POST] /users/register --> Create new user (call for manager)

   // find user by req.id --> if not exists --> pass else --> check type of vaccine in range of value --> oke? add
   async add_new_prod(req, res, next) {
      const { id, idProd, name, image, buyLimit, price, expiredAt, min_exchange, quarantine_state, updated_state } = req.body;
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

   async update_product(req, res, next) {
      
   }

   async view_all_product(req, res, next) {

   }

   async view_set_of_prod(req, res, next) {

   }

   async delete_set_of_prod(req, res, next) {

   }


   // update --> add new product in list
   // update a product
   // remove a product (only save on cache FE)
   // when click complete --> send request to BE

   // view all (limit per page??)
   // don't need to load whole database

   // view set
   // get info of a set of product


   // delete
}

module.exports = SetOfProdController
const MovementHis = require("../models/movement_history");
const User = require("../models/user");
const VaccineHis = require("../models/vaccine_history");

class UserController {  

   // [PUT] /users/update_profile ---> manager update
   async update_profile(req, res, next) {
      const { id, username, name, password, user_type, birthday, address, email, phone, min_exchange, quarantine_state, updated_state } = req.body;
      try {
         const user = await User.updateOne({ id: id}, {
            name, username, password, birthday, address, 
            user_type, email, phone, min_exchange, quarantine_state,
            updated_state
         });
         if (user.modifiedCount === 1) {
            res.json({ "result": 1, "message": "Profile update Success" });
         }
         else {
            res.json({ "result": 0, "message": "Profile update Failed" });
         }
      }
      catch (err) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Server inernal error. Profile update failed."
            }
         });
      }
   }

   // [POST] /users/login
   async login(req, res, next) {
      const { username, password } = req.body;
      const user = await User.findOne({ username: username });
      res.status(200).render('user/user-product',{
         layout:'user-layout',
         style:'user-product.css',
         title:'Product'
      });
      // if (!user) {
      //    res.send({
      //       "isLogin": 2, "user": null
      //    });
      // }
      // else if (user.password === password) {
      //    res.status(200).render('user/user-product',{
      //       style:'user-profile.css',
      //       title:'Product'
      //    });
      // }
      // else {
      //    res.send({
      //       "isLogin": 3, "user": null
      //    });
      // }
   }
   // [GET] /user/product
   async user_product(req, res, next) {
      res.status(200).render('user/user-product',{
         layout:'user-layout',
         style:'user-product.css',
         title:'Product'
      });
   }

   // [GET] /users/get-profile
   async user_profile(req, res, next) {
      const id = req.query.id;
      const user = await User.findOne({
         id: 'F1_001'
      }); // ignore this info
      const vaccineHis = await VaccineHis.find({ id_user: 'F1_001' }); // sample id: 62bb2a31ed6d8232fda52cbc
      const mov_his = await MovementHis.findOne({ id_user: 'F1_001'});
      console.log(user)
      if (user) {
         res.status(200).render('user/user-profile',{
            user: user,
            vaccine_history: vaccineHis,
            movement_history: mov_his, 
            layout:'user-layout1.hbs',
            style:'user-profile.css',
            title:'Profile'
         });
      }
      else {
         res.status(404).send({
            "error": {
               "code": 404,
               "message": " User Not Found"
            }
         });
      }
   }
   
}


module.exports = new UserController;
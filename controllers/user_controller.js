const User = require("../models/user");

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
      if (!user) {
         res.send({
            "isLogin": 2, "user": null
         });
      }
      else if (user.password === password) {
         res.send({
            "isLogin": 1, "user": user
         });
      }
      else {
         res.send({
            "isLogin": 3, "user": null
         });
      }
   }

   // [GET] /users/get-profile
   async user_profile(req, res, next) {
      const id = req.body.id;
      const user = await User.findOne({
         id: id
      }); // ignore this info
      if (user) {
         res.json(user);
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

module.exports = UserController
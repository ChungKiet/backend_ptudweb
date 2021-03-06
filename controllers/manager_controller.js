const User = require("../models/user");
class ManagerController {  

   // [POST] /manager/register --> Create new user (call for manager)
   async add_user(req, res, next) {
      const { id, username,  name, password, user_type, birthday, address, email, phone, min_exchange, quarantine_state, updated_state } = req.body;
      console.log(id, username,  name, password, "Testsererojoajidso")
      const userExists = await User.findOne({ username : username });
      if (userExists) {
            res.send({
               "msg": 3, 'user': null
            });
         }
      // try {
         const user = await User.create({id, username, name, password, user_type, birthday, address, email, phone, min_exchange, quarantine_state, updated_state });
         res.send({ "msg": 1, 'user': user });
      // }
      // catch (err) {
      //    res.status(401).send({
      //       "msg": 0, 'user': null
      //    });
      // }
   }

   // delete 
   async delete_user(req, res, next) {
      const id = req.body.id;

      try {
         await User.deleteOne({
            id: id
         });
         res.json({ "result": 1, "message": "Delete user successfully." });
      } catch (error) {
         res.status(404).send({
            "error": {
               "code": 404,
               "message": "Internal error. User Not Found"
            }
         });
      }
   }

}

module.exports = new ManagerController
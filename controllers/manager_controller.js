const MovementHis = require("../models/movement_history");
const User = require("../models/user");
class ManagerController {  

   // [POST] /manager/register --> Create new user (call for manager)
   async add_user(req, res, next) {
      const { name, user_type, birthday, address, email, phone, cmnd, min_exchange, quarantine_state, updated_state } = req.body;
      const password = "0000";
      const username = id;
      const userExists = await User.findOne({ id : id });
      const userCount = await User.find({}).countDocuments();
      const id = 'F' + quarantine_state + '_' + userCount;
      if (userExists) {
            res.send({
               "msg": 3, 'user': null
            });
         }
      try {
         const user = await User.create({id, username, name, password, user_type, birthday, address, email, 
            phone, cmnd, min_exchange, quarantine_state, updated_state });
         res.send({ "msg": 1, 'user': user });

      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'user': null
         });

      }

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

   async get_all_user(req, res, next) {
      const page = Number(req.query.page) || 1;
      const from = (page - 1) * 4;
      const to = page * 4;
      const userFind = User.find({});
      const movH = MovementHis.find({});
      let movHis = {};
      for (let i = 0; i < movH.countDocuments(); i++){
         movHis[movH[i].id_user] = movH[i];
      }

      const user = await userFind.exec();

      res.json({"message": 1, "user": user.slice(from, to), "movHis": movHis})
   }

}

module.exports = new ManagerController
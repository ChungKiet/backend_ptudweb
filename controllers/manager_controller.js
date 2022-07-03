const MovementHis = require("../models/movement_history");
const User = require("../models/user");
class ManagerController {  

   // [POST] /manager/register --> Create new user (call for manager)
   async add_user(req, res, next) {
      const { id,  name, user_type, birthday, address, email, phone, min_exchange, quarantine_state, updated_state } = req.body;
      console.log(id, username,  name, password, "Testsererojoajidso")
      const password = "0000";
      const username = id;
      const userExists = await User.findOne({ id : id });
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

      // res.json({"message": 1, "user": user.slice(from, to), "movHis": movHis})
      res.status(200).render('manager/manager-add-people-related-to-covid',{
         message: 1,
         user: user.slice(from,to),
         movHis: movHis,
         layout:'layout1.hbs',
         style:'../../css/manager-add-people-related-to-covid.css',
         title:'Danh sách người liên quan Covid'
      });
      
   }

}

module.exports = new ManagerController
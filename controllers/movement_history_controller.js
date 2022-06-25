const MovementHis = require("../models/movement_history");

class MovHisController {  

   async add_history(req, res, next) {
      const { id_user, info } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const userExists = await MovementHis.findOne({ id_user: id_user});
      if (userExists) {
            res.send({
               "msg": 3, 'user': null
            });
         }
      try {
         const user = await MovementHis.create({id_user, info});
         res.send({ "msg": 1, 'user': user });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'user': null
         });
      }
   }

   // update detail
   async update_detail(req, res, next) {
      const { id_user, info } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const userExists = await MovementHis.findOne({ id_user: id_user});
      if (!userExists) {
            res.send({
               "msg": 3, 'user': null
            });
         }
      try {
         const user = await MovementHis.updateOne({id_user: id_user}, { info});
         res.send({ "msg": 1, 'user': user });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'user': null
         });
      }
   }

   // view by id
   async view_by_id(req, res, next) {
      const { id_user } = req.body;
      try {
         const user = await MovementHis.findOne({ id_user: id_user});
         res.send({ "msg": 1, 'user': user });
      }
      catch (err) {
         res.status(404).send({
            "msg": 0, 'user': null
         });
      }
   }

}

module.exports = MovHisController
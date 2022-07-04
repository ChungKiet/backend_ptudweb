const MovementHis = require("../models/movement_history");

class MovHisController {  

   async add_history(req, res, next) {
      const { id_user, info } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const movHis = await MovementHis.findOne({ id_user: id_user});
      if (movHis) {
            const movHis = await MovementHis.updateOne({id_user: id_user}, {$push: {info: {
               id_other: info.id_other,
               address: info.address,
               date: info.date
            }}})
            res.send({
               "msg": 3, 'mov_his': movHis
            });
         }
      try {
         const movHis = await MovementHis.create({id_user: id_user, info : [
            {
               id_other: info.id_other,
               address: info.address,
               date: info.date
            }
         ]});
         res.send({ "msg": 1, 'mov_his': movHis });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'mov_his': null
         });
      }
   }

   // update detail
   async update_detail(req, res, next) {
      const { id_user, info } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const mov_his = await MovementHis.findOne({ id_user: id_user});
      if (!mov_his) {
            res.send({
               "msg": 3, 'mov_his': null
            });
         }
      try {
         const mov_his = await MovementHis.updateOne({id_user: id_user}, { info});
         res.send({ "msg": 1, 'mov_his': mov_his });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'mov_his': null
         });
      }
   }

   // view by id
   async view_by_id(req, res, next) {
      const { id_user } = req.body;
      try {
         const mov_his = await MovementHis.findOne({ id_user: id_user});
         res.send({ "msg": 1, 'mov_his': mov_his });
      }
      catch (err) {
         res.status(404).send({
            "msg": 0, 'mov_his': null
         });
      }
   }

}

module.exports = new MovHisController
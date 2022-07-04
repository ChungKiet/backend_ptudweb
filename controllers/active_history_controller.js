const ActiveHis = require("../models/active_history");
const ActionType = require("../models/action_type");

class ActiveHisController {  

   async add_history(req, res, next) {
      const { id_user, id_act, time } = req.body;
      try {
         const act_his = await ActiveHis.create({ id_user, id_act, time });
         res.send({ "msg": 1, 'act_his': act_his });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'act_his': null
         });
      }
   }

   // view by id or name
   async get_his_by_id(req, res, next) {
      const { id_user } = req.body;
      try {
         const act_his = await ActiveHis.find({ id_user: id_user});
         const act_type = await ActionType.find({});

         let act_his_list = act_his;
         for (let i = 0; i < act_his.countDocuments(); i++){
            act_his_list[i] = act_type[act_his[i].id_act].name;
         }

         res.send({ "msg": 1, 'act_his': act_his, 'act_his_list': act_his_list});
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'act_his': null
         });
      }
   }

}

module.exports = new ActiveHisController
const ActionType = require("../models/action_type");

class ActTypeController {  

   async add_history(req, res, next) {
      const { id, name } = req.body;
      const acc_type = await ActionType.findOne({ id: id });
      if (accType) {
            res.send({
               "msg": 3, 'acc_type': null
            });
         }
      try {
         const acc_type = await ActionType.create({id, name });
         res.send({ "msg": 1, 'acc_type': acc_type });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'acc_type': null
         });
      }
   }
   
   // delete action
   async delete_his(req, res, next) {
      const { id } = req.body;
      try {
         await ActionType.deleteOne({id: id });
         res.send({ "msg": 1, 'result': "Delete action success" });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'result': "Delete action failed" ,
         });
      }
   }
}

module.exports = ActTypeController

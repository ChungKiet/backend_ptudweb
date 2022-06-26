const RemainPurchase = require("../models/remain_purchase");
class RemainPurchaseController {  
   async add_new_remain(req, res, next) {
      const { id_user, id_set, id_prods, remains } = req.body;
      const remainPur = await RemainPurchase.findOne({ id_user: id_user, id_set: id_set});
      if (remainPur) {
         const remainPur = RemainPurchase.updateOne({id_user: id_user, id_set: id_set}, {id_prods: id_prods, remain: remain})
         res.send({
            "msg": 3, 'remain_purchase': remainPur.remain
         });
      }
      else {
         try {
            const remainPur = await RemainPurchase.create({ id_user, id_set, id_prods, remains });
            res.send({ "msg": 1, 'remain_purchase': remainPur.remain });
         }
         catch (err) {
            res.status(401).send({
               "msg": 0, 'remain_purchase': -1
            });
         }
      }
   }

   // [GET] /set-of-prod-stat/view-all
   async view_by_id(req, res, next) {
      const {id_user, id_set} = req.body;
      const remainPur = await RemainPurchase.findOne({id_user: id_user, id_set: id_set});
      if (remainPur) {
         res.send({
            "msg": 1, 'remain_purchase': remainPur.remain
         });
      }
      else {
         res.status(401).send({
            "msg": 0, 'remain_purchase': -1
         });
      }
   }
}

module.exports = RemainPurchaseController
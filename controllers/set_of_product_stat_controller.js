const SetOfProdStat = require("../models/set_of_product_stat")

// phần FE xử lý date dd/mm/yyyy
class SetOfProdStatController {  
   async add_new_set(req, res, next) {
      const { id, day, buy } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const setOfProdStat = await SetOfProdStat.findOne({ id: id, day: day });
      if (setOfProdStat) {
         const setOfProdStat = SetOfProdStat.updateOne({id: id, day: day}, {buy: setOfProdStat?.buy + buy})
         res.send({
            "msg": 3, 'set_of_prod_stats': setOfProdStat
         });
      }
      else {
         try {
            const user = await SetOfProdStat.create({id, day, buy });
            res.send({ "msg": 1, 'set_of_prod_stats': setOfProdStat });
         }
         catch (err) {
            res.status(401).send({
               "msg": 0, 'set-of-prod-stat': null
            });
         }
      }
   }

   // [GET] /set-of-prod-stat/view-all
   async view_all(req, res, next) {
      const setOfProdStats = await SetOfProdStat.find({});
      if (setOfProdStats) {
         res.send({
            "msg": 1, 'set_of_prod_stats': setOfProdStats
         });
      }
      else {
         res.status(401).send({
            "msg": 0, 'set_of_prod_stats': null
         });
      }
   }
}

module.exports = new SetOfProdStatController

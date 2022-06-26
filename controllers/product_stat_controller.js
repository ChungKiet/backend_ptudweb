const ProductStat = require("../models/product_stat");
class ProdStatController {  

   async add_history(req, res, next) {
      const { id_prod, day, buy } = req.body;
      const product_stat = await ProductStat.findOne({ id: id });
      if (product_stat) {
         const product_stat = ProductStat.updateOne({id_prod: id_prod, day: day}, {buy: setOfProdStat?.buy + buy})
         res.send({
            "msg": 3, 'product_stat': product_stat
         });
      }
      else{
         try {
            const product_stat = await ProductStat.create({ id_prod, day, buy });
            res.send({ "msg": 1, 'product_stat': product_stat });
         }
         catch (err) {
            res.status(500).send({
               "error": {
                  "result": 0,
                  "code": 500,
                  "message": "Server internal error. Update product statistic failed."
               }
            });
         }
      }
   }

   // view all (limit per page)
   async view_all (req, res, next) {
      const productStats = await ProductStat.find({});
      try {
         if (productStats) {
            res.send({
               "msg": 1, 'prod_stats': productStats
            });
         }
         else {
            res.status(401).send({
               "msg": 0, 'prod_stats': null
            });
         }
      } catch (error) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Server internal error. Update product statistic failed."
            }
         });
      }
   }   

}

module.exports = ProdStatController
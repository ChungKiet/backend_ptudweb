const ProductStat = require("../models/product_stat");
class ProdStatController {  

   // [POST] /users/register --> Create new user (call for manager)

   // find user by req.id --> if not exists --> pass else --> check type of vaccine in range of value --> oke? add
   async add_history(req, res, next) {
      const { id_prod, day, buy } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const product_stat = await ProductStat.findOne({ id: id });
      if (product_stat) {
         const product_stat = ProductStat.updateOne({id_prod: id_prod, day: day}, {buy: setOfProdStat?.buy + buy})
         res.send({
            "msg": 3, 'product_stat': product_stat
            // "error": { "code": 409, "message": "Username already exists" }
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
                  "message": "Server internal error. Update set of quarantine location failed."
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
               // "error": { "code": 409, "message": "Username already exists" }
            });
         }
         else {
            res.status(401).send({
               "msg": 0, 'prod_stats': null
               // "error": { "code": 401, "message": "Registration failed." }
            });
         }
      } catch (error) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Server internal error. Update set of quarantine location failed."
            }
         });
      }
   }   

}

module.exports = ProdStatController
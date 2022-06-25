const PriceHis = require("../models/price_pro_history");

class PriceHisController {  

   // [POST] /users/register --> Create new user (call for manager)
   async view_price_prod(req, res, next){
      const { id_prod } = req.body;
      try {
         const prodPriceHis = await PriceHis.findOne({
            id_prod: id_prod
         }); // ignore this info
         if (prodPriceHis) {
            res.json({"msg": 1, "price_history": prodPriceHis});
         }
         else {
            res.status(404).send({
               "error": {
                  "code": 404,
                  "message": "Product not found"
               }
            });
         }
      } catch (error) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Internal server error."
            }
         });
      }
   }
}

module.exports = PriceHisController
const OrderProduct = require("../models/order_product");
class OrderProdController {  

   async add_order_prod(req, res, next) {
      const { id_order, id_sets, amounts, curr_prices } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const orderProd = await OrderProduct.findOne({ id_order, id_sets, amounts, curr_prices});
      if (orderProd) {
            res.send({
               "msg": 3, 'order_prod': orderProd
            });
         }
         try {
            const orderProd = await OrderProduct.create({ id_order, id_sets, amounts, curr_prices});
            res.send({ "msg": 1, 'order_prod': orderProd });
         }
         catch (err) {
            res.status(401).send({
               "msg": 0, 'order_prod': orderProd
            });
         }
   }

   // update
   // update add new product in a record
   async update_order_pro(req, res, next){
      const { id_order, id_sets, amounts, curr_prices } = req.body;
      const orderProd = await OrderProduct.findOne({id_order: id_order});
      if (!orderProd) {
         res.status(404).send({
            "msg": 0, 'result': "Order product not found"
         });
      }
      try {
         const orderProd = await OrderProduct.updateOne({id_order: id_order},{ id_sets, amounts, curr_prices});
         res.send({ "msg": 1, 'order_prod': orderProd });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'order_prod': orderProd
         });
      }
   }

   // view by bill_id
   // bill detail --> all product of that bill
   async view_by_user_id(req, res, next){
      const { id_order, id_sets, amounts, curr_prices } = req.body;
      const orderProd = await OrderProduct.findOne({id_order: id_order});
      if (!orderProd) {
         res.status(404).send({
            "msg": 0, 'result': "Order product not found"
         });
      }
      try {
         const orderProd = await OrderProduct.updateOne({id_order: id_order},{ id_sets, amounts, curr_prices});
         res.send({ "msg": 1, 'order_prod': orderProd });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'order_prod': orderProd
         });
      }
   }

   // delete when cart of user is null / empty
   async delete_order_pro(req, res, next){
      const { id_user } = req.body;
      const orderProd = await OrderProduct.findOne({id_user: id_user});
      if (!orderProd) {
         res.status(404).send({
            "msg": 0, 'result': "Order product not found"
         });
      }
      try {
         const orderProd = await OrderProduct.deleteOne({id_user: id_user});
         res.send({ "msg": 1, 'order_prod': orderProd });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'order_prod': orderProd
         });
      }
   }

}

module.exports = OrderProdController
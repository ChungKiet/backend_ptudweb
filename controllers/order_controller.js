const Order = require("../models/order");

class OrderController {  

   // [POST] /users/register --> Create new user (call for manager)
   async add_new_order(req, res, next) {
      const { id_user, id_order, amount, created_at, state, method } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const order = await Order.findOne({ id_order: id_order });
      if (order) {
            res.send({
               "msg": 3, 'order': null
            });
         }
      try {
         const order = await Order.create({ id_order, id_user , amount, created_at, state, method });
         res.send({ "msg": 1, 'order': order });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'order': null
         });
      }
   }

   // update
   async update_order(req, res, next){
      const { id_user, id_order, amount, created_at, state, method } = req.body;
      try {
         const order = await Order.updateOne({ id_order: id_order} ,{ id_user, amount, created_at, state, method });
         res.send({ "msg": 1, 'order': order });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'order': null
         });
      }
   }

   // view
   async view_order(req, res, next){
      const { id_order } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      
      try {
         const order = await Order.findOne({ id_order: id_order });
         if (order) {
            res.send({
               "msg": 3, 'order': order
            });
         }
         else{
            res.status(404).send({
               "msg": 0, 'order': null
            });
         }
      }
      catch (err) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Internal server error."
            }
         });
      }
   }

   // delete
   async delete_order(req, res, next){
      const id_order = req.body.id_order;
      try {
         await SetOfProduct.deleteOne({ id_order: id_order });
         res.json({ "result": 1, "message": "Delete order successfully." })
      }
      catch (err) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Delete order failed."
            }
         });
      }
   }

}

module.exports = OrderController
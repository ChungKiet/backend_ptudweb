const Cart = require("../models/cart");

class CartController {  

   async add_to_cart(req, res, next) {
      const { id_user, id_prod, amount } = req.body;
      const cart = await Cart.findOne({ id_user: id_user, id_prod: id_prod });
      if (cart) {
         res.send({
            "msg": 3, 'cart': null
         });
      }
      try {
         const cart = await Cart.create({ id_user: id_user, id_prod: id_prod, amount: amount });
         res.send({ "msg": 1, 'cart': cart });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'cart': null
         });
      }
   }

   // update product
   async update_cart(req, res, next) {
      const { id_user, id_prod, amount } = req.body;
      const cart = await Cart.findOne({ id_user: id_user, id_prod: id_prod });
      if (!cart) {
         res.send({
            "msg": 3, 'cart': null
         });
      }
      try {
         const cart = await Cart.updateOne({ id_user: id_user, id_prod: id_prod}, { amount: amount });
         res.send({ "msg": 1, 'cart': cart });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'cart': null
         });
      }
   }

   // remove a raw data
   async delete_cart(req, res, next) {
      const { id_user, id_prod } = req.body;
      try {
         await Cart.deleteOne({ id_user: id_user, id_prod: id_prod });
         res.send({ "msg": 1, 'result': "Delete cart success." });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'result': "Delete cart failed."
         });
      }
   }

   // only edit on cache, when payment or logout --> insert in DB
}

module.exports = new CartController
const PriceHis = require("../models/price_pro_history");
const Product = require("../models/product");

class ProdController {  

   // [POST] /users/register --> Create new user (call for manager)

   // find user by req.id --> if not exists --> pass else --> check type of vaccine in range of value --> oke? add
   async add_new_prod(req, res, next) {
      const { id, name, buy_limit, price, images } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const prod = await Product.findOne({ id: id });
      if (prod) {
            res.send({
               "msg": 3, 'product': prod
            });
         }
         try {
            const prod = await Product.create({ id, name, buy_limit, price, images });
            const prodPriceHis = await PriceHis.create({id, $push: { prices: price }, $push: { start_times: Date.now() }})
            res.send({ "msg": 1, 'product': prod });
         }
         catch (err) {
            res.status(401).send({
               "msg": 0, 'product': null
               // "error": { "code": 401, "message": "Registration failed." }
            });
         }
   }

   // update --> update image, update or the param
   async update_prod(req, res, next) {
      const { id, name, buy_limit, price, images } = req.body;
      try {
         const prod = await Product.findOne({
            id: id
         });
         if (prod && prod.price != price){
            const prodPriceHis = PriceHis.updateOne({
               id_prod: id
            }, {$push: { prices: price }, $push: { start_times: Date.now() }});
         }
         const prodUpdated = await Product.updateOne({ id: id}, {
            name, buy_limit, price, images
         });
         if (prodUpdated.modifiedCount === 1) {
            res.json({ "result": 1, "message": "Update product success" });
         }
         else {
            res.json({ "result": 0, "message": "Update product failed" });
         }
      } catch (error) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Server internal error. Update product failed."
            }
         });
      }
   }
   // view
   // get all info of a product (when view and add to new set of product)
   async view_prod(req, res, next){
      const id = req.body.id;
      try {
         const prod = await Product.findOne({
            id: id
         }); // ignore this info
         if (prod) {
            res.json({"msg": 1, "product": prod});
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

   // view all (limit per page)
   async view_all(req, res, next){
      const prods = await Product.findOne({}); // ignore this info
      if (prods) {
         res.json(prods);
      }
      else {
         res.status(404).send({
            "error": {
               "code": 404,
               "message": " User Not Found"
            }
         });
      }
   }

   // delete
   // check whether it in any set of product
   async delete_prod(req, res, next){
      const id = req.body.id;
      const prod = await Product.findOne({
         id: id
      }); // ignore this info
      if (prod) {
         res.json(prod);
      }
      else {
         res.status(404).send({
            "error": {
               "code": 404,
               "message": " User Not Found"
            }
         });
      }
   }
}

module.exports = ProdController
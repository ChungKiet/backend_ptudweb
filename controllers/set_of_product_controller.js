const SetOfProduct = require("../models/set_of_product");
const Product = require("../models/product");

class SetOfProdController {  
   async add_new_prod(req, res, next) {
      const { id, name, image, id_prods, buy_limit, buy_limit_prods, price, expire_at } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const setOfProds = await SetOfProduct.findOne({ id: id });
      if (setOfProds) {
            res.send({
               "msg": 3, 'set_of_prods': null
            });
         }
         try {
            const setOfProds = await SetOfProduct.create({id, name, image, id_prods, buy_limit, buy_limit_prods, price, expire_at });
            res.send({ "msg": 1, 'set_of_prods': setOfProds });
         }
         catch (err) {
            res.status(401).send({
               "msg": 0, 'set_of_prods': null
            });
         }
   }

   async update_product(req, res, next) {
      const {id, name, image, id_prods, buy_limit, buy_limit_prods,  price, expire_at} = req.body;
      try {
         const setOfProds = await SetOfProduct.updateOne({ id: id}, {
            name, image, id_prods, buy_limit, buy_limit_prods,
            price, expire_at
         });
         if (setOfProds.modifiedCount === 1) {
            res.json({ "result": 1, "message": "Update set of product success" });
         }
         else {
            res.json({ "result": 0, "message": "Update set of product failed" });
         }
      } catch (error) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Server internal error. Update set of product failed."
            }
         });
      }
   }

   async view_all_product(req, res, next) {
      try {
         const allOfSetOfProds = await SetOfProduct.find({}); // ignore this info
         let result = []
         if (allOfSetOfProds) {
            for (let i = 0; i < allOfSetOfProds.length; i++){
               const products = await Product.find({id : allOfSetOfProds[i].id_prods})
               result.push({"set_of_prod": allOfSetOfProds[i], "products": products})
            }
            res.json({"msg": 1, "all_of_et_of_prod": result});
         }
         else {
            res.status(404).send({
               "error": {
                  "code": 404,
                  "message": "Set of product not found"
               }
            });
         }
      } catch (error) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Set of product not found."
            }
         });
      }
   }

   async view_set_of_prod(req, res, next) {
      // get one set
      const id = req.body.id;
      try {
         const setOfProds = await SetOfProduct.findOne({
            id: id
         }); // ignore this info
         if (setOfProds) {
            const products = await Product.find({id : setOfProds.id_prods})
            res.json({"msg": 1, "set_of_prod": setOfProds, "products": products});
         }
         else {
            res.status(404).send({
               "error": {
                  "code": 404,
                  "message": " Set of product not found"
               }
            });
         }
      } catch (error) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Delete set of products failed."
            }
         });
      }
      // get all prod by id
   }

   async delete_set_of_prod(req, res, next) {
      const id = req.body.id;
      try {
         await SetOfProduct.deleteOne({ id: id });
         res.json({ "result": 1, "message": "Delete set of products successfully." })
      }
      catch (err) {
         res.status(500).send({
               "error": {
                  "result": 0,
                  "code": 500,
                  "message": "Delete set of products failed."
               }
         });
      }
   }
}

module.exports = SetOfProdController
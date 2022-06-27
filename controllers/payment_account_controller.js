const PaymentAccount = require("../models/payment_account");

class PaymentAccController {  

   async add_new_acc(req, res, next) {
      const { username, password, amount } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const payAcc = await PaymentAccount.findOne({ username });
      if (payAcc) {
            res.send({
               "msg": 3, 'payment_account': payAcc
            });
         }
         try {
            const payAcc = await PaymentAccount.create({ username, password, amount });
            res.send({ "msg": 1, 'payment_account': payAcc });
         }
         catch (err) {
            res.status(401).send({
               "msg": 0, 'payment_account': payAcc
            });
         }
   }

   async login(req, res, next){
      const { username, password} = req.body
      const user = await PaymentAccount.findOne({username: username})
      if (!user) {
         res.send({
            "isLogin": 2, "user": null
         });
      }
      else if (user.password === password) {
         res.send({
            "isLogin": 1, "user": user
         });
      }
      else {
         res.send({
            "isLogin": 3, "user": null
         });
      }
   }

   // update
   // check amount is gt 0 and update
   async update_payment(req, res, next){
      const { username, password, amount } = req.body;
      try {
         const user = await PaymentAccount.updateOne({ username: username}, {
            password, amount
         });
         if (user.modifiedCount === 1) {
            res.json({ "result": 1, "message": "Payment update Success" });
         }
         else {
            res.json({ "result": 0, "message": "Payment update Failed" });
         }
      }
      catch (err) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Server internal error. Payment update failed."
            }
         });
      }
   }

   // view
   // view name and amount
   async view_one_acc(req, res, next){
      const id = req.body.id;
      const user = await PaymentAccount.findOne({
         id: id
      }); // ignore this info
      if (user) {
         res.json({"username": user.username, "amount": user.amount});
      }
      else {
         res.status(404).send({
            "error": {
               "code": 404,
               "message": " Payment Account Not Found"
            }
         });
      }
   }

   // view all (limit per page)
   async view_all(req, res, next){
      const users = await PaymentAccount.find({}); // ignore this info
      if (users) {
         res.json(users);
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

module.exports = new PaymentAccController

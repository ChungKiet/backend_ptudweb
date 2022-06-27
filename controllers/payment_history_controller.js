const PaymentHis = require("../models/payment_history");

class PaymentHisController {  

   // [POST] /users/register --> Create new user (call for manager)
   async add_history(req, res, next) {
      const { id_user, day, amount, source } = req.body;
      try {
         const paymentHis = await PaymentHis.create({ id_user, day, amount, source });
         res.send({ "msg": 1, 'payment_his': paymentHis });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'payment_his': null
         });
      }
   }

   // view 
   async view_pay_his(req, res, next){
      const { id_user, day } = req.body;
      try {
         const paymentHis = await PaymentHis.findOne({ id_user: id_user, day: day});
         res.send({ "msg": 1, 'payment_his': paymentHis });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'payment_his': null
         });
      }
   }

   // view all of payment history of a user
   // (limit per page)
   // add "Xem thêm" btn
   async view_all(req, res, next){
      const { id_user } = req.body;
      try {
         const paymentHis = await PaymentHis.find({ id_user: id_user });
         res.send({ "msg": 1, 'payment_his': paymentHis });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'payment_his': null
         });
      }
   }
}

module.exports = new PaymentHisController
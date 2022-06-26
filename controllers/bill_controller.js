const Bill = require("../models/bill");

class BillController {  

   async add_bill(req, res, next) {
      const { id, id_buyer, amount, state } = req.body;
      const bill = await Bill.findOne({ id: id });
      if (bill) {
         res.send({
            "msg": 3, 'bill': null
         });
      }
      try {
         const bill = await Bill.create({ id, id_buyer, amount, state });
         res.send({ "msg": 1, 'bill': bill });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'bill': null
         });
      }
   }

   // update view
   async update_bill(req, res, next) {
      const { id, id_buyer, amount, state } = req.body;
      const bill = await Bill.findOne({ id: id });
      if (!bill) {
         res.send({
            "msg": 3, 'bill': null
         });
      }
      try {
         const bill = await Bill.updateOne({ id: id},{ id_buyer, amount, state });
         res.send({ "msg": 1, 'bill': bill });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'bill': null
         });
      }
   }

   // view bill
   async view_by_id(req, res, next) {
      const { id } = req.body;
      try {
         const bill = await Bill.findOne({ id: id });
         res.send({ "msg": 1, 'bill': bill });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'bill': null
         });
      }
   }

   // view all bill
   async view_all(req, res, next) {
      try {
         const bills = await Bill.find({});
         res.send({ "msg": 1, 'bills': bills });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'bills': null
         });
      }
   }
}

module.exports = BillController
const AccountState = require("../models/account_state");

class AccStateController {

   async add_account_state(req, res, next) {
      const { username, password, role } = req.body;
      const name = "DefaultName";
      const state = true;
      const acc_state = await AccountState.findOne({ username: username });
      if (acc_state) {
         res.send({
            "msg": 3, 'acc_state': null
         });
      }
      try {
         const acc_state = await AccountState.create({ username, name, password, role, state });
         res.send({ "msg": 1, 'acc_state': acc_state });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'acc_state': null
         });
      }
   }

   // update
   async update_state(req, res, next) {
      const { username, name, password, role, state } = req.body;
      const acc_state = await AccountState.findOne({ username: username });
      if (acc_state) {
         res.send({
            "msg": 3, 'acc_state': null
         });
      }
      try {
         const acc_state = await AccountState.create({ username, name, password, role, state });
         res.send({ "msg": 1, 'acc_state': acc_state });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'acc_state': null
         });
      }
   }

   // delete
   async delete_acc_state(req, res, next) {
      const username = req.body.username;
      try {
         await AccountState.deleteOne({ username: username });
         res.json({ "result": 1, "message": "Delete account state successfully." });
      }
      catch (err) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Delete account state failed."
            }
         });
      }
   }

   // read all account by state
   async get_acc_state(req, res, next) {
      const { state } = req.body;
      try {
         const acc_state = await AccountState.find({ state: state });
         res.send({ "msg": 1, 'acc_state': acc_state });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'acc_state': null
         });
      }
   }
}

module.exports = new AccStateController
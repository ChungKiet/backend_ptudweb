const mongoose = require('mongoose');
const validator = require('validator');

const movementHisSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   address: {
      type: String,
   },
   day: {
      type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
   },
   idOther: {
      type: String,
      required: true,
   },
});

const MovementHis = mongoose.model('MovementHis', movementHisSchema);

module.exports = MovementHis;


const VaccineHis = require("../models/vaccine_history");
const User = require("../models/user");

class VaccineHisController {  

   // [POST] /users/register --> Create new user (call for manager)

   // find user by req.id --> if not exists --> pass else --> check type of vaccine in range of value --> oke? add
   async add_history(req, res, next) {
      const { id, name, password, birthday, address, email, phone, min_exchange, quarantine_state, updated_state } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const userExists = await User.findOne({ username });
      if (userExists) {
            res.send({
               "msg": 3, 'user': null
               // "error": { "code": 409, "message": "Username already exists" }
            });
         }
         try {
            const user = await VaccineHis.create({id, name, password, birthday, address, email, phone, min_exchange, quarantine_state, updated_state });
            res.send({ "msg": 1, 'user': user });
         }
         catch (err) {
            res.status(401).send({
               "msg": 0, 'user': null
               // "error": { "code": 401, "message": "Registration failed." }
            });
         }
   }

   // add new record

   // update detail

   // view by id

}

module.exports = VaccineHisController
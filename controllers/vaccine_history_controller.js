const VaccineHis = require("../models/vaccine_history");
const User = require("../models/user");

class VaccineHisController {  

   // [POST] /vaccine-history/add-new-history --> Create new user (call for manager)

   // find user by req.id --> if not exists --> pass else --> check type of vaccine in range of value --> oke? add
   async add_history(req, res, next) {
      const { id, id_vaccine, type_of_vaccine, birthday, address, date_vac} = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const userExists = await User.findOne({ id: id });
      if (userExists) {
            res.send({
               "msg": 3, 'vaccineHis': null
               // "error": { "code": 409, "message": "Username already exists" }
            });
      }
      try {
         const vaccineHis = await VaccineHis.create({ id, id_vaccine, type_of_vaccine, birthday, address, date_vac});
         res.send({ "msg": 1, 'vaccineHis': vaccineHis });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'vaccineHis': null
            // "error": { "code": 401, "message": "Registration failed." }
         });
      }
   }

   // [GET] /vaccine-history/get-his-by-id
   async get_vaccine_history_by_id(req, res, next) {
      const { id } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const userExists = await User.findOne({ id: id });
      if (userExists) {
            res.send({
               "msg": 3, 'vaccineHis': null
               // "error": { "code": 409, "message": "Username already exists" }
            });
      }
      try {
         const vaccineHis = await VaccineHis.find({ id });
         res.send({ "msg": 1, 'vaccineHis': vaccineHis });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'vaccineHis': null
            // "error": { "code": 401, "message": "Registration failed." }
         });
      }
   }

}

module.exports = VaccineHisController
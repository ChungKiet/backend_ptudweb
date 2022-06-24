const TypeOfVaccine = require("../models/type_of_vaccine")

class TypeOfVaccineController {  

   // [POST] /vaccine-type/add-new-type
   async add_new_type(req, res, next) {
      const { id, name } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const vaccineType = await TypeOfVaccine.findOne({ id });
      if (vaccineType) {
         res.send({
            "msg": 3, 'vaccine': null
            // "error": { "code": 409, "message": "Username already exists" }
         });
      }
      try {
         const vaccineType = await TypeOfVaccine.create({id, name });
         res.send({ "msg": 1, 'vaccine': vaccineType });
      }
      catch (err) {
         res.status(401).send({
            "msg": 0, 'vaccine': null
         });
      }
   }

   // [GET] /vaccine-type/get-all-type
   async add_new_type(req, res, next) {
      const { id, name } = req.body;
      // console.log({ name, gender, birthday, email, username, password });
      const vaccineTypes = await TypeOfVaccine.find({});

      if (vaccineTypes) {
         res.send({ "msg": 1, 'vaccine-type': vaccineTypes });
      }
      else {
         res.status(401).send({
            "msg": 0, 'vaccine-type': null
         });
      }
   }
}

module.exports = TypeOfVaccineController
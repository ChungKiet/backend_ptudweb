const QuarantineLoc = mongoose.model('QuarantineLoc', quarantineLocationSChema);
class QuarantineLocController {  

   async add_history(req, res, next) {
      const { id, name, address, capacity, amount, state } = req.body;
      const quarantine_loc = await QuarantineLoc.findOne({ id: id });
      if (quarantine_loc) {
            res.send({
               "msg": 3, 'quarantine_loc': null
            });
         }
         try {
            const quarantine_loc = await QuarantineLoc.create({id, name, address, capacity, amount, state });
            res.send({ "msg": 1, 'quarantine_loc': quarantine_loc });
         }
         catch (err) {
            res.status(401).send({
               "msg": 0, 'quarantine_loc': null
            });
         }
   }

   // update loc
   async update_loc(req, res, next) {
      const {id, name, address, capacity, amount, state } = req.body;
      try {
         const quarantine_loc = await QuarantineLoc.updateOne({ id: id}, {
            name, address, capacity, amount, state
         });
         if (quarantine_loc.modifiedCount === 1) {
            res.json({ "result": 1, "message": "Update set of quarantine location success" });
         }
         else {
            res.json({ "result": 0, "message": "Update set of quarantine location failed" });
         }
      } catch (error) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Server internal error. Update set of quarantine location failed."
            }
         });
      }
   }

   async view_loc(req, res, next) {
      const id = req.body.id;
      try {
         const quarantine_loc = await QuarantineLoc.findOne({
            id: id
         }); // ignore this info
         if (quarantine_loc) {
            res.json(quarantine_loc);
         }
         else {
            res.status(404).send({
               "error": {
                  "code": 404,
                  "message": "Quarantine Location Not Found"
               }
            });
         }
      } catch (error) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Server internal error. Get quarantine location failed."
            }
         });
      }
   }
   // view all loc (limit per page)
   async view_all_loc(req, res, next){
      try {
         const quarantine_locs = await QuarantineLoc.find({}); // ignore this info
         if (quarantine_locs) {
            res.json(quarantine_locs);
         }
         else {
            res.status(404).send({
               "error": {
                  "code": 404,
                  "message": "Quarantine Location Not Found"
               }
            });
         }
      } catch (error) {
         res.status(500).send({
            "error": {
               "result": 0,
               "code": 500,
               "message": "Server internal error. Get quarantine location failed."
            }
         });
      }
   }
}

module.exports = QuarantineLocController

require("dotenv/config");
const mongoose = require("mongoose");

const connectionString = process.env.CONNECTION_STRING;

async function connect() {
   try {
      await mongoose.connect(connectionString, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      });
      console.log('Database connect successfully!!');

   } catch (err) {
      console.log('Database connect failue!!');
      console.error(err);
   }
}

module.exports = { connect };

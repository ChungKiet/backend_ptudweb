const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
   birthday: {
      type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
   },
   address: {
      type: String,
   },
   phone: {
      type: String,
      minlength: 10,
      maxlength: 11,
   },
   email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
         if (!validator.isEmail(value)) {
         throw new Error('Email is invalid');
         }
      },
   },
   min_exchange: {
      type: Number,
      default: 0,
   },
   quarantine_state: { // sử dụng udpatedAt để check time so với currentTime và check so với prefix
      type: Number, 
      required: false
   },
   updated_state : {
      type: Date, required: true, default: '2001-01-01T00:00:00.000Z'
   }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

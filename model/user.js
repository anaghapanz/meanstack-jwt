const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Register = new Schema({
  username: String,
  email: String,
  phone: Number,
  password: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("user", Register);
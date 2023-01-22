const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { required: true, type: String },
  email: { required: true, type: String },
  phone: { required: true, type: String },
  password: { required: true, type: String },

  loggedin: { required: true, type: Boolean, default: false },
  role: { required: true, type: String, default: "user" },
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;

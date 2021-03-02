const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: email,
    required: true,
  },
  password: {
    type: email,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

const mongoose = require("mongoose");

const OwnerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: email,
    required: true,
  },
  password: {
    type: password,
    required: true,
  },
  pgs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pg",
      index: true,
    },
  ],
});

const Owner = mongoose.model("Owner", OwnerSchema);
module.exports = Owner;

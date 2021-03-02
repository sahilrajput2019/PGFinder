const mongoose = require(mongoose);

const PgSchema = mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  ac: {
    type: Boolean,
    required: true,
  },
  food: {
    type: Boolean,
    required: true,
  },
  multipleBedSize: {
    type: Boolean,
    required: true,
  },
  timings: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
    },
    username: String,
  },
});

const Pg = mongoose.model("Pg", PgSchema);
module.exports = Pg;

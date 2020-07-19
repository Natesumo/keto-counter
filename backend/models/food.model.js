const mongoose = require("mongoose");
const User = require("./user.model");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  username: { type: String },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;

const mongoose = require("mongoose");
const User = require("./user.model");

const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    user: {
      type: Schema.Types.String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    carbs: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;

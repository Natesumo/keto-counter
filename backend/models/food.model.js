const mongoose = require("mongoose");
const User = require("./user.model");

const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
<<<<<<< HEAD
    user: {
      type: Schema.Types.String,
      required: true,
    },
=======
>>>>>>> parent of 57775aa... Frontend successfully talking to backend
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

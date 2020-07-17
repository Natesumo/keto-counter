const mongoose = require("mongoose");
const Food = require("./food.model");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  foods: [{ type: Schema.Types.ObjectId, ref: Food }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;

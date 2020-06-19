const router = require("express").Router();
const User = require("../models/user.model");
const Food = require("../models/food.model");

router.route("/").get((req, res) => {
  Food.find()
    .then((foods) => res.json(foods))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const calories = Number(req.body.calories);
  const carbs = Number(req.body.carbs);

  const newFood = new Food({
    name,
    calories,
    carb,
  });

  newFood
    .save()
    .then(() => res.json("Food added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

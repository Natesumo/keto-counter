const router = require("express").Router();
const User = require("../models/user.model");
const Food = require("../models/food.model");

router.route("/").get((req, res) => {
  Food.find()
    .then((foods) => res.json(foods))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const calories = req.body.calories;
  const carbs = req.body.carbs;

  const newFood = new Food({
    username,
    name,
    calories,
    carbs,
  });

  newFood
    .save()
    .then((res) => {
      User.findOne({ username: newFood.username }, (err, user) => {
        if (user) {
          user.foods.push(newFood);
          user.save();
        }
      });
    })
    .then(() => res.json("Food added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:name").get((req, res) => {
  Food.findOne({ name: req.params.name })
    .then((food) => res.json(food))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:name").post((req, res) => {
  Food.deleteOne({ name: req.params.name })
    .then(() => res.json("Food Deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:name").post((req, res) => {
  Food.findOne({ name: req.params.name })
    .then((food) => {
      food.name = req.body.name;
      food.calories = Number(req.body.calories);
      food.carbs = Number(req.body.carbs);

      food
        .save()
        .then(() => res.json("Food Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

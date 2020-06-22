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
    carbs,
  });

  newFood
    .save()
    .then(() => res.json("Food added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Food.findById(req.params.id)
    .then((food) => res.json(food))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Food.findByIdAndDelete(req.params.id)
    .then(() => res.json("Food Deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Food.findById(req.params.id)
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

const router = require("express").Router();
const User = require("../models/user.model");
const Food = require("../models/food.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router
  .route("/:username")
  .get(async (req, res) => {
    try {
      username = req.username;
      console.log(User.findOne(username, username));
      // console.log(req.params.id);
      // console.log(User.findById(req.params.userId));
      let user = await User.findOne(username, username).populate("foods");
      if (!user) {
        return res.status(400).json({
          error: "User not Found.",
        });
      }
      return res.status(200).json(user.foods);
    } catch (err) {
      console.error(err);
    }
    return res.json({ ObjectId: ObjectId });
    // console.log(res.json({ userId: userId }));
  })
  .post(async (req, res) => {
    username = req.username;
    const food = new Food(req.body);
    const user = await User.findOne(username, username);
    try {
      food.user = user;
      await food.save();
      user.foods.push(food);
      await user.save();
      return res.status(200).json({
        message: "Food was Created.",
      });
    } catch (err) {
      console.log(err);
    }
  });

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

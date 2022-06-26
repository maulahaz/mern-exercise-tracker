const router = require("express").Router();
let User = require("../models/UserModel");

router.route("/").get(async (req, res) => {
  // User.findAll()
  //   .then((users) => res.json(users))
  //   .catch((err) => res.status(400).json("Error: " + err));
  try {
    const response = await User.find();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
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

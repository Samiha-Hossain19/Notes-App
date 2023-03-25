const router = require("express").Router();

//Register
router.post("/register", (req, res) => {
  res.json({ msg: "Register a User" });
});

//Login
router.post("/login", (req, res) => {
  res.json({ msg: "Log a User" });
});

module.exports = router;

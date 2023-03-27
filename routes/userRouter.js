const router = require("express").Router();
const useCtrl = require("../controllers/userCtrl");

//Register
router.post("/reg", useCtrl.registerUser);

//Login
router.post("/login", useCtrl.loginUser);

module.exports = router;

const router = require("express").Router();
const useCtrl = require("../controllers/userCtrl");
const auth = require("../middlewares/auth");

//Register
router.post("/reg", useCtrl.registerUser);

//Login
router.post("/login", useCtrl.loginUser);

//verify
router.get("/verify", useCtrl.verifiedToken);

module.exports = router;

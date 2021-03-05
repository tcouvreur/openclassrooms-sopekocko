const router = require("express").Router();
const userController = require("../controllers/user");

router.get("/signup", userController.signUp);

module.exports = router;
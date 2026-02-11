const { Router } = require("express");
const userController = require("../controller/user.controller.js");

const router = Router();

router
    .route("/")
    .get(userController.findUser)
    .post(userController.registerUser);

module.exports = router;
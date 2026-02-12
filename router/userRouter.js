const express = require("express");
const { createUser, getUsers } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/", createUser); // create user
userRouter.get("/", getUsers); // get user

module.exports = { userRouter };
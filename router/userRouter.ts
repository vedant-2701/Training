import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", createUser); // create user
userRouter.get("/", getUsers); // get user

export { userRouter };
import express from "express";
import { userController } from "../factory/userFactory.js";
import { errorHandler } from "../factory/errorFactory.js";

const userRouter = express.Router();

userRouter.post("/", errorHandler.controllerWrapper(userController.createUser)); // create user
userRouter.get("/", errorHandler.controllerWrapper(userController.getAllUsers)); // get user

export { userRouter };
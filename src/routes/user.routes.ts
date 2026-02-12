import { Router } from "express";
import { UserController } from "../controller/user.controller.js";
import { UserService } from "../services/user.service.js";
import notification from "../config/notifier.js";
import User from "../models/user.js";

const router: Router = Router();

const userService = new UserService(notification, User);

const userController = new UserController(userService)
router
    .route("/")
    .get(userController.findUser)
    .post(userController.registerUser);

export default router;
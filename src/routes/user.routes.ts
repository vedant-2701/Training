import { Router } from "express";
import { userFactory } from "../factories/ControllerFactory.js";

const router: Router = Router();

const userController = userFactory.getController();

router
    .route("/")
    .get(userController.findUser)
    .post(userController.registerUser);

export default router;
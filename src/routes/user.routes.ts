import { Router } from "express";
import { userFactory } from "../factories/ControllerFactory.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { createUserSchema } from "../schemas/user.schema.js";

const router: Router = Router();

const userController = userFactory.getController();

router
    .route("/")
    .get(userController.findUser)
    .post(
        validateRequest(createUserSchema),
        userController.registerUser
    );

export default router;
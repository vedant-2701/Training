import { Router } from "express";
import { findUser, registerUser } from "../controller/user.controller.js";

const router: Router = Router();

router
    .route("/")
    .get(findUser)
    .post(registerUser);

export default router;
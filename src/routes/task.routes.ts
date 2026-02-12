import { Router } from "express";
import { taskFactory } from "../factories/ControllerFactory.js";

const router: Router = Router();

const taskController = taskFactory.getController();

router
    .route("/")
    .get(taskController.getTasks)
    .post(taskController.saveTask);

router
    .route("/:id")
    .put(taskController.updateTask)
    .delete(taskController.destroyTask);

export default router;

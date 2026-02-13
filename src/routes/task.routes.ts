import { Router } from "express";
import { taskFactory } from "../factories/ControllerFactory.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema.js";

const router: Router = Router();

const taskController = taskFactory.getController();

router
    .route("/")
    .get(taskController.getTasks)
    .post(
        validateRequest(createTaskSchema),
        taskController.saveTask
    );

router
    .route("/:id")
    .put(
        validateRequest(updateTaskSchema),
        taskController.updateTask
    )
    .delete(taskController.destroyTask);

export default router;

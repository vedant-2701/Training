import { Router } from "express";
import { TaskController } from "../controller/task.controller.js";
import { TaskService } from "../services/task.service.js";
import Task from "../models/task.js";
import notification from "../config/notifier.js";

const router: Router = Router();

const taskService = new TaskService(notification, Task);

const taskController = new TaskController(taskService);
router
    .route("/")
    .get(taskController.getTasks)
    .post(taskController.saveTask);

router
    .route("/:id")
    .put(taskController.updateTask)
    .delete(taskController.destroyTask);

export default router;

import express from "express";
import { taskController } from "../factory/taskFactory.js";
import { bodyErrorHandler, errorHandler } from "../factory/errorFactory.js";

const taskRouter = express.Router();

taskRouter.post("/", bodyErrorHandler.validate, errorHandler.controllerWrapper(taskController.createTask));
taskRouter.get("/", errorHandler.controllerWrapper(taskController.getAllTasks));
taskRouter.put("/:id", bodyErrorHandler.validate, errorHandler.controllerWrapper(taskController.updateTask));
taskRouter.delete("/:id", errorHandler.controllerWrapper(taskController.deleteTask));
taskRouter.get("/report", errorHandler.controllerWrapper(taskController.generateReport));

export { taskRouter };
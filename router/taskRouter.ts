import express from "express";
import { createTask, getTasks, updateTask, deleteTask } from "../controllers/taskController.js";
import { taskReport } from "../controllers/reportController.js";

const taskRouter = express.Router();

taskRouter.post("/", createTask); // create task
taskRouter.get("/", getTasks); // get all tasks
taskRouter.put("/:id", updateTask); // update task
taskRouter.delete("/:id", deleteTask); // delete task
taskRouter.get("/report", taskReport) // report on all tasks

export { taskRouter };
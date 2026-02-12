const express = require("express");
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");
const { taskReport } = require("../controllers/reportController");

const taskRouter = express.Router();

taskRouter.post("/", createTask); // create task
taskRouter.get("/", getTasks); // get all tasks
taskRouter.put("/:id", updateTask); // update task
taskRouter.delete("/:id", deleteTask); // delete task
taskRouter.get("/report", taskReport) // report on all tasks

module.exports = { taskRouter };
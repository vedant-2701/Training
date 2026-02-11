const express = require("express");
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");
const { taskReport } = require("../controllers/reportController");

const taskRouter = express.Router();

taskRouter.post("/", createTask);
taskRouter.get("/", getTasks);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);
taskRouter.get("/report", taskReport)

module.exports = { taskRouter };
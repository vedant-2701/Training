const { Task } = require("../model/taskSchema");
const { sendEmail } = require("../utils/emailUtil");
const { logActivity } = require("../utils/logUtil");
const { findTask } = require("../utils/taskUtil");

const createTask = async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).send("Title is required");
    }

    const task = new Task({
      ...req.body,
      status: "OPEN",
      createdAt: new Date(),
    });

    await task.save();

    logActivity("Task created");

    if (task.assignedTo) {
      sendEmail(task.assignedTo, "Task Assigned");
    }

    res.send(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const getTasks = async (req, res) => {
  
  const tasks = await findTask();

  res.send(tasks);
}

const updateTask = async (req, res) => {

  try {
    const task = await findTask(req.params.id);

    if (!task) {
      return res.status(404).send("Task not found");
    }

    logActivity("Task Found");

    if (req.body){
      task.status = req.body.status || task.status;
      task.title = req.body.title || task.title;

      await task.save();

      logActivity("Task updated");
    }

    res.send(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    logActivity("Task deleted");

    res.send({ message: "Deleted" });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = { createTask, getTasks, updateTask, deleteTask };
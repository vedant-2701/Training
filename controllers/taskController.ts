import { Task } from "../model/taskSchema.js";
import { sendEmail } from "../utils/emailUtil.js";
import { logActivity } from "../utils/logUtil.js";
import { findTask } from "../utils/taskUtil.js";
import type { Request, Response } from "express";

const createTask = async (req : Request, res : Response) => {
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
  } catch (err : any) {
    res.status(500).send(err.message);
  }
}

const getTasks = async (req : Request, res : Response) => {
  
  const tasks = await findTask("");

  res.send(tasks);
}

const updateTask = async (req : Request, res : Response) => {

  try {
    const task = await findTask(req.params.id ?? "");

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
  } catch (err : any) {
    res.status(500).send(err.message);
  }
}

const deleteTask = async (req : Request, res : Response) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    logActivity("Task deleted");

    res.send({ message: "Deleted" });
  } catch (err : any) {
    res.status(500).send(err.message);
  }
}

export { createTask, getTasks, updateTask, deleteTask };
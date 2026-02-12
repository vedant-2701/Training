import type {Request, Response} from "express";
import sendEmail from '../utils/email';
import logActivity from'../utils/log';
import Task from'../model/Task';
import User from '../model/User';

const createTask= async (req : Request, res : Response) => {
  try {
    if (!req.body.title) {
      return res.status(400).send("Title is required");
    }
    const user=await User.findOne({email:req.body.assignedTo});
    if(!user){
      return res.status(400).send("Assigned user not found");
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
};

const deleteTask=async (req : Request, res : Response) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    logActivity("Task deleted");

    res.send({ message: "Deleted" });
  } catch (err : any) {
    res.status(500).send(err.message);
  }
};

const updateTask =  async (req : Request, res : Response) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).send("Task not found");
    }

    task.status = req.body.status || task.status;
    task.title = req.body.title || task.title;

    await task.save();

    logActivity("Task updated");

    res.send(task);
  } catch (err : any) {
    res.status(500).send(err.message);
  }
};

const getTasks =  async (req : Request, res : Response) => {
  const tasks = await Task.find();
  res.send(tasks);
};
export {createTask,deleteTask,updateTask,getTasks};
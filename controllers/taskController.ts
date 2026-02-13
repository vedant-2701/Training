import type { Request, Response } from "express";
import { taskService } from "../repository/task/taskServiceContainer.js";

const createTask = async (req : Request, res : Response) => {
  const task = await taskService.createTask(req.body);
  res.send(task);
}

const getTasks = async (req : Request, res : Response) => {
  const tasks = await taskService.getAllTasks();
  res.send(tasks);
}

const updateTask = async (req : Request, res : Response) => {
  const data = {
    ...req.body,
    id : req.params.id
  }
  const task = await taskService.updateTask(data);
  res.send(task);
}

const deleteTask = async (req : Request, res : Response) => {
  const task = await taskService.deleteTask(req.params.id);
  res.send(task);
}

export { createTask, getTasks, updateTask, deleteTask };
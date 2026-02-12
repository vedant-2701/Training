import { mongoTaskModules } from "../repository/task/taskMongoModules.js";
import { taskUtil } from "../utils/taskUtil.js";
import type { Request, Response } from "express";

const mongoTaskFunctions = new mongoTaskModules()
const mongoTaskUtil = new taskUtil(mongoTaskFunctions);

const createTask = async (req : Request, res : Response) => {
  const task = await mongoTaskUtil.createTask(req.body);
  res.send(task);
}

const getTasks = async (req : Request, res : Response) => {
  const tasks = await mongoTaskUtil.getAllTasks();
  res.send(tasks);
}

const updateTask = async (req : Request, res : Response) => {
  const data = {
    ...req.body,
    id : req.params.id
  }
  const task = await mongoTaskUtil.updateTask(data);
  res.send(task);
}

const deleteTask = async (req : Request, res : Response) => {
  const task = await mongoTaskUtil.deleteTask(req.params.id);
  res.send(task);
}

export { createTask, getTasks, updateTask, deleteTask };
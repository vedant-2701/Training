import { Task } from "../model/taskSchema.js";
import type { Request, Response } from "express";

const taskReport = async (req : Request , res : Response ) => {
  const tasks = await Task.find();

  const report = {
    total: tasks.length,
    open: tasks.filter((t) => t.status === "OPEN").length,
    closed: tasks.filter((t) => t.status === "CLOSED").length,
  };

  res.send(report);
}

export { taskReport };
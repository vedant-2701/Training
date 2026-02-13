import type { Request, Response } from "express";
import { taskService } from "../repository/task/taskServiceContainer.js";

const taskReport = async (req : Request , res : Response ) => {
  const report = await taskService.generateReport();
  res.send(report);
}

export { taskReport };
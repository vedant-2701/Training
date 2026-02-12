import type { Request, Response } from "express";
import { taskUtil } from "../utils/taskUtil.js";
import { mongoTaskModules } from "../repository/task/taskMongoModules.js";

const mongoTaskFunctions = new mongoTaskModules();
const mongoTaskUtil = new taskUtil(mongoTaskFunctions);

const taskReport = async (req : Request , res : Response ) => {
  const report = await mongoTaskUtil.generateReport();
  res.send(report);
}

export { taskReport };
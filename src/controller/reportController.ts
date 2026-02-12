import type {Request, Response} from "express";

import Task from'../model/Task';

export default class reportController{
taskReport= async (req : Request, res : Response) => {
  const tasks = await Task.find();

  const report = {
    total: tasks.length,
    open: tasks.filter((t) => t.status === "OPEN").length,
    closed: tasks.filter((t) => t.status === "CLOSED").length,
  };

  res.send(report);
};
}

//export default taskReport;

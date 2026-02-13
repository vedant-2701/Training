import { taskServices } from "../services/taskServices.js";
import type { Request, Response } from "express";

class taskControllerClass{
    constructor (private taskServices : taskServices){}

    createTask = async ( req : Request, res : Response ) => {
        const task = await this.taskServices.createTask(req.body);
        res.send(task);
    }

    getAllTasks = async (req : Request, res : Response) => {
        const tasks = await this.taskServices.getAllTasks();
        res.send(tasks);
    }

    updateTask = async ( req : Request, res : Response ) => {
        const task = await this.taskServices.updateTask(req.body);
        res.send(task);
    }

    deleteTask = async (req : Request, res : Response) => {
        console.log("Controller hit");
        const task = await this.taskServices.deleteTask(req.params.id);
        res.send(task);
    }

    generateReport = async (req : Request, res : Response) => {
        const report = await this.taskServices.generateReport();
        res.send(report);
    }
}

export { taskControllerClass };
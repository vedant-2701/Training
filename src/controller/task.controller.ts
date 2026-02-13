import type { Request, Response } from "express";
import type { TaskInterface, PartialTaskInterface } from "../models/task.js";
import { wrapAsync } from "../utils/wrapAsync.js";
import type { TaskServiceInterface } from "../services/interfaces/TaskServiceInterface.js";

export class TaskController {

    constructor(private taskService: TaskServiceInterface) { }

    getTasks = wrapAsync(async (req: Request, res: Response) => {
        const tasks: TaskInterface[] = await this.taskService.getAllTasks();
        res.status(200).send(tasks);
    });

    saveTask = wrapAsync(async (req: Request, res: Response) => {
        if (!req.body.title) {
            return res.status(400).send("Title is required");
        }
    
        const taskData: PartialTaskInterface = req.body;
    
        const task: TaskInterface = await this.taskService.createTask(taskData);
    
        res.status(201).send(task);
    });
    
    updateTask = wrapAsync(async (req: Request, res: Response) => {
        const id: string = req.params.id as string;
        const taskData: PartialTaskInterface = req.body;
    
        const task: TaskInterface | null = await this.taskService.updateTask(id, taskData);
    
        res.status(200).send(task);
    });
    
    destroyTask = wrapAsync(async (req: Request, res: Response) => {
        const id: string = req.params.id as string;
    
        await this.taskService.deleteTask(id);
    
        res.status(200).send({ message: "Deleted" });
    });
}



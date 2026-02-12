import { taskService } from "../services/index.js";
import type { Request, Response } from "express";
import type { TaskInterface, PartialTaskInterface } from "../models/task.js";
import { wrapAsync } from "../utils/wrapAsync.js";

export const getTasks = wrapAsync(async (req: Request, res: Response) => {
    const tasks: TaskInterface[] = await taskService.findAll();
    res.status(201).send(tasks);
});

export const saveTask = wrapAsync(async (req: Request, res: Response) => {
    if (!req.body.title) {
        return res.status(400).send("Title is required");
    }

    const taskData: PartialTaskInterface = req.body;

    const task: TaskInterface = await taskService.create(taskData);

    res.status(201).send(task);
});

export const updateTask = wrapAsync(async (req: Request, res: Response) => {
    const id: string = req.params.id as string;
    const taskData: PartialTaskInterface = req.body;

    const task: TaskInterface | null = await taskService.update(id, taskData);

    res.status(200).send(task);
});

export const destroyTask = wrapAsync(async (req: Request, res: Response) => {
    const id: string = req.params.id as string;

    await taskService.delete(id);

    res.status(200).send({ message: "Deleted" });
});

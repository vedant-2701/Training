import { wrapAsync } from "../utils/wrapAsync.js";
import type { Request, Response } from "express";
import type { TaskInterface } from "../models/task.js";
import type { TaskServiceInterface } from "../services/interfaces/TaskServiceInterface.js";
import type { CreateTaskDTO, TaskResponseDTO, UpdateTaskDTO } from "../dtos/task.dto.js";
import { TaskMapper } from "../mappers/task.mapper.js";

export class TaskController {

    constructor(private taskService: TaskServiceInterface) { }

    getTasks = wrapAsync(async (req: Request, res: Response) => {
        const tasks: TaskInterface[] = await this.taskService.getAllTasks();

        const response: TaskResponseDTO[] = TaskMapper.toDTOs(tasks);
        res.status(200).send(response);
    });

    saveTask = wrapAsync(async (req: Request, res: Response) => {    
        const taskData: CreateTaskDTO = req.body;
    
        const task = await this.taskService.createTask(taskData);

        const response: TaskResponseDTO = TaskMapper.toDTO(task);
    
        res.status(201).send(response);
    });
    
    updateTask = wrapAsync(async (req: Request, res: Response) => {
        const id: string = req.params.id as string;
        const taskData: UpdateTaskDTO = req.body;
        
        const task = await this.taskService.updateTask(id, taskData);

        if (!task) return res.status(404).send({ message: "Task not found" });

        const response: TaskResponseDTO = TaskMapper.toDTO(task);
        res.status(200).send(response);
    });
    
    destroyTask = wrapAsync(async (req: Request, res: Response) => {
        const id: string = req.params.id as string;
    
        await this.taskService.deleteTask(id);
    
        res.status(200).send({ message: "Deleted" });
    });
}



import Task from "../models/task.js";
import { logActivity } from "../utils/log.js";
import { CustomError } from "../utils/CustomError.js";
import { BaseService } from "./base.service.js";
import type { TaskInterface, PartialTaskInterface } from "../models/task.js";
import type { Notification } from "../types/notification.js";

export class TaskService extends BaseService<TaskInterface> {
    private notification: Notification

    constructor(notification: Notification) {
        super(Task);
        this.notification = notification;
    }

    async findAll (): Promise<TaskInterface[]> {
        return await Task.find();
    }

    async create (taskData: PartialTaskInterface): Promise<TaskInterface> {
        const data = {
            ...taskData,
            status: "OPEN" as const,
            createdAt: new Date(),
        }
        const task = await super.create(data as unknown as PartialTaskInterface);

        logActivity("Task created");

        if (task.assignedTo) {
            this.notification.send(task.assignedTo, "Task Assigned");
        }

        return task;
    }

    async update (id: string, taskData: PartialTaskInterface): Promise<TaskInterface | null> {
        const task = await super.update(id, taskData);
        
        if (!task) {
            throw new CustomError("Task not found", 404);
        }

        logActivity("Task updated");

        return task;
    }

    async delete (id: string): Promise<TaskInterface | null> {
        const task = await super.delete(id);

        if(!task) {
            throw new CustomError("Task doesn't exist", 404);
        }
        
        logActivity("Task deleted");

        return task;
    }
}
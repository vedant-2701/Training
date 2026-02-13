import { logActivity } from "../../utils/log.js";
import { CustomError } from "../../utils/CustomError.js";
import notification from "../../config/notifier.js";
import type { TaskInterface, PartialTaskInterface } from "../../models/task.js";
import type { TaskRepositoryInterface } from "../../repositories/interfaces/TaskRepositoryInterface.js"
import type { TaskServiceInterface } from "../interfaces/TaskServiceInterface.js";

export class TaskService implements TaskServiceInterface {
    constructor(
        private repository: TaskRepositoryInterface
    ) { }

    async getAllTasks(): Promise<TaskInterface[]> {
        return await this.repository.findAll();
    }

    async createTask(taskData: PartialTaskInterface): Promise<TaskInterface> {
        const task = await this.repository.create(taskData);

        logActivity("Task created");

        if (task.assignedTo) {
            notification.send(task.assignedTo, "Task Assigned");
        }

        return task;
    }

    async updateTask(id: string, taskData: PartialTaskInterface): Promise<TaskInterface | null> {
        const updatedTask = await this.repository.update(id, taskData);
        
        if (!updatedTask) {
            throw new CustomError("Task not found", 404);
        }

        logActivity("Task updated");

        return updatedTask;
    }

    async deleteTask(id: string): Promise<TaskInterface | null> {
        const task = await this.repository.delete(id);

        if(!task) {
            throw new CustomError("Task doesn't exist", 404);
        }
        
        logActivity("Task deleted");

        return task;
    }
}
import type { TaskInterface, PartialTaskInterface } from "../../models/task.js";

export interface TaskServiceInterface {
    getAllTasks(): Promise<TaskInterface[]>;
    createTask(taskData: PartialTaskInterface): Promise<TaskInterface>;
    updateTask(id: string, taskData: PartialTaskInterface): Promise<TaskInterface | null>;
    deleteTask(id: string): Promise<TaskInterface | null>;
}
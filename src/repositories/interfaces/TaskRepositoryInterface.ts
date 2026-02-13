import type { TaskInterface, PartialTaskInterface } from "../../models/task.js";

export interface TaskRepositoryInterface {
    findAll(): Promise<TaskInterface[]>;
    create(data: PartialTaskInterface): Promise<TaskInterface>;
    findById(id: string): Promise<TaskInterface | null>;
    update(id: string, data: PartialTaskInterface): Promise<TaskInterface | null>;
    delete(id: string): Promise<TaskInterface | null>;
}
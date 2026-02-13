import type { Model } from "mongoose";
import type { TaskInterface, PartialTaskInterface } from "../../models/task.js";
import type { TaskRepositoryInterface } from "../interfaces/TaskRepositoryInterface.js";

export class TaskRepository implements TaskRepositoryInterface {

    constructor(private taskModel: Model<TaskInterface>) {}

    async findAll(): Promise<TaskInterface[]> {
        return await this.taskModel.find();
    }

    async findById(id: string): Promise<TaskInterface | null> {
        return await this.taskModel.findById(id);
    }

    async create(data: PartialTaskInterface): Promise<TaskInterface> {
        const task = new this.taskModel({
            ...data,
            status: "OPEN",
            createdAt: new Date(),
        });
        return await task.save();
    }

    async update(id: string, data: PartialTaskInterface): Promise<TaskInterface | null> {
        const task = await this.taskModel.findById(id);

        if (!task) return null;

        task.status = data.status || task.status;
        task.title = data.title || task.title;

        return await task.save();
    }

    async delete(id: string): Promise<TaskInterface | null> {
        const result = await this.taskModel.findByIdAndDelete(id);

        if(!result) return null;
        
        return result;
    }
}
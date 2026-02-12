import { Model, Document } from "mongoose";
import type { QueryFilter } from "mongoose";

export class BaseService<T extends Document> {
    constructor(protected readonly model: Model<T>) {}

    async findAll(filter: QueryFilter<T> = {}): Promise<T[]> {
        return await this.model.find(filter);
    }

    async findById(id: string): Promise<T | null> {
        return await this.model.findById(id);
    }

    async create(data: Partial<T>): Promise<T> {
        return await this.model.create(data);
    }

    async update(id: string, data: Partial<T>): Promise<T | null> {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<T | null> {
        return await this.model.findByIdAndDelete(id);
    }
}

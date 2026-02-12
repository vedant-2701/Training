import { Task } from "../../model/taskSchema.js";
import type { baseTask, updateBaseTask } from "./baseTask.js";
import { taskAbstractInterface } from "./taskFunctionsAbstractClass.js";

class mongoTaskModules extends taskAbstractInterface{
    async create (data : baseTask) : Promise<baseTask> {
        const task = new Task({
            ...data,
            status : "OPEN",
            createdAt : new Date()
        });
        await task.save();

        return task.toObject();
    }

    async getAll() : Promise <baseTask[]> {
        return await Task.find();
    }

    async update( data : updateBaseTask ) : Promise <baseTask> {
        const task = await Task.findById(data.id);

        if(task != null){
            task.status = data.status ?? task.status;
            task.description = data.description ?? task.description;
            task.assignedTo = data.assignedTo ?? task.assignedTo;

            await task.save();

            return task.toObject();
        }

        return <baseTask> {};
    }

    async delete (id : string | string[] | undefined) : Promise <baseTask> {
        const task = await Task.findByIdAndDelete(id);

        return task ?? <baseTask> {};
    }
}

export { mongoTaskModules }
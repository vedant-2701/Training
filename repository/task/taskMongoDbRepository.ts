import { Task } from "../../model/taskSchema.js";
import type { baseTask, updateBaseTask } from "./baseTask.js";
import { taskGeneralMethodsClass } from "./taskGeneralMethodsClass.js";

class mongoDbTaskRepository extends taskGeneralMethodsClass{
    create = async (data : baseTask) : Promise<baseTask> => {
        console.log("Creator hit")
        const task = new Task({
            ...data,
            status : "OPEN",
            createdAt : new Date()
        });
        await task.save();

        return task.toObject();
    }

    getAll = async () : Promise <baseTask[]> => {    
        return await Task.find();
    }

    update = async ( data : updateBaseTask ) : Promise <baseTask> => {
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

    delete = async (id : string | string[] | undefined) : Promise <baseTask> => {
        const task = await Task.findByIdAndDelete(id);
        return task ?? <baseTask> {};
    }

    generateReport = async (): Promise<Object> => {
        const tasks = await Task.find();
        const data = {
            total : tasks.length,
            open : tasks.filter((t) => t.status === "OPEN").length,
            closed : tasks.filter((t) => t.status === "CLOSED").length
        }
        return data;
    }
}

export { mongoDbTaskRepository }
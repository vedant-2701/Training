import type { baseTask, updateBaseTask } from "../repository/task/baseTask.js";
import type { taskGeneralMethodsClass } from "../repository/task/taskGeneralMethodsClass.js";
import { email } from "../utils/emailUtil.js";
import { appError } from "../utils/errorUtil.js";
import { logActivity } from "../utils/logUtil.js";

class taskServices {
    constructor ( private taskRespository : taskGeneralMethodsClass ) {}

    createTask = async (data : baseTask) => {

        if(!data.title){
            throw new appError(404, "Task title is required");
        }

        const task = await this.taskRespository.create(data);

        if (!task){
            throw new appError(500, "Failed to create a new task");
        }

        if(task.assignedTo){
            email.send(task.assignedTo, `A new task has been provided to you.`);
        }

        logActivity.log("New task created");

        return task;
    }

    getAllTasks = async () => {
        const tasks = await this.taskRespository.getAll();

        logActivity.log("All Tasks Fetched");

        return tasks;
    }

    updateTask = async (data : updateBaseTask) => {
        const task = await this.taskRespository.update(data);

        if(task.assignedTo){
            email.send(task.assignedTo, `The task assigned to you with the title ${task.title} has been updated`);
        }

        logActivity.log(`${task.title} Task Deleted`);

        return task;
    }

    deleteTask = async (id : string | string[] | undefined) => {
        console.log("Service hit");
        if(!id){
            throw new appError(400, "Please provide a task id")
        }

        const task = await this.taskRespository.delete(id)

        if(task.assignedTo){
            email.send(task.assignedTo, `The task assigned to you with the title ${task.title} has been deleted`);
        }

        logActivity.log(`${task.title} Task Deleted`);

        return task;
    }

    generateReport = async () => {
        const report = await this.taskRespository.generateReport();

        logActivity.log("Task Report Generated");

        return report;
    }
}

export { taskServices };
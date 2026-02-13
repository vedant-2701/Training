import { logActivity, logError } from "../../utils/logUtil.js";
import { taskAbstractInterface } from "./taskFunctionsAbstractClass.js";
import type { baseTask, updateBaseTask } from "./baseTask.js";
import { email } from "../../utils/emailUtil.js";

class taskServiceClass{
    constructor (private taskModules : taskAbstractInterface){}

    async createTask ( data : baseTask ) {
        try{
            const task = await this.taskModules.create(data);

            logActivity.log("New Task Created");

            if(task.assignedTo){
                email.send(task.assignedTo, `You have been assigned a new task with the id : ${task._id}`)
            };

            return task;
        }catch (err : any){
            logError.log(`Error while creating Task ${err}`);
        }
    }

    async getAllTasks (){
        try{
            const tasks = await this.taskModules.getAll();
            logActivity.log("All Tasks Fetched");
            return tasks;
        }catch (err : any){
            logError.log(`Error while fetching all the tasks ${err}`);
        }
    }

    async updateTask ( data : updateBaseTask ) {
        try{
            const task = await this.taskModules.update(data);

            if (task.assignedTo){
                email.send(task.assignedTo, `Your task with id : ${task._id} has been updated`);
            }

            logActivity.log("Task updated");

            return task;
        }catch (err : any){
            logError.log(`Error while updating task ${err}`);
        }
    }

    async deleteTask(id : string | string[] | undefined) {
        try{
            const task = await this.taskModules.delete(id);

            if(task){
                logActivity.log("Task Deleted");
            }else{
                logActivity.log("No Task Found to delete");
            }

            return task;
        }catch (err) {
            logError.log(`Error while deleting task ${err}`);
        }
    }

    async generateReport (){
        try{
            const tasks = await this.taskModules.getAll();

            const report = {
                total : tasks.length,
                open : tasks.filter((t) => t.status === "OPEN").length,
                closed : tasks.filter((t) => t.status === "CLOSED").length
            }

            logActivity.log("Report Generated");

            return report;
        }catch (err : any){
            logError.log(`Error while generating report ${err}`);
        }
    }
}

export { taskServiceClass };
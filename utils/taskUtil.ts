import { logActivity } from "./logUtil.js";
import { taskAbstractInterface } from "../repository/task/taskFunctionsAbstractClass.js";
import type { baseTask, updateBaseTask } from "../repository/task/baseTask.js";
import { sendEmail } from "./emailUtil.js";

class taskUtil{
    constructor (private taskModules : taskAbstractInterface){}

    async createTask ( data : baseTask ) {
        try{
            const task = await this.taskModules.create(data);

            logActivity("New Task Created");

            if(task.assignedTo){
                sendEmail(task.assignedTo, `You have been assigned a new task with the id : ${task._id}`)
            };

            return task;
        }catch (err : any){
            logActivity(`Error while creating Task ${err}`);
        }
    }

    async getAllTasks (){
        try{
            const tasks = await this.taskModules.getAll();
            logActivity("All Tasks Fetched");
            return tasks;
        }catch (err : any){
            logActivity(`Error while fetching all the tasks ${err}`);
        }
    }

    async updateTask ( data : updateBaseTask ) {
        try{
            const task = await this.taskModules.update(data);

            if (task.assignedTo){
                sendEmail(task.assignedTo, `Your task with id : ${task._id} has been updated`);
            }

            logActivity("Task updated");

            return task;
        }catch (err : any){
            logActivity(`Error while updating task ${err}`);
        }
    }

    async deleteTask(id : string | string[] | undefined) {
        try{
            const task = await this.taskModules.delete(id);

            if(task){
                logActivity("Task Deleted");
            }else{
                logActivity("No Task Found to delete");
            }

            return task;
        }catch (err) {
            logActivity(`Error while deleting task ${err}`);
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

            logActivity("Report Generated");

            return report;
        }catch (err : any){
            logActivity(`Error while generating report ${err}`);
        }
    }
}

export { taskUtil };
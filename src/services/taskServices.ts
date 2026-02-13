import Task from'../model/Task';
import type {Text,Logger} from "../types/notification";

export default class taskServices{
    constructor(private text:Text,private logging :Logger){}
    

    async createNewTask(taskBody:any){
        const task=new Task(taskBody);
        await task.save();
        this.logging.log("Task created");

    if (task.assignedTo) {
      this.text.send(task.assignedTo, "Task Assigned");
    }
    }

   async delete(taskId: string) {
        await Task.findByIdAndDelete(taskId);
        this.logging.log("Task deleted");
    }

    async update(taskId: string, updates: any) {
        const task = await Task.findById(taskId);
        
        if (!task) {
            throw new Error("Task not found");   
        }

        task.status = updates.status || task.status;
        task.title   = updates.title   || task.title;

        await task.save();

        this.logging.log("Task updated");

        return task;   
    }

    async fetchAllTask(){
        return await Task.find();
    }
}
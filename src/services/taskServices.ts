import Task from'../model/Task';
import type {Text,Logger} from "../types/notification";
import { TaskRepository,ITaskRepository } from '../repositories/taskRepository';

export default class taskServices{
    private taskRepo:ITaskRepository;
    constructor(private text:Text,private logging :Logger,taskRepo?: ITaskRepository
      ) {
        this.taskRepo = taskRepo ?? new TaskRepository();
      }
    

    async createNewTask(taskBody:any){
        const task = await this.taskRepo.create(taskBody);
        this.logging.log("Task created");

    
    }

   async delete(taskId: string) {
  const deleted = await this.taskRepo.delete(taskId);
  
  if (!deleted) {
    throw new Error("Task not found");
  }
  
  this.logging.log("Task deleted");
}

async update(taskId: string, updates: any) {
  const updatedTask = await this.taskRepo.update(taskId, updates);
  
  if (!updatedTask) {
    throw new Error("Task not found");
  }
  
  this.logging.log("Task updated");
  return updatedTask;
}
async fetchAllTask() {
  return this.taskRepo.findAll();
}
    
}
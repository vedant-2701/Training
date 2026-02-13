import type {Request, Response} from "express";
import User from '../model/User';
import taskServices from "../services/taskServices";


export default class taskController{

    constructor(private taskservices:taskServices){}
 createTask= async (req : Request, res : Response) => {
  try {
    if (!req.body.title) {
      return res.status(400).send("Title is required");
    }
    const user=await User.findOne({email:req.body.assignedTo});
    if(!user){
      return res.status(400).send("Assigned user not found");
    }
    const task = await this.taskservices.createNewTask({
      ...req.body,
      status: "OPEN",
      createdAt: new Date(),
    });
   res.send(task);
  } catch (err : any) {
    res.status(500).send(err.message);
  }
};

deleteTask = async (req: Request, res: Response) => {
        try {
            const id : string = req.params.id as string;
            await this.taskservices.delete(id);
            res.send({ message: "Deleted" });
        } catch (err: any) {
            res.status(500).send(err.message);
        }
    };

    updateTask = async (req: Request, res: Response) => {
        try {
            const id : string = req.params.id as string;
            const task = await this.taskservices.update(id, req.body);
            res.send(task);
        } catch (err: any) {
            if (err.message === "Task not found") {
                return res.status(404).send("Task not found");
            }
            res.status(500).send(err.message);
        }
    };

 getTasks =  async (req : Request, res : Response) => {
  const tasks = await this.taskservices.fetchAllTask();
  res.send(tasks);
};
}
//export {createTask,deleteTask,updateTask,getTasks};
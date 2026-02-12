import { Task } from "../model/taskSchema.js";

const findTask = async (id : string | string[]) => {

    let tasks  : any;

    if(!id){
        tasks = await Task.find();
    }else{
        tasks = await Task.findById(id);
    }

    return tasks;
}

export { findTask }
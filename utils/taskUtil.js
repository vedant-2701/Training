const { Task }  = require("../model/taskSchema");

const findTask = async (id) => {

    let tasks = undefined;

    if(!id){
        tasks = await Task.find();
    }else{
        tasks = await Task.findById(id);
    }

    return tasks;
}

module.exports = { findTask }
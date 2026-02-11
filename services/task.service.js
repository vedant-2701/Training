const Task = require("../models/task.js");
const notification = require("../config/notifier.js");
const logActivity = require("../utils/log.js");

module.exports.getAllTasks = async () => {
    return await Task.find();
}

module.exports.createTask = async (taskData) => {
    const task = new Task({
        ...taskData,
        status: "OPEN",
        createdAt: new Date(),
    });

    await task.save();

    logActivity("Task created");

    if (task.assignedTo) {
        notification(task.assignedTo, "Task Assigned");
    }

    return task;
}

module.exports.updateTask = async (id, taskData) => {
    const task = await Task.findById(id);
    
    if (!task) {
        throw new Error("Task not found");
    }

    task.status = taskData.status || task.status;
    task.title = taskData.title || task.title;

    await task.save();

    logActivity("Task updated");

    return task;
}

module.exports.deleteTask = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    
    logActivity("Task deleted");

    return task;
}
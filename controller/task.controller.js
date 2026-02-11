const taskService = require("../services/task.service.js");

module.exports.getTasks = async (req, res) => {
    const tasks = await taskService.getAllTasks();
    res.send(tasks);
}

module.exports.saveTask = async (req, res) => {
    try {
        if (!req.body.title) {
            return res.status(400).send("Title is required");
        }

        const taskData = req.body;

        const task = await taskService.createTask(taskData);

        res.status(201).send(task);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports.updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const taskData = req.body;

        const task = await taskService.updateTask(id, taskData);

        res.send(task);
    } catch (err) {
        if (err.message === "Task not found") {
            return res.status(404).send(err.message);
        }
        res.status(500).send(err.message);
    }
}

module.exports.deleteTask = async (req, res) => {
    try {
        const id = req.params.id;

        await taskService.deleteTask(id);

        res.send({ message: "Deleted" });
    } catch (err) {
        res.status(500).send(err.message);
    }
}
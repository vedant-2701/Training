const { Router } = require("express");
const taskController = require("../controller/task.controller.js");

const router = Router();

router
    .route("/")
    .get(taskController.getTasks)
    .post(taskController.saveTask);

router
    .route("/:id")
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);

module.exports = router;

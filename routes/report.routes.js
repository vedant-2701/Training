const { Router } = require("express");
const reportController = require("../controller/report.controller.js");

const router = Router();

router
    .route("/tasks")
    .get(reportController.getReportForTasks);

module.exports = router;

const reportService = require("../services/report.service.js");

module.exports.getReportForTasks = async (req, res) => {
    const report = await reportService.getReportForAllTasks();

    res.send(report);
}
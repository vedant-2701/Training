import { Router } from "express";
import { ReportController } from "../controller/report.controller.js";
import { ReportService } from "../services/report.service.js";

const router = Router();

const reportService = new ReportService();

const reportController = new ReportController(reportService);

router
    .route("/tasks")
    .get(reportController.getReportForTasks);

export default router;

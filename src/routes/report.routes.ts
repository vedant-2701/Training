import { Router } from "express";
import { reportFactory } from "../factories/ControllerFactory.js";

const router = Router();

const reportController = reportFactory.getController();

router
    .route("/tasks")
    .get(reportController.getReportForTasks);

export default router;

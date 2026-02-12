import { Router } from "express";
import { getReportForTasks } from "../controller/report.controller.js";

const router = Router();

router
    .route("/tasks")
    .get(getReportForTasks);

export default router;

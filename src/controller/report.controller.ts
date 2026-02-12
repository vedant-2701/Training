import type { Request, Response } from "express";
import type { Report } from "../services/report.service.js";
import { wrapAsync } from "../utils/wrapAsync.js";
import { reportService } from "../services/index.js";

export const getReportForTasks = wrapAsync (async (req: Request, res: Response) => {
    const report: Report = await reportService.getReportForAllTasks();

    res.status(200).send(report);
})
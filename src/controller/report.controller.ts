import type { Request, Response } from "express";
import type { Report } from "../services/report.service.js";
import { wrapAsync } from "../utils/wrapAsync.js";
import { ReportService } from "../services/report.service.js";

export class ReportController {

    constructor(private reportService: ReportService) { }
    
    getReportForTasks = wrapAsync (async (req: Request, res: Response) => {
        const report: Report = await this.reportService.getReportForAllTasks();
    
        res.status(200).send(report);
    })
}

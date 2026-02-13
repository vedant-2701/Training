import { wrapAsync } from "../utils/wrapAsync.js";
import type { ReportData } from "../types/report.js";
import type { Request, Response } from "express";
import type { ReportServiceInterface } from "../services/interfaces/ReportServiceInterface.js";

export class ReportController {

    constructor(private reportService: ReportServiceInterface) { }
    
    getReportForTasks = wrapAsync (async (req: Request, res: Response) => {
        const report: ReportData = await this.reportService.getReportForTasks();
    
        res.status(200).send(report);
    });
}

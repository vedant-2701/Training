import { wrapAsync } from "../utils/wrapAsync.js";
import type { ReportData } from "../types/report.js";
import type { Request, Response } from "express";
import type { ReportServiceInterface } from "../services/interfaces/ReportServiceInterface.js";
import type { ReportResponseDTO } from "../dtos/report.dto.js";
import { ReportMapper } from "../mappers/report.mapper.js";

export class ReportController {

    constructor(private reportService: ReportServiceInterface) { }
    
    getReportForTasks = wrapAsync (async (req: Request, res: Response) => {
        const report = await this.reportService.getReportForTasks();

        const response: ReportResponseDTO = ReportMapper.toDTO(report);
    
        res.status(200).send(response);
    });
}

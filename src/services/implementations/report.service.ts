import type { ReportRepositoryInterface } from "../../repositories/interfaces/ReportRepositoryInterface.js";
import type { ReportData } from "../../types/report.js";
import type { ReportServiceInterface } from "../interfaces/ReportServiceInterface.js";

export class ReportService implements ReportServiceInterface {
    constructor(private repository: ReportRepositoryInterface) {}

    async getReportForTasks(): Promise<ReportData> {
        return await this.repository.getTaskStats();
    };
}
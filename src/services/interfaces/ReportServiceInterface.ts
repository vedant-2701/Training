import type { ReportData } from "../../types/report.js";

export interface ReportServiceInterface {
    getReportForTasks(): Promise<ReportData>;
}
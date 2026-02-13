import type { ReportData } from "../../types/report.js";

export interface ReportRepositoryInterface {
    getTaskStats(): Promise<ReportData>;
}
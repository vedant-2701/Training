import type { ReportData } from "../types/report.js";
import type { ReportResponseDTO } from "../dtos/report.dto.js";

export class ReportMapper {
    static toDTO(data: ReportData): ReportResponseDTO {
        return {
            total: data.total,
            open: data.open,
            closed: data.closed,
        };
    }
}
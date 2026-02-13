import { Model } from "mongoose";
import type { TaskInterface } from "../../models/task.js";
import type { ReportRepositoryInterface } from "../interfaces/ReportRepositoryInterface.js";
import type { ReportData } from "../../types/report.js";

export class ReportRepository implements ReportRepositoryInterface {
    
    constructor(private taskModel: Model<TaskInterface>) {}

    async getTaskStats(): Promise<ReportData> {
        const report = await this.taskModel.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: 1 },
                    open: {
                        $sum: { $cond: [{ $eq: ["$status", "OPEN"] }, 1, 0] }
                    },
                    closed: {
                        $sum: { $cond: [{ $eq: ["$status", "CLOSED"] }, 1, 0] }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    total: 1,
                    open: 1,
                    closed: 1
                }
            }
        ]);

        return report[0] || { total: 0, open: 0, closed: 0 };
    }
}
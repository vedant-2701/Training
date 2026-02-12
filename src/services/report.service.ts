import Task from "../models/task.js";

export interface Report {
    total: number;
    open: number;
    closed: number;
}

export class ReportService {
    async getReportForAllTasks(): Promise<Report> {
        // const tasks = await Task.find();

        const report = await Task.aggregate([
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: 1,
                    },
                    open: {
                        $sum: {
                            $cond: [{ $eq: ["$status", "OPEN"] }, 1, 0],
                        },
                    },
                    closed: {
                        $sum: {
                            $cond: [{ $eq: ["$status", "CLOSED"] }, 1, 0],
                        },
                    },
                },
            },
            {
                $project: {
                    _id: 0,
                    total: 1,
                    open: 1,
                    closed: 1,
                },
            },
        ]);

        // const report = {
        //     total: tasks.length,
        //     open: tasks.filter((t) => t.status === "OPEN").length,
        //     closed: tasks.filter((t) => t.status === "CLOSED").length,
        // };

        return report[0] || { total: 0, open: 0, closed: 0 };
    };
}
export const getReportForAllTasks = async (): Promise<Report> => {
    // const tasks = await Task.find();

    const report = await Task.aggregate([
        {
            $group: {
                _id: null,
                total: {
                    $sum: 1,
                },
                open: {
                    $sum: {
                        $cond: [{ $eq: ["$status", "OPEN"] }, 1, 0],
                    },
                },
                closed: {
                    $sum: {
                        $cond: [{ $eq: ["$status", "CLOSED"] }, 1, 0],
                    },
                },
            },
        },
        {
            $project: {
                _id: 0,
                total: 1,
                open: 1,
                closed: 1,
            },
        },
    ]);

    // const report = {
    //     total: tasks.length,
    //     open: tasks.filter((t) => t.status === "OPEN").length,
    //     closed: tasks.filter((t) => t.status === "CLOSED").length,
    // };

    return report[0] || { total: 0, open: 0, closed: 0 };
};

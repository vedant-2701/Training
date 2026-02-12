import notification from "../config/notifier.js";
import { TaskService } from "./task.service.js";
import { UserService } from "./user.service.js";
import { ReportService } from "./report.service.js";

export const taskService = new TaskService(notification);
export const userService = new UserService(notification);
export const reportService = new ReportService();
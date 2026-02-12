import notification from "../config/notifier.js";
import { ReportController } from "../controller/report.controller.js";
import { TaskController } from "../controller/task.controller.js";
import { UserController } from "../controller/user.controller.js";
import Task from "../models/task.js";
import User from "../models/user.js";
import { TaskService } from "../services/task.service.js";
import { UserService } from "../services/user.service.js";
import { ReportService } from "../services/report.service.js";

export interface ControllerFactoryInterface<T> {
    getController(): T;
}

export class UserControllerFactory implements ControllerFactoryInterface<UserController> {
    private static userService = new UserService(notification, User);

    getController(): UserController {
        return new UserController(UserControllerFactory.userService);
    }
}

export class TaskControllerFactory implements ControllerFactoryInterface<TaskController> {
    private static taskService = new TaskService(notification, Task);

    getController(): TaskController {
        return new TaskController(TaskControllerFactory.taskService);
    }
}

export class ReportControllerFactory implements ControllerFactoryInterface<ReportController> {
    private static reportService = new ReportService();

    getController(): ReportController {
        return new ReportController(ReportControllerFactory.reportService);
    }
}


export const userFactory = new UserControllerFactory();
export const taskFactory = new TaskControllerFactory();
export const reportFactory = new ReportControllerFactory();

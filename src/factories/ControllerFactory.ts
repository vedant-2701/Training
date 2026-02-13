import { ReportController } from "../controller/report.controller.js";
import { TaskController } from "../controller/task.controller.js";
import { UserController } from "../controller/user.controller.js";
import { TaskService } from "../services/implementations/task.service.js";
import { UserService } from "../services/implementations/user.service.js";
import { ReportService } from "../services/implementations/report.service.js";
import { TaskRepository } from "../repositories/implementations/task.repository.js";
import { UserRepository } from "../repositories/implementations/user.repository.js";
import Task from "../models/task.js";
import User from "../models/user.js";
import { ReportRepository } from "../repositories/implementations/report.repository.js";

export interface ControllerFactoryInterface<T> {
    getController(): T;
}

export class UserControllerFactory implements ControllerFactoryInterface<UserController> {
    private static userRepository = new UserRepository(User);
    private static userService = new UserService(UserControllerFactory.userRepository);
    private static userController = new UserController(UserControllerFactory.userService);

    getController(): UserController {
        return UserControllerFactory.userController;
    }
}

export class TaskControllerFactory implements ControllerFactoryInterface<TaskController> {
    private static taskRepository = new TaskRepository(Task);
    private static taskService = new TaskService(TaskControllerFactory.taskRepository);

    private static taskController = new TaskController(TaskControllerFactory.taskService);

    getController(): TaskController {
        return TaskControllerFactory.taskController;
    }
}

export class ReportControllerFactory implements ControllerFactoryInterface<ReportController> {
    private static reportRepository = new ReportRepository(Task);
    private static reportService = new ReportService(ReportControllerFactory.reportRepository);
    private static reportController = new ReportController(ReportControllerFactory.reportService);

    getController(): ReportController {
        return ReportControllerFactory.reportController;
    }
}


export const userFactory = new UserControllerFactory();
export const taskFactory = new TaskControllerFactory();
export const reportFactory = new ReportControllerFactory();

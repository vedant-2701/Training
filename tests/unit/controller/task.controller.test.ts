import { jest } from "@jest/globals";
import { TaskController } from "../../../src/controller/task.controller.js";
import type { TaskServiceInterface } from "../../../src/services/interfaces/TaskServiceInterface.js";
import type { Request, Response } from "express";

const mockTaskService = {
    getAllTasks: jest.fn(),
    createTask: jest.fn(),
    updateTask: jest.fn(),
    deleteTask: jest.fn(),
};

describe("TaskController", () => {
    let taskController: TaskController;
    let mockReq: Partial<Request>;
    let mockRes: Partial<Response>;
    let jsonMock: jest.Mock;

    beforeEach(() => {
        jest.clearAllMocks();

        taskController = new TaskController(mockTaskService as unknown as TaskServiceInterface);

        jsonMock = jest.fn();
        mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jsonMock,
        };
    });

    describe("getTasks", () => {
        it("should return 200 and a list of tasks", async () => {
            const mockTasks = [{ title: "Task 1" }, { title: "Task 2" }];
            mockTaskService.getAllTasks.mockResolvedValue(mockTasks);

            mockReq = {};

            await taskController.getTasks(mockReq as Request, mockRes as Response, () => {});

            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(jsonMock).toHaveBeenCalledWith(mockTasks);
        });
    });

    describe("saveTask", () => {
        it("should return 400 if title is missing", async () => {
            
            mockReq = { body: {} }; 

            await taskController.saveTask(mockReq as Request, mockRes as Response, () => {});

            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockTaskService.createTask).not.toHaveBeenCalled();
        });

        it("should return 201 and created task", async () => {
            const body = { title: "New Task" };
            const createdTask = { ...body, _id: "123" };
            
            mockReq = { body };
            mockTaskService.createTask.mockResolvedValue(createdTask);

            await taskController.saveTask(mockReq as Request, mockRes as Response, () => {});

            expect(mockRes.status).toHaveBeenCalledWith(201);
            expect(jsonMock).toHaveBeenCalledWith(createdTask);
        });
    });
});
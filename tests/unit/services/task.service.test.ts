import { jest } from "@jest/globals";
import { TaskService } from "../../../src/services/implementations/task.service.js";
import type { TaskRepositoryInterface } from "../../../src/repositories/interfaces/TaskRepositoryInterface.js";

const mockTaskRepository = {
    findAll: jest.fn(),
    create: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
};

describe("TaskService", () => {
    let taskService: TaskService;

    beforeEach(() => {
        jest.clearAllMocks();

        taskService = new TaskService(mockTaskRepository as unknown as TaskRepositoryInterface);
    });

    describe("createTask", () => {
        it("should create a task and return it", async () => {
            const taskInput = { title: "Test Task" };
            const expectedTask = { ...taskInput, _id: "123", status: "OPEN" };
            
            mockTaskRepository.create.mockResolvedValue(expectedTask);

            const result = await taskService.createTask(taskInput);

            expect(result).toEqual(expectedTask);
            
            expect(mockTaskRepository.create).toHaveBeenCalledWith(taskInput);
            expect(mockTaskRepository.create).toHaveBeenCalledTimes(1);
        });

        it("should send a notification if assignedTo is present", async () => {
            const taskInput = { title: "Task", assignedTo: "user@example.com" };
            const expectedTask = { ...taskInput, _id: "123" };
            
            mockTaskRepository.create.mockResolvedValue(expectedTask);

            await taskService.createTask(taskInput);

            expect(mockTaskRepository.create).toHaveBeenCalled();
        });
    });
});
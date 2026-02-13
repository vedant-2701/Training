import { taskControllerClass } from "../controllers/taskControllerClass.js";
import { mongoDbTaskRepository } from "../repository/task/taskMongoDbRepository.js";
import { taskServices } from "../services/taskServices.js";

const taskRespository = new mongoDbTaskRepository();
const taskService = new taskServices(taskRespository);
const taskController = new taskControllerClass(taskService);

export { taskController };
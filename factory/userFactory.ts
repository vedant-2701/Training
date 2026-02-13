import { userControllerClass } from "../controllers/userControllerClass.js";
import { userMongoDbRepository } from "../repository/user/userMongoDbRepository.js";
import { userServices } from "../services/userServices.js";

const userRepository = new userMongoDbRepository();
const userService = new userServices(userRepository);
const userController = new userControllerClass(userService);

export { userController };
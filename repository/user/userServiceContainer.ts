import { userServiceClass } from "./userService.js";
import { mongoUserModules } from "./userMongoModules.js";

const mongoUserFunctions = new mongoUserModules();
const userService = new userServiceClass(mongoUserFunctions);

export { userService }
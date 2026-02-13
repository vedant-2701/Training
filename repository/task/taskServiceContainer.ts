import { mongoTaskModules } from "./taskMongoModules.js";
import { taskServiceClass } from "./taskService.js";

const mongoTaskFunctions = new mongoTaskModules()
const taskService = new taskServiceClass(mongoTaskFunctions);

export { taskService }
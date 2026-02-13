import express from'express';
const router=express.Router();
//import {createTask,deleteTask,updateTask,getTasks} from "../controller/taskController";
import taskController from '../controller/taskController';
import taskServices from '../services/taskServices';

import { createNotificationDependencies } from '../factories/notificationfactory';

const { text, logging } = createNotificationDependencies();
const taskservices=new taskServices(text,logging);
const taskcontroller=new taskController(taskservices);

router.post("/",taskcontroller.createTask);

router.get("/",taskcontroller.getTasks);


router.put("/:id",taskcontroller.updateTask);


router.delete("/:id",taskcontroller.deleteTask);

 export default router;
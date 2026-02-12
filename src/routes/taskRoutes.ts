import express from'express';
const router=express.Router();
//import {createTask,deleteTask,updateTask,getTasks} from "../controller/taskController";
import taskController from '../controller/taskController';
import sendEmail from '../utils/email';
import logActivity from '../utils/log';
import sendSMS from '../utils/sms';

const sms={send:sendSMS};
const logs={log:logActivity};
const mail={send:sendEmail};

const taskcontroller=new taskController(sms,logs);

router.post("/",taskcontroller.createTask);

router.get("/",taskcontroller.getTasks);


router.put("/:id",taskcontroller.updateTask);


router.delete("/:id",taskcontroller.deleteTask);

 export default router;

import express from'express';
const router=express.Router();
import sendEmail from '../utils/email';
import logActivity from'../utils/log';
import sendSMS from '../utils/sms'
//import {createUser,getUsers} from'../controller/userController'; 
import userController from '../controller/userController'

const mail={send:sendEmail};
const logs={log:logActivity};
const sms={send:sendSMS};

const usercontroller= new userController(sms,logs);

router.post("/",usercontroller.createUser);

router.get("/",usercontroller.getUsers);

 export default  router;
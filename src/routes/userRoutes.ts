
import express from'express';
const router=express.Router();
//import {createUser,getUsers} from'../controller/userController'; 
import userController from '../controller/userController';
import userServices from '../services/userServices';
import { createNotificationDependencies } from '../factories/notificationfactory';
import logMessage from '../types/logMessage';
import WelcomeMessage from '../types/welcomeMessage';

const { text, logging } = createNotificationDependencies();

const logWrapper = new logMessage(logging);
const texts=new WelcomeMessage(text);
const userservice = new userServices(logWrapper,texts);
const usercontroller = new userController(userservice);

router.post("/",usercontroller.createUser);

router.get("/",usercontroller.getUsers);

 export default  router;
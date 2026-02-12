
 import express from'express';
const router=express.Router();
 //import taskReport from'../controller/reportController';
import reportController from '../controller/reportController';

const taskcontroller=new reportController();
router.get("/tasks", taskcontroller.taskReport);
                        
export default router;
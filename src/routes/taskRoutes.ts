
import express from'express';
const router=express.Router();
import {createTask,deleteTask,updateTask,getTasks} from "../controller/taskController";

router.post("/",createTask);

router.get("/",getTasks);


router.put("/:id",updateTask);


router.delete("/:id",deleteTask);

 export default router;
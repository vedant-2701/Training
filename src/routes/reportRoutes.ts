
 import express from'express';
const router=express.Router();
 import taskReport from'../controller/reportController';
router.get("/tasks", taskReport);
                        
export default router;
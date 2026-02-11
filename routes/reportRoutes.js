
const express=require('express');
const router=express.Router();
const taskReport=require('../controller/reportController');
router.get("/report/tasks", taskReport);
                        
module.exports= router;
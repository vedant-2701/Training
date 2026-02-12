
import express from'express';
const router=express.Router();
import {createUser,getUsers} from'../controller/userController'; 

router.post("/",createUser);

router.get("/",getUsers);

 export default  router;
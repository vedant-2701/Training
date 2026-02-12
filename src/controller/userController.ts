import type {Request, Response} from "express";
import sendEmail from '../utils/email';
import logActivity from'../utils/log';
import User from '../model/User';


const createUser = async (req : Request, res : Response) => {
  try {
    if (!req.body.email) {
      return res.status(400).send("Email required");
    } 
    const user = new User(req.body);
    await user.save();

    if (typeof user.email === "string") {
  sendEmail(user.email, "Welcome");
}

    logActivity("User created");

    res.send(user);
  } catch (err : any) {
    res.status(500).send(err.message);
  }
};

const getUsers= async (req : Request, res : Response) => {
  const users = await User.find();
  res.send(users);
}; 

 export {createUser,getUsers};
import type {Request, Response} from "express";
//import sendEmail from '../utils/email';
//import logActivity from'../utils/log';
import User from '../model/User';

interface Text{
    send(to:string ,message :string) : void
}

interface Logging{
    log(message:string ) : void 
}

export default class userController{

    constructor(private text: Text,private logging: Logging){}

createUser = async (req : Request, res : Response) => {
  try {
    if (!req.body.email) {
      return res.status(400).send("Email required");
    } 
    const user = new User(req.body);
    await user.save();

    if (typeof user.email === "string") {
  this.text.send(user.email, "Welcome");
}

    this.logging.log("User created");

    res.send(user);
  } catch (err : any) {
    res.status(500).send(err.message);
  }
};

 getUsers= async (req : Request, res : Response) => {
  const users = await User.find();
  res.send(users);
}; 
}
 //export {createUser,getUsers};
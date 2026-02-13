import type { Request, Response } from "express"; 
import type { userServices } from "../services/userServices.js";


class userControllerClass {
  constructor (private userServices : userServices) {}

  createUser = async (req : Request, res : Response) => {
    const user = await this.userServices.createUser(req.body);
    res.send(user);
  }

  getAllUsers = async (req : Request, res : Response) => {
    const users = await this.userServices.fetchUsers();
    return users;
  }
}

export { userControllerClass }
import type { Request, Response } from "express"; 
import { userService } from "../repository/user/userServiceContainer.js";

const createUser = async (req : Request, res : Response) => {
  const user = await userService.createUser(req.body);
  res.send(user);
}

const getUsers = async ( req : Request, res : Response) => {
  const users = await userService.fetchUsers();

  res.send(users);
}

export { createUser, getUsers }
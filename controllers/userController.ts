import type { Request, Response } from "express";
import { userUtil } from "../utils/userUtil.js";
import { mongoUserModules } from "../repository/user/userMongoModules.js";

const mongoUserFunctions = new mongoUserModules();
const mongoUserUtil = new userUtil(mongoUserFunctions); 

const createUser = async (req : Request, res : Response) => {
  const user = await mongoUserUtil.createUser(req.body);

  res.send(user);
}

const getUsers = async ( req : Request, res : Response) => {
  const users = await mongoUserUtil.fetchUsers();

  res.send(users);
}

export { createUser, getUsers }
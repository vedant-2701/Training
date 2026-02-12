import { sendEmail } from "../utils/emailUtil.js";
import { logActivity } from "../utils/logUtil.js";
import { saveUser, fetchUsers } from "../utils/userUtil.js";
import type { Request, Response } from "express";

const createUser = async (req : Request, res : Response) => {
  try {
    if (!req.body.email) {
      return res.status(400).send("Email required");
    }

    const user = await saveUser(req.body);

    sendEmail(user.email ?? "NA", "Welcome");
    logActivity("User created");

    res.send(user);
  } catch (err : any) {
    res.status(500).send(err.message);
  }
}

const getUsers = async ( req : Request, res : Response) => {
    const users = await fetchUsers()
    res.send(users);
}

export { createUser, getUsers }
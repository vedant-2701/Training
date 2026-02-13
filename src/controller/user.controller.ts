import { wrapAsync } from "../utils/wrapAsync.js";
import type { Request, Response } from "express";
import type { PartialUserInterface, UserInterface } from "../models/user.js";
import type { UserServiceInterface } from "../services/interfaces/UserServiceInterface.js";

export class UserController {

    constructor(private userService: UserServiceInterface) { }

    findUser = wrapAsync(async (req: Request, res: Response) => {
        const users: UserInterface[] = await this.userService.getAllUsers();
        res.send(users);
    });
    
    registerUser = wrapAsync(async (req: Request, res: Response) => {
        if (!req.body.email) {
            return res.status(400).send("Email required");
        }
    
        const userData: PartialUserInterface = req.body;
    
        const user: UserInterface = await this.userService.createUser(userData);
    
        res.status(200).send(user);
    });
}


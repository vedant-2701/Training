import type { Request, Response } from "express";
import type { PartialUserInterface, UserInterface } from "../models/user.js";

import { UserService } from "../services/user.service.js";
import { wrapAsync } from "../utils/wrapAsync.js";

export class UserController {

    constructor(private userService: UserService) { }

    findUser = wrapAsync(async (req: Request, res: Response) => {
        const users: UserInterface[] = await this.userService.findAll();
        res.send(users);
    });
    
    registerUser = wrapAsync(async (req: Request, res: Response) => {
        if (!req.body.email) {
            return res.status(400).send("Email required");
        }
    
        const userData: PartialUserInterface = req.body;
    
        const user: UserInterface = await this.userService.create(userData);
    
        res.status(200).send(user);
    });
}


import type { Request, Response } from "express";
import type { PartialUserInterface, UserInterface } from "../models/user.js";

import { userService } from "../services/index.js";
import { wrapAsync } from "../utils/wrapAsync.js";

export const findUser = wrapAsync(async (req: Request, res: Response) => {
    const users: UserInterface[] = await userService.findAll();
    res.send(users);
});

export const registerUser = wrapAsync(async (req: Request, res: Response) => {
    if (!req.body.email) {
        return res.status(400).send("Email required");
    }

    const userData: PartialUserInterface = req.body;

    const user: UserInterface = await userService.create(userData);

    res.status(200).send(user);
});

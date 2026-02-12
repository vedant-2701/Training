import User from "../models/user.js";
import { logActivity } from "../utils/log.js";
import { BaseService } from "./base.service.js";

import type { UserInterface, PartialUserInterface } from "../models/user.js";
import type { Notification } from "../types/notification.js";

export class UserService extends BaseService<UserInterface> {
    private notification: Notification

    constructor(notification: Notification) {
        super(User);
        this.notification = notification;
    }

    async create (userData: PartialUserInterface): Promise<UserInterface> {
        const user = await super.create(userData);

        if(user.email) {
            this.notification.send(user.email, "Welcome");
        }

        logActivity("User created");

        return user;
    }
};

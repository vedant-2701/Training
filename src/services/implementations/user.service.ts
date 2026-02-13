import { logActivity } from "../../utils/log.js";
import notification from "../../config/notifier.js";

import type { UserInterface, PartialUserInterface } from "../../models/user.js";
import type { UserServiceInterface } from "../interfaces/UserServiceInterface.js";
import type { UserRepositoryInterface } from "../../repositories/interfaces/UserRepositoryInterface.js";

export class UserService implements UserServiceInterface {

    constructor(
        private repository: UserRepositoryInterface,
    ) {}

    async getAllUsers(): Promise<UserInterface[]> {
        return await this.repository.findAll();
    }

    async createUser(userData: PartialUserInterface): Promise<UserInterface> {
        const user = await this.repository.create(userData);

        if(user.email) {
            notification.send(user.email, "Welcome");
        }

        logActivity("User created");

        return user;
    }
};

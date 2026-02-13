import type { UserInterface, PartialUserInterface } from "../../models/user.js";

export interface UserServiceInterface {
    getAllUsers(): Promise<UserInterface[]>;
    createUser(userData: PartialUserInterface): Promise<UserInterface>;
}
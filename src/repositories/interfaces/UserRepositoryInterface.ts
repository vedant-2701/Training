import type { UserInterface, PartialUserInterface } from "../../models/user.js";

export interface UserRepositoryInterface {
    findAll(): Promise<UserInterface[]>;
    create(data: PartialUserInterface): Promise<UserInterface>;
}
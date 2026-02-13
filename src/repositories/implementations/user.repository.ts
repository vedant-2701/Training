import type { PartialUserInterface, UserInterface } from "../../models/user.js";
import type { UserRepositoryInterface } from "../interfaces/UserRepositoryInterface.js";
import { Model } from "mongoose";

export class UserRepository implements UserRepositoryInterface {
    constructor(private userModel: Model<UserInterface>) {}

    async findAll(): Promise<UserInterface[]> {
        return await this.userModel.find();
    }

    async create(data: PartialUserInterface): Promise<UserInterface> {
        const user = new this.userModel(data);
        return await user.save();
    }
}
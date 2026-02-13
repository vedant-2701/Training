import { User } from "../../model/userSchema.js";
import type { baseUser } from "./baseUser.js";
import { userGeneralMethodsClass } from "./userGeneralMethodsClass.js";

class userMongoDbRepository extends userGeneralMethodsClass{
    async create(data : baseUser) : Promise <baseUser> {
        const user = new User(data);
        await user.save();
        return user;
    }

    async getAll() : Promise<baseUser[]> {
        return User.find();
    }
}

export { userMongoDbRepository }
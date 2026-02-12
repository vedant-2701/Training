import { User } from "../../model/userSchema.js";
import type { baseUser } from "./baseUser.js";
import { userAbstractInterface } from "./userFunctionsAbstractClass.js";

class mongoUserModules extends userAbstractInterface{
    async create(data : baseUser) : Promise <baseUser> {
        const user = new User(data);
        await user.save();

        return user.toObject(); // converts mongoose document into plaint js object, strips all mongoose methods so we only get the pure data object.
    }

    async getAll() : Promise<baseUser[]> {
        return User.find();
    }
}

export { mongoUserModules }
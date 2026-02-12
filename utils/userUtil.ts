import { User } from "../model/userSchema.js";

const saveUser = async (data : object) => {
    const user = new User(data);
    await user.save();

    return user;
}

const fetchUsers = async () => {
    const users = await User.find();

    return users;
}

// use ts, use interfaces as db changes, tracing logs and error handling, Di, class structure and basic oop's 

export { saveUser, fetchUsers }
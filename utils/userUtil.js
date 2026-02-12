const { User } = require("../model/userSchema");

const saveUser = async (data) => {
    const user = new User(data);
    await user.save();

    return user;
}

const fetchUsers = async () => {
    const users = await User.find();

    return users;
}

// use ts, use interfaces as db changes, tracing logs and error handling, Di, class structure and basic oop's 

module.exports = { saveUser, fetchUsers }
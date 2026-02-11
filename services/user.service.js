const User = require("../models/user.js");
const notification = require("../config/notifier.js");
const logActivity = require("../utils/log.js");

module.exports.getAllUsers = async () => {
    return await User.find();
}

module.exports.saveUser = async (userData) => {
    const user = new User(userData);
    await user.save();

    notification(user.email, "Welcome");
    logActivity("User created");

    return user;
}
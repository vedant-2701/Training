const { User } = require("../model/userSchema")
const { sendEmail } = require("../utils/emailUtil");
const { logActivity } = require("../utils/logUtil");

const createUser = async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).send("Email required");
    }

    const user = new User(req.body);
    await user.save();

    sendEmail(user.email, "Welcome");
    logActivity("User created");

    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const getUsers = async ( req, res) => {
    const users = await User.find();
    res.send(users);
}

module.exports = { createUser, getUsers }
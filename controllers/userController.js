const { sendEmail } = require("../utils/emailUtil");
const { logActivity } = require("../utils/logUtil");
const { saveUser, fetchUsers } = require("../utils/userUtil");

const createUser = async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).send("Email required");
    }

    const user = await saveUser(req.body);

    sendEmail(user.email, "Welcome");
    logActivity("User created");

    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const getUsers = async ( req, res) => {
    const users = await fetchUsers()
    res.send(users);
}

module.exports = { createUser, getUsers }
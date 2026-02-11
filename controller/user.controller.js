const userService = require("../services/user.service.js");

module.exports.findUser = async (req, res) => {
    const users = await userService.getAllUsers();
    res.send(users);
}

module.exports.registerUser = async (req, res) => {
    try {
        if (!req.body.email) {
            return res.status(400).send("Email required");
        }

        const userData = req.body;

        const user = await userService.saveUser(userData);

        res.send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
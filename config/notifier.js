const NotificationFactory = require("../factories/NotificationFactory.js");
const env = require("./env.js");

const notificationType = env.notificationType || "EMAIL";

const notification = NotificationFactory.create(notificationType);

module.exports = notification;
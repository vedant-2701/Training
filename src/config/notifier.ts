import NotificationFactory from "../factories/NotificationFactory.js";
import env from "./env.js";

const notificationType = env.notificationType || "EMAIL";

const notification = NotificationFactory.create(notificationType);

export default notification;
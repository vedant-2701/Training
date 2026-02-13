import { EmailNotification } from "../utils/notification/email.js";
import { SMSNotification } from "../utils/notification/sms.js";
import type { Notification } from "../types/notification.js";

export default class NotificationFactory {
    static create(type: string): Notification {
        switch (type.toUpperCase()) {
            case "EMAIL":
                return new EmailNotification();
            case "SMS":
                return new SMSNotification();
        
            default:
                throw new Error("Invalid Notification type");
        }
    }
}
import { EmailNotificaion } from "../utils/notification/email.js";
import { SMSNotificaion } from "../utils/notification/sms.js";
import type { Notification } from "../types/notification.js";

export default class NotificationFactory {
    static create(type: string): Notification {
        switch (type.toUpperCase()) {
            case "EMAIL":
                return new EmailNotificaion();
            case "SMS":
                return new SMSNotificaion();
        
            default:
                throw new Error("Invalid Notification type");
        }
    }
}
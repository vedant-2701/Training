import type { Notification } from "../../types/notification.js";

export class SMSNotificaion implements Notification {
    send(to: string, subject: string): void {
        console.log(`SMS sent to ${to} with subject ${subject}`);
    }
}
import type { Notification } from "../../types/notification.js";

export class EmailNotification implements Notification {
    send(to: string, subject: string): void {
        console.log(`Email sent to ${to} with subject ${subject}`);
    }
}
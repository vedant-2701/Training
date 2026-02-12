export interface Notification {
    send(to:string, subject: string): void;
};
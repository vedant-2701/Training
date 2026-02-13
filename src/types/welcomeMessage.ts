import type { Text } from "../types/notification";

interface MinimalUser {
  email?: string | null | undefined;
}

export default class WelcomeMessage {
  constructor(private channel: Text) {}

  send(user: MinimalUser): void {
    if (typeof user?.email !== "string") return;
    this.channel.send(user.email, "Welcome !");
  }
}
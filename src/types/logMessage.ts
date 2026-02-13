import {Logger} from "../types/notification";

export default class logMessage {
  constructor(private logger: Logger) {}

  log(user: any): void {
    this.logger.log(`User registered: (${user.email || 'no email'})`);
  }
}


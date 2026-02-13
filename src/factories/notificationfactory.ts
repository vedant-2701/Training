// src/factories/notificationFactory.ts
import sendEmail from '../utils/email';
import sendSMS from '../utils/sms';
import logActivity from '../utils/log';
require('dotenv').config();
import type { Text, Logger } from '../types/notification';


class EmailSender implements Text {
  send(to: string, message: string) {
    sendEmail(to, message);
  }
}

class SMSSender implements Text {
  send(to: string, message: string) {
    sendSMS(to, message);
  }
}

class ConsoleLogger implements Logger {
  log(message: string) {
    logActivity(message);
  }
}


export function createNotificationDependencies() {
  const logger: Logger = new ConsoleLogger();
  const channel = process.env.NOTIFICATION_CHANNEL;

  let text: Text;

  switch (channel) {
    case 'mail':
      text = new EmailSender();
      break;

    default:
      text = new SMSSender();
      break;

  }

  return {
    text,
    logging: logger,
    
  };
  
}


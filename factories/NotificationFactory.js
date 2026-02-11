const email = require("../utils/notification/email.js");
const sms = require("../utils/notification/sms.js");

class NotificationFactory {
    static create(type) {
        switch (type.toUpperCase()) {
            case "EMAIL":
                return email;
            case "SMS":
                return sms;
        
            default:
                throw new Error("Invalid Notification type");
        }
    }
}

module.exports = NotificationFactory;
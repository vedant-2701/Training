interface sendNotification {
  send(to : string, message : string)  : void;
}

class emailClass implements sendNotification{
  send (to : string, message : string){
    console.log(`Email sent to ${to} with the subject ${message}`);
  }
}

class messageClass implements sendNotification{
  send (to : string, message : string) {
    console.log(`Message sent to ${to} with the content ${message}`);
  }
}

const email = new emailClass();
const message = new messageClass();

export { email, message };
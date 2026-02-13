import User from '../model/User';
import logMessage from "../types/logMessage";
import welcomeMessage from "../types/welcomeMessage"

export default class userServices{
    constructor(private logmessage: logMessage,private welcomemessage:welcomeMessage){}

    async createNewUser(userData :any){
        const user=new User(userData);
        await user.save();
        this.welcomemessage.send(user);         

    this.logmessage.log?.(user);

    return user;
        

        
}
     
    async fetchAllUsers(){
       return await User.find();
    }
}
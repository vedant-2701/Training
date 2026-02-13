import User from '../model/User';
import logMessage from "../types/logMessage";
import welcomeMessage from "../types/welcomeMessage";
import { UserRepository, IUserRepository } from '../repositories/userRepository';

export default class userServices{
    private userRepo: IUserRepository;
    constructor(private logmessage: logMessage,private welcomemessage:welcomeMessage,
        userRepo?: IUserRepository
  ) {
    this.userRepo = userRepo ?? new UserRepository();
  }
    

    async createNewUser(userData :any){
        //const user=new User(userData);
        //await user.save();

        const user = await this.userRepo.create(userData);

        this.welcomemessage.send(user);         

    this.logmessage.log?.(user);

    return user;
        

        
}
     
    async fetchAllUsers(){
       //return await User.find();
       return this.userRepo.findAll();
    }
}
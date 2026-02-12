import type { userAbstractInterface } from "../repository/user/userFunctionsAbstractClass.js";
import { logActivity } from "./logUtil.js";
import type { baseUser } from "../repository/user/baseUser.js";
import { sendEmail } from "./emailUtil.js";

class userUtil {
    constructor ( private userModules : userAbstractInterface ){}

    async createUser ( data : baseUser ){
        try{
            const user = await this.userModules.create(data);
            if(user.email){
                sendEmail(user.email, ", Welcome !");
            }
            logActivity("New User Created");

            return user;
        }catch (err : any){
            logActivity(`Error while creating new user ${err}`);
        }
    }

    async fetchUsers (){
        try{
            const users = await this.userModules.getAll();
            logActivity("All users fetched");
            return users;
        }catch (err : any){
            logActivity(`Error while fetching all users ${err}`);
        }
    }
}

// use ts, use interfaces as db changes, tracing logs and error handling, Di, class structure and basic oop's 

export { userUtil };
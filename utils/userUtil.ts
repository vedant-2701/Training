import type { userAbstractInterface } from "../repository/user/userFunctionsAbstractClass.js";
import { logActivity, logError } from "./logUtil.js";
import type { baseUser } from "../repository/user/baseUser.js";
import { email } from "./emailUtil.js";

class userUtil {
    constructor ( private userModules : userAbstractInterface ){}

    async createUser ( data : baseUser ){
        try{
            const user = await this.userModules.create(data);
            if(user.email){
                email.send(user.email, ", Welcome !");
            }
            logActivity.log("New User Created");

            return user;
        }catch (err : any){
            logError.log(`Error while creating new user ${err}`);
        }
    }

    async fetchUsers (){
        try{
            const users = await this.userModules.getAll();
            logActivity.log("All users fetched");
            return users;
        }catch (err : any){
            logError.log(`Error while fetching all users ${err}`);
        }
    }
}

// create class for changing message or logging type.
// use ts, use interfaces as db changes, tracing logs and error handling, Di, class structure and basic oop's 
// error handling in a global way
// controller shouldnt directly handle with the db
// writing unit tests

export { userUtil };
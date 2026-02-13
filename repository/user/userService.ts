import type { userAbstractInterface } from "./userFunctionsAbstractClass.js";
import { logActivity, logError } from "../../utils/logUtil.js";
import type { baseUser } from "./baseUser.js";
import { email } from "../../utils/emailUtil.js";

class userServiceClass {
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

export { userServiceClass };
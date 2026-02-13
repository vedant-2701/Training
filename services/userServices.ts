import type { userGeneralMethodsClass } from "../repository/user/userGeneralMethodsClass.js";
import { logActivity } from "../utils/logUtil.js";
import type { baseUser } from "../repository/user/baseUser.js";
import { email } from "../utils/emailUtil.js";

class userServices {
    constructor ( private userModules : userGeneralMethodsClass ){}

    async createUser ( data : baseUser ){
        const user = await this.userModules.create(data);
        if(user.email){
            email.send(user.email, ", Welcome !");
        }
        logActivity.log("New User Created");

        return user;
    }

    async fetchUsers (){
        const users = await this.userModules.getAll();
        logActivity.log("All users fetched");
        return users;
    }
}

// create class for changing message or logging type.
// use ts, use interfaces as db changes, tracing logs and error handling, Di, class structure and basic oop's 
// error handling in a global way
// controller shouldnt directly handle with the db
// writing unit tests

export { userServices };
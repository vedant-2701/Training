import type { baseUser } from "./baseUser.js"

abstract class userGeneralMethodsClass{
    abstract create(user : baseUser) : Promise<baseUser>;
    abstract getAll() : Promise<baseUser[]>;
}

export { userGeneralMethodsClass };
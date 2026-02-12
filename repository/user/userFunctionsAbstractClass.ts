import type { baseUser } from "./baseUser.js"

abstract class userAbstractInterface {
    abstract create(user : baseUser) : Promise<baseUser>;
    abstract getAll() : Promise<baseUser[]>;
}

export { userAbstractInterface };
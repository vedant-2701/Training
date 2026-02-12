import { ObjectId } from "mongodb";

interface baseUser {
    _id? : ObjectId;
    name : string | null;
    email : string | null;
    password : string | null;
}

export type { baseUser };
import type { ObjectId } from "mongodb";

interface baseTask{
    _id? : ObjectId
    title : string | null
    description : string | null
    status? : string
    assignedTo : string | null
    createdAt? : Date
}

interface updateBaseTask {
    id : string;
    description : string | null
    status : string | null
    assignedTo : string | null
}

export type { baseTask, updateBaseTask };
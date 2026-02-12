import type { baseTask, updateBaseTask } from "./baseTask.js";
import { ObjectId } from "mongodb";

abstract class taskAbstractInterface {
    abstract create (data : baseTask) : Promise <baseTask>;
    abstract getAll () : Promise <baseTask[]>;
    abstract update (data : updateBaseTask) : Promise <baseTask>;
    abstract delete ( id : string | string[] | undefined ) : Promise <baseTask>;
}

export { taskAbstractInterface }
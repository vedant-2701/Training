import type { baseTask, updateBaseTask } from "./baseTask.js";


abstract class taskGeneralMethodsClass {
    abstract create (data : baseTask) : Promise <baseTask>;
    abstract getAll () : Promise <baseTask[]>;
    abstract update (data : updateBaseTask) : Promise <baseTask>;
    abstract delete ( id : string | string[] | undefined ) : Promise <baseTask>;
    abstract generateReport () : Promise <Object>;
}

export { taskGeneralMethodsClass }
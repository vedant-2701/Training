import type { NextFunction, Request, Response } from "express"
import { logError } from "./logUtil.js";

class errorHandlerClass {
    controllerWrapper = (fn : any) => {
        return (req : Request, res : Response, next : NextFunction) => {
            Promise.resolve(fn(req, res, next)).catch(next);
        }
    }
}

class validateBody {
    validate = (req : Request, res : Response, next : NextFunction) => {
        if(!req.body){
            throw new appError(400, "No body provided");
        }
    }
}

class appError extends Error {

    public status : number;

    constructor (status : number, message : string) {
        super(message);
        this.status = status;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }
}

class globaErrorHandlerClass {
    handleError = (err : any, req : Request, res : Response, next : NextFunction) => {
        logError.log(err);

        return res.status(err.status).json({
            message : err.message,
        })
    }
}

export { errorHandlerClass, appError, globaErrorHandlerClass, validateBody }

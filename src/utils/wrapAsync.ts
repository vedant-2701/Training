import type { Request, Response, NextFunction } from "express";

type AsyncController = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export const wrapAsync = (fn: AsyncController) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch(next);
    };
};
import { validateBody, errorHandlerClass, globaErrorHandlerClass } from "../utils/errorUtil.js";

const errorHandler = new errorHandlerClass();

const globalErrorHandler = new globaErrorHandlerClass();

const bodyErrorHandler = new validateBody();

export { errorHandler, globalErrorHandler, bodyErrorHandler }
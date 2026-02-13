import express from "express";
import dotenv from "dotenv";
import { connectMongoDB } from "./db/db.js";
import { userRouter } from "./router/userRouter.js";
import { taskRouter } from "./router/taskRouter.js";
import { globalErrorHandler } from "./factory/errorFactory.js";

dotenv.config();

const app = express();
app.use(express.json());

connectMongoDB();

// ---------------- USER APIs ----------------
app.use("/users", userRouter);

// ---------------- TASK APIs ----------------

app.use("/tasks", taskRouter);
// ---------------- SERVER ----------------
app.use(globalErrorHandler.handleError);

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000");
});
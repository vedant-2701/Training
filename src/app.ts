import express from "express";
import type { Request, Response, NextFunction } from "express";
import env from "./config/env.js";
import connectDB from "./config/connectDB.js";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";
import reportRoutes from "./routes/report.routes.js";

const app = express();

// ---------------- DB CONNECTION ----------------
connectDB();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/report", reportRoutes);


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    
    const { statusCode = 500, message = "Something went wrong" } = err;

    res.status(statusCode).send({ message });
});


// ---------------- SERVER ----------------
const PORT = env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on port 5000");
});

const express = require("express");
require("dotenv").config();
const { connectMongoDB } = require("./db/db");
const { userRouter } = require("./router/userRouter");
const { taskRouter } = require("./router/taskRouter");

const app = express();
app.use(express.json());

connectMongoDB();

// ---------------- USER APIs ----------------
app.use("/users", userRouter);

// ---------------- TASK APIs ----------------

app.use("/tasks", taskRouter);
// ---------------- SERVER ----------------

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000");
});
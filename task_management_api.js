const express = require("express");
const { connectMongoDB } = require("./db/db");
const { userRouter } = require("./router/userRouter");
const { taskRouter } = require("./router/taskRouter");

const app = express();
app.use(express.json());

const PORT = 5000;

connectMongoDB();

// ---------------- USER APIs ----------------
app.use("/users", userRouter);

// ---------------- TASK APIs ----------------

app.use("/tasks", taskRouter);
// ---------------- SERVER ----------------

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
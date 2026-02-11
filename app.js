require('dotenv').config();
const express = require("express");
const connectDB = require("./config/connectDB.js");
const env = require("./config/env.js");

const userRoutes = require("./routes/user.routes.js");
const taskRoutes = require("./routes/task.routes.js");
const reportRoutes = require("./routes/report.routes.js");

const app = express();

// ---------------- DB CONNECTION ----------------
connectDB();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/report", reportRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: "Something went wrong!" });
});


// ---------------- SERVER ----------------
const PORT = env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on port 5000");
});

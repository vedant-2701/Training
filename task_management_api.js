const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// ---------------- DB CONNECTION ----------------
mongoose.connect("mongodb://localhost:27017/training");

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

// ---------------- SCHEMAS ----------------

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  assignedTo: String,
  createdAt: Date,
});

const User = mongoose.model("User", UserSchema);
const Task = mongoose.model("Task", TaskSchema);

// ---------------- UTIL FUNCTIONS ----------------

function sendEmail(to, subject) {
  console.log(`Email sent to ${to} with subject ${subject}`);
}

function logActivity(message) {
  console.log("ACTIVITY LOG:", message);
}

// ---------------- USER APIs ----------------

app.post("/users", async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).send("Email required");
    }

    const user = new User(req.body);
    await user.save();

    sendEmail(user.email, "Welcome");
    logActivity("User created");

    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// ---------------- TASK APIs ----------------

app.post("/tasks", async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).send("Title is required");
    }

    const task = new Task({
      ...req.body,
      status: "OPEN",
      createdAt: new Date(),
    });

    await task.save();

    logActivity("Task created");

    if (task.assignedTo) {
      sendEmail(task.assignedTo, "Task Assigned");
    }

    res.send(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

app.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).send("Task not found");
    }

    task.status = req.body.status || task.status;
    task.title = req.body.title || task.title;

    await task.save();

    logActivity("Task updated");

    res.send(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    logActivity("Task deleted");

    res.send({ message: "Deleted" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ---------------- REPORT API ----------------

app.get("/report/tasks", async (req, res) => {
  const tasks = await Task.find();

  const report = {
    total: tasks.length,
    open: tasks.filter((t) => t.status === "OPEN").length,
    closed: tasks.filter((t) => t.status === "CLOSED").length,
  };

  res.send(report);
});

// ---------------- SERVER ----------------

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

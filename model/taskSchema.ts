import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  assignedTo: String,
  createdAt: Date,
});

const Task = mongoose.model("Task", TaskSchema);

export { Task };
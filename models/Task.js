const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  assignedTo: String,
  createdAt: Date,
});

module.exports =mongoose.model("Task", TaskSchema);
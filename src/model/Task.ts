import mongoose  from "mongoose" ;
const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  assignedTo: String,
  createdAt: Date,
});

 export default mongoose.model("Task", TaskSchema);
import mongoose, {  Model,Document } from "mongoose" ;

export interface ITask extends Document {
  title: String,
  description: String,
  status: String,
  assignedTo: String,
  createdAt: Date,
}

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  assignedTo: String,
  createdAt: Date,
});
 
const Task= mongoose.model<ITask>("Task",TaskSchema) as Model<ITask>;
 export default Task;
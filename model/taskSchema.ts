import mongoose from "mongoose";
import { ObjectId } from "mongodb";

interface TaskType {
  _id : ObjectId;
  title : string | null;
  description : string | null;
  status : string;
  assignedTo : string | null;
  createdAt : Date;
}

interface MongoTask extends TaskType, mongoose.Document{};

const TaskSchema = new mongoose.Schema<MongoTask>({
  title: { type : String, default : null },
  description: { type : String, default : null },
  status: { type : String },
  assignedTo: { type : String, default : null },
  createdAt: { type : Date },
});

const Task = mongoose.model("Task", TaskSchema);

export { Task };
export type { TaskType, MongoTask };
import mongoose from "mongoose";
import { logActivity } from "../utils/logUtil.js";

// ---------------- DB CONNECTION ----------------
const connectMongoDB = () => {

  if (!process.env.mongoDBConnection){
    logActivity("MongoDB Connection string not provided");
  }

  mongoose.connect(process.env.mongoDBConnection ?? "");

  mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
  });
}

export { connectMongoDB }
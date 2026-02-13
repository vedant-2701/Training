import mongoose from "mongoose";
import { logActivity } from "../utils/logUtil.js";

// ---------------- DB CONNECTION ----------------
const connectMongoDB = () => {

  if (!process.env.mongoDBConnection){
    logActivity.log("MongoDB Connection string not provided");
  }

  try{
    mongoose.connect(process.env.mongoDBConnection ?? "");

    mongoose.connection.on("connected", () => {
        console.log("MongoDB connected");
    });
  }catch (err : any){
    logActivity.log(`Error while connecting to mongoDB ${err}`);
  }
}

export { connectMongoDB }
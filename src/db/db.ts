import mongoose from "mongoose";
require('dotenv').config();

const url = process.env.MONGO_URL;

const dbConnection = async (): Promise<void> => {
  try {
    if (!url) {
      throw new Error("MONGO_URL is not defined in environment variables");
    }

    await mongoose.connect(url);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

export default dbConnection;

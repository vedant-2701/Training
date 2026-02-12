import mongoose from "mongoose";
import env from "./env.js";

const connectDB = async (): Promise<void> => {
    try {
        const url: string = env.MONGO_URI || "mongodb://localhost:27017/training";
        await mongoose.connect(url);
        
        console.log(`MongoDB Connected`);
    } catch (err: any) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;
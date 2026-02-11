const mongoose = require("mongoose");
const env = require("./env.js");

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(env.MONGO_URI || "mongodb://localhost:27017/training");
        
        console.log(`MongoDB Connected`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
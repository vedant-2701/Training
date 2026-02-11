const mongoose = require("mongoose");

// ---------------- DB CONNECTION ----------------
const connectMongoDB = () => {
  mongoose.connect("mongodb://localhost:27017/");

  mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
  });
}

module.exports = { connectMongoDB }
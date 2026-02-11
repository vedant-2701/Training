const mongoose = require("mongoose");

// ---------------- DB CONNECTION ----------------
const connectMongoDB = () => {
  mongoose.connect(process.env.mongoDBConnection);

  mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
  });
}

module.exports = { connectMongoDB }
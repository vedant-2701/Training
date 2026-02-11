const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const reportRoutes=require("./routes/reportRoutes");
const userRoutes=require("./routes/userRoutes");
const taskRoutes=require("./routes/taskRoutes");

require('dotenv').config();
const url = process.env.MONGO_URL;

const app = express();
app.use(bodyParser.json());


mongoose.connect(url);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

app.use('/user', userRoutes);
app.use('/',reportRoutes);
app.use('/task',taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

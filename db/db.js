const mongoose = require("mongoose");

require('dotenv').config();
const url = process.env.MONGO_URL;

const dbConnection= () =>{
mongoose.connect(url);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});
}

module.exports=dbConnection;


const express = require("express");
const bodyParser = require("body-parser");
const reportRoutes=require("./routes/reportRoutes");
const userRoutes=require("./routes/userRoutes");
const taskRoutes=require("./routes/taskRoutes");
const dbConnection=require("./db/db");


const app = express();
app.use(bodyParser.json());


dbConnection();

app.use('/user', userRoutes);
app.use('/',reportRoutes);
app.use('/task',taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

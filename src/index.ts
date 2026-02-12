import express from"express" 
import bodyParser from"body-parser" 
import reportRoutes from "./routes/reportRoutes" 
import userRoutes from"./routes/userRoutes" 
import taskRoutes from"./routes/taskRoutes" 
import dbConnection from"./db/db" 


const app = express();
app.use(bodyParser.json());


dbConnection();

app.use('/user', userRoutes);
app.use('/report',reportRoutes);
app.use('/task',taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

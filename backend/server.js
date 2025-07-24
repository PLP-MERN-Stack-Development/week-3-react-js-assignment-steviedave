import express from 'express';
import dotenv from 'dotenv';
import todosRoutes from "./routes/todo.route.js";
import { connectDB } from "./config/db.js";

dotenv.config();


const app = express();

app.use(express.json())

app.use("/api/todos", todosRoutes);


app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});


import express, { json } from "express";
import dotenv from "dotenv";
import { dbConnected } from "./db/db.js";
import { userRoutes } from "./routes/user.routes.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
dbConnected();
app.use('/v1/api', userRoutes)
// server listed

app.listen(PORT, () => {
  console.log(`server is running port ${PORT}\n http://localhost:${PORT}`);
});

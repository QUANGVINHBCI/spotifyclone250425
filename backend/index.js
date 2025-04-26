import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
//
dotenv.config();

const app = express();

// using middlewares
app.use(express.json());
app.use(cookieParser);

//
const port = process.env.PORT;

// import routes
import userRoutes from "./routes/userRoutes.js";
import connectDb from "./database/db.js";

// using routes
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server khởi chạy trên http:localhost:${port}`);
  // Connect MongoDB
  connectDb();
});

// import đối tượng express js
import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";

//
dotenv.config();

// khai báo biến app cho ứng dụng
const app = express();

// khai báo port cho ứng dụng
const port = process.env.PORT;

// import routes
import userRoutes from "./routes/userRoutes.js";
// using routes
app.use("/api/user", userRoutes); // đường dẫn cho user

// Sử dụng listen() để khởi động server và lắng nghe các yêu cầu HTTP được gửi đến PORT
app.listen(port, () => {
  console.log(`Server is running on HTTP://localhost:${port}`);
  // Kết nối đến CSDL trên mongoDB
  connectDb();
});

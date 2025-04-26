1. Bước 1

- Tạo các folder cần thiết: frontend, backend
- Khởi tại server cho dự án sử dụng: npm init -y
- Cài đặt các thư viện cần thiết sử dụng cho backend
  npm i express mongoose jsonwebtoken bcrypt cookie-parser dotenv
  npm i -D nodemon
- Thêm 'type': 'module' vào file package.json ; 'start': 'node server.js' vào phần scripts trong file package.json
- Tạo server.js trong thư mục backend
  Sửa đường dẫn: node backend/server.js
  Thêm vào scripts: 'dev':'nodemon backend/server.js

- Cài đặt các thư viện cần thiết sử dụng cho frontend

2. Bước 2

# Code tại server.js

- Khai báo các nội dung cần thiết:

// import đối tượng express js
import express from "express";

// khai báo biến app cho ứng dụng
const app = express();

// khai báo port cho ứng dụng
const port = process.env.PORT;

// Sử dụng listen() để khởi động server và lắng nghe các yêu cầu HTTP được gửi đến PORT
app.listen();

- Tạo biến môi trường .env và khai báo PORT = 4000
- import đối tượng dotenv -> dotenv.config()
- Khởi chạy server: npm run dev

3. Bước 3

- Khởi tạo dự án tạo frontend
- Chọn thư mục cd frontend
- Chạy lệnh tạo dự án: npm create vite@latest ./.
- Chạy lệnh: npm install

4. Bước 4: 0:18:00

- Cài đặt thư viện tailwind css: npm install tailwindcss @tailwindcss/vite
- Cấu hình tailwindcss v4 cho ứng dụng

5. Bước 5: Xử lý chức năng đăng nhập/ đăng ky phía backend

- Tạo thư mục routes trên backend để định tuyến cho phía backend
- Tạo userRoutes.js -> code cho userRoutes.js
- Import và sử dụng đối tượng userRoutes trong server.js

6. Bước 6: Kết nối backend với CSDL

- Tạo thư mục database -> file db.js để kết nối CSDL
- Viết hàm kết nối csdl bất đồng bộ
- Khai báo biến môi trường MONGO_URI trong file .env
- Truy cập cloud.mongodb.com -> connect -> copy URI
- Tại server.js import connectDb và sử dụng

7. Bước 7: Tạo Schema - cấu trúc dữ liệu cho CSDL -> user

- Tạo thư mục models -> User.js
- Định nghĩa một schema cho CSDL tại file User.js

8. Bước 8: Tạo các xử lý logic cho ứng dụng: GET, POST, PUT, DELETE...

- Tạo thư mục controllers -> file userControllers.js
- Tạo các xứ lý logic cho User:
- Tạo thư mục utils -> file TryCatch.js -> viết hàm xử lý TryCatch
- Tạo thêm file generateToken.js ->

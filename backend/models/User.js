// import đối tượng mongoose
import mongoose from "mongoose";

// Định nghĩa schema - cấu trúc dữ liệu cho User
const schema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: { type: String, default: "user" },
    playlist: [
      {
        type: String,
        require: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", schema);

/**
    Schema: Định nghĩa cấu trúc dữ liệu cho một document trong MongoDB.
    Model: Đại diện cho một collection trong MongoDB, cung cấp các phương thức để thao tác với dữ liệu.
    Mục đích: Đoạn mã này định nghĩa một model User để lưu trữ thông tin người dùng, bao gồm:
    name: Tên người dùng.
    email: Email (duy nhất).
    password: Mật khẩu.
    role: Vai trò (mặc định là "user").
    playlist: Danh sách các chuỗi liên quan đến playlist của người dùng.
 */

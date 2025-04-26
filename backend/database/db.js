// import mongoose
import mongoose from "mongoose";

// tạo hàm kết nối csdl bất đồng bộ
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "SpotifyClone250425",
    });
    console.log("MongoDB Connected - Như Lương");
  } catch (error) {
    console.error(error);
  }
};

export default connectDb;

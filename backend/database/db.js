//
import mongoose from "mongoose";

//
const connectDb = async () => {
  try {
    //
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "SpotifyClone250425",
    });
    console.log("MongoDB Connected - Như Lương");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;

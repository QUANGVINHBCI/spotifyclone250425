//
import mongoose from "mongoose";

//
const schema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
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

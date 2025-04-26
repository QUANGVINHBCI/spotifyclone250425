import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
import TryCatch from "../utils/TryCatch.js";

// registerUser
export const registerUser = TryCatch(async (req, res) => {
  const { name, email, password } = req.body;

  //
  let user = await User.findOne({ email });

  //
  if (user) {
    return res.status(400).json({
      message: "User Already Exits",
    });
  }
  //
  const hashPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  // generateToken
  generateToken(user._id, res);
  res.status(201).json({
    user,
    message: "User Registered",
  });
});

// userLogin
export const userLogin = TryCatch(async (req, res) => {
  const { email, password } = req.body;

  //
  const user = await User.findOne({ email });

  //
  if (!user) {
    return res.status(400).json({
      message: "No User Exits",
    });
  }
  //
  const comparePassword = await bcrypt.compare(password, user.password);

  //
  if (!comparePassword) {
    return res.status(400).json({
      message: "Wrong Password",
    });
  }

  // generateToken
  generateToken(user._id, res);
  res.status(200).json({
    user,
    message: "User LoggedIN",
  });
});

// export const myProfile
export const myProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json(user);
});

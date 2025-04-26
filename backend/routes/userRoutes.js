//
import express from "express";
import {
  logoutUser,
  myProfile,
  registerUser,
  userLogin,
} from "../controllers/userControllers.js";
import { isAuth } from "../middlewares/isAuth.js";

//
const router = express.Router();

// post
router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/me", isAuth, myProfile);
router.get("/logout", isAuth, logoutUser);
//
export default router;

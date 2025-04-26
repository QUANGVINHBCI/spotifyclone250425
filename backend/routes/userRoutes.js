//
import express from "express";
import {
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
//
export default router;

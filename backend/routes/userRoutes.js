//
import express from "express";
import { registerUser, userLogin } from "../controllers/userControllers.js";

//
const router = express.Router();

// post
router.post("/register", registerUser);
router.post("/login", userLogin);
//
export default router;

import express from "express";
import { Login, Register, Logout, Me } from "../controllers/Auth.js";

const router = express.Router();

router.get("/me", Me);
router.post("/register", Register);
router.post("/login", Login);
router.delete("/logout", Logout);

export default router;

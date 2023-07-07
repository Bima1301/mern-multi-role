import express from "express";
import { Login, Register, Logout, Me } from "../controllers/Auth.js";
import passport from "../config/Pasport.js";
const router = express.Router();

router.get("/me", Me);
router.post("/register", Register);
router.post("/login", Login);
router.delete("/logout", Logout);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.APP_FRONTEND_URL + "/dashboard",
    failureRedirect: process.env.APP_FRONTEND_URL + "/login",
  })
);

export default router;

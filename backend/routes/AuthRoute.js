import express from "express";
import {
  Login,
  Register,
  Logout,
  Me,
  loginWithGoogle,
} from "../controllers/Auth.js";
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

router.get("/auth/google/callback", loginWithGoogle, (req, res) => {
  // Setelah autentikasi berhasil, pengguna akan masuk dan data pengguna akan ada di req.user
  // Di sini Anda dapat mengarahkan pengguna ke halaman dashboard atau melakukan hal lain sesuai kebutuhan
  res.redirect(process.env.APP_FRONTEND_URL + "/dashboard");
});

export default router;

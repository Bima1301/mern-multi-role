import express from "express";
import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getRole,
} from "../controllers/User.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/users", verifyUser, adminOnly, getUser);
router.get("/user/:id", verifyUser, adminOnly, getUserById);
router.get("/roles", verifyUser, adminOnly, getRole);
router.post("/user", verifyUser, adminOnly, createUser);
router.patch("/user/:id", verifyUser, adminOnly, updateUser);
router.delete("/user/:id", verifyUser, adminOnly, deleteUser);

export default router;

import express from "express";
import {
  getHomeSection,
  createHomeSection,
  updateHomeSection,
} from "../controllers/ProfileSection/Home.js";

import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

// START HOME SECTION
router.get("/dashboard/home", verifyUser, getHomeSection);
router.post("/dashboard/home", verifyUser, createHomeSection);
router.patch("/dashboard/home/:id", verifyUser, updateHomeSection);
// END HOME SECTION

export default router;

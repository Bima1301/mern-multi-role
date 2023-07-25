import express from "express";
import {
  getHomeSection,
  createHomeSection,
  updateHomeSection,
} from "../controllers/ProfileSection/Home.js";

import { createAboutSection } from "../controllers/ProfileSection/About.js";

import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

// START HOME SECTION
router.get("/dashboard/home", verifyUser, getHomeSection);
router.post("/dashboard/home", verifyUser, createHomeSection);
router.patch("/dashboard/home/:id", verifyUser, updateHomeSection);
// END HOME SECTION

// START ABOUT SECTION
// router.get("/dashboard/about", verifyUser, getAboutSection);
router.post("/dashboard/about", verifyUser, createAboutSection);
// router.patch("/dashboard/about/:id", verifyUser, updateAboutSection);
// END ABOUT SECTION

export default router;

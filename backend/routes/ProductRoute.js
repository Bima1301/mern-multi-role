import express from "express";
import {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/Product.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/products", verifyUser, getProduct);
router.get("/product/:id", verifyUser, getProductById);
router.post("/product", verifyUser, createProduct);
router.patch("/product/:id", verifyUser, updateProduct);
router.delete("/product/:id", verifyUser, deleteProduct);

export default router;

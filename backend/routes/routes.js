import express from "express";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/Products.js";

import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from "../controllers/Categories.js";

const router = express.Router();

// products
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

// categories
router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);
router.post("/categories", createCategory);
router.patch("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

export default router;

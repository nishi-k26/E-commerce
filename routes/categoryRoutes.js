import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  CategoryController,
  CreateCategoryController,
  DeleteCategoryController,
  SingleCategoryController,
  UpdateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  CreateCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  UpdateCategoryController
);

//getAll category
router.get("/get-category", CategoryController);

//single category
router.get("/single-category/:slug", SingleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  DeleteCategoryController
);

export default router;

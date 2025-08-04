import express from "express";
import {
  getAllClothingItems,
  getClothingItemById,
  createClothingItem,
} from "../controllers/clothingItemController.js";

const router = express.Router();

router.get("/", getAllClothingItems);
router.get("/:id", getClothingItemById);
router.post("/", createClothingItem);

export default router;

import express from "express";
import {
  getRecommendationsForUser,
  createRecommendation,
} from "../controllers/recommendationController.js";

const router = express.Router();

// GET /api/recommendations/:userId
router.get("/:userId", getRecommendationsForUser);

// POST /api/recommendations
router.post("/", createRecommendation);

export default router;

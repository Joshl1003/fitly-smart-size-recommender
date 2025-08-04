import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getRecommendationsForUser = async (req, res) => {
  const userId = parseInt(req.params.userId);

  try {
    const recommendations = await prisma.fitRecommendation.findMany({
      where: { userId },
      include: { clothingItem: true },
    });

    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recommendations" });
  }
};

export const createRecommendation = async (req, res) => {
  const { userId, clothingItemId, fitScore, notes } = req.body;

  try {
    const recommendation = await prisma.fitRecommendation.create({
      data: {
        userId: Number(userId),
        clothingItemId: Number(clothingItemId),
        fitScore,
        notes,
      },
    });

    res.status(201).json(recommendation);
  } catch (err) {
    res.status(500).json({ error: "Failed to create recommendation" });
  }
};

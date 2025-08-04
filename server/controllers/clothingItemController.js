import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllClothingItems = async (req, res) => {
  try {
    const items = await prisma.clothingItem.findMany();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch clothing items" });
  }
};

export const getClothingItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await prisma.clothingItem.findUnique({ where: { id: Number(id) } });
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch item" });
  }
};

export const createClothingItem = async (req, res) => {
  try {
    const newItem = await prisma.clothingItem.create({ data: req.body });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to create item" });
  }
};

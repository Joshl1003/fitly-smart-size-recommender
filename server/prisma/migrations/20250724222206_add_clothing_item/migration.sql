-- CreateTable
CREATE TABLE "ClothingItem" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "sizeLabel" TEXT NOT NULL,
    "chest" INTEGER,
    "waist" INTEGER,
    "length" INTEGER,
    "hips" INTEGER,
    "fitType" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "ClothingItem_pkey" PRIMARY KEY ("id")
);

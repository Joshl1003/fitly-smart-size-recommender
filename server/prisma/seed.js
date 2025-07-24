const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
  // Create fake user profile
  const user = await prisma.user.create({
    data: {
      email: "demo@fitly.com",
      passwordHash: "hashed_pw_here",
      name: "Demo User",
      profile: {
        create: {
          height: 175,
          weight: 70,
          chest: 95,
          waist: 80,
          hips: 95,
          fitPreference: "perfect"
        }
      }
    }
  })

  // Create a fake product with size chart
  const product = await prisma.product.create({
    data: {
      name: "Relaxed Fit T-Shirt",
      brand: "Uniqlo",
      category: "Tops",
      productUrl: "https://uniqlo.com/item123",
      sizeChart: {
        createMany: {
          data: [
            { size: "S", chest: 88, waist: 76 },
            { size: "M", chest: 94, waist: 82 },
            { size: "L", chest: 100, waist: 88 }
          ]
        }
      }
    }
  })
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())

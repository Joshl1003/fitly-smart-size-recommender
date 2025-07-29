import { PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient()

async function main() {
  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        passwordHash: faker.string.alphanumeric(20),
        profile: {
          create: {
            height: faker.number.int({ min: 150, max: 200 }),
            weight: faker.number.int({ min: 45, max: 120 }),
            chest: faker.number.int({ min: 80, max: 120 }),
            waist: faker.number.int({ min: 60, max: 100 }),
            hips: faker.number.int({ min: 85, max: 120 }),
            fitPreference: faker.helpers.arrayElement(["perfect", "cropped", "oversized"]),
          }
        }
      }
    })

    await prisma.clothingItem.create({
      data: {
        brand: faker.company.name(),
        name: faker.commerce.productName(),
        type: faker.helpers.arrayElement(["shirt", "pants", "jacket", "dress"]),
        gender: faker.helpers.arrayElement(["men", "women", "unisex"]),
        sizeLabel: faker.helpers.arrayElement(["XS", "S", "M", "L", "XL"]),
        chest: faker.number.int({ min: 85, max: 110 }),
        waist: faker.number.int({ min: 65, max: 95 }),
        hips: faker.number.int({ min: 85, max: 110 }),
        length: faker.number.int({ min: 50, max: 120 }),
        category: faker.helpers.arrayElement(['casual', 'formal', 'sportswear']),
        fitType: faker.helpers.arrayElement(['perfect', 'cropped', 'oversized']),
        url: faker.image.urlPicsumPhotos({ width: 300, height: 400 }),
      }
    })
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })


// const { PrismaClient } = require("@prisma/client")
// const prisma = new PrismaClient()

// async function main() {
//   // Create fake user profile
//   const user = await prisma.user.create({
//     data: {
//       email: "demo@fitly.com",
//       passwordHash: "hashed_pw_here",
//       name: "Demo User",
//       profile: {
//         create: {
//           height: 175,
//           weight: 70,
//           chest: 95,
//           waist: 80,
//           hips: 95,
//           fitPreference: "perfect"
//         }
//       }
//     }
//   })

//   // Create a fake product with size chart
//   const product = await prisma.product.create({
//     data: {
//       name: "Relaxed Fit T-Shirt",
//       brand: "Uniqlo",
//       category: "Tops",
//       productUrl: "https://uniqlo.com/item123",
//       sizeChart: {
//         createMany: {
//           data: [
//             { size: "S", chest: 88, waist: 76 },
//             { size: "M", chest: 94, waist: 82 },
//             { size: "L", chest: 100, waist: 88 }
//           ]
//         }
//       }
//     }
//   })
// }

// main()
//   .catch(e => console.error(e))
//   .finally(() => prisma.$disconnect())

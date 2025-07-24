const express = require("express")
const cors = require("cors")
require("dotenv").config()
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})


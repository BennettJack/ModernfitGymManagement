import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({ data: { FirstName: "Test", LastName: "User", Username: "TestUser", Password: "Pass", Pin: 1234, Email: "testuser@test.com", Location: "Sheff" } })
    console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

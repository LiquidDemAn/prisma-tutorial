import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.findMany({
    where: {
      email: { not: "dima@test.com" },
    },
  });
  console.log(user);
}

main()
  .catch((err) => console.error(err.message))
  .finally(async () => await prisma.$disconnect());

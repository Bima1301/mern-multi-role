import { PrismaClient } from "@prisma/client";
import { roles } from "./role.js";

const prisma = new PrismaClient();

async function main() {
  for (let role of roles) {
    await prisma.role.create({
      data: role,
    });
  }
}
main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

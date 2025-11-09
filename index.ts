import { PrismaClient } from "./generated/prisma/client";

const db = new PrismaClient()

async function main() {
  const users = await db.user.createManyAndReturn({
    data: [
      { name: 'Ray', email: 'ray@gmail.com' },
      { name: 'Gabriel', email: 'gabriel@gmail.com' }
    ]
  })
  console.log(users);
}


main()
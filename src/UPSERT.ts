import { PrismaClient } from "../generated/prisma/client";

const db = new PrismaClient()

async function upsertDB() {
    /**
     * Si al buscar un usuario no lo encuentra lo creara
     * y si existe lo va actualizar
     */
    const user = await db.user.upsert({
        where: { email: "ryan@gmail.com" },
        create: { email: "ryan@gmail.com", name: "Ryan" },
        update: { lastName: "Test Upgrate" }
    })
    console.log(user)
}


upsertDB()
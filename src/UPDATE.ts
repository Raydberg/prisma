import { PrismaClient } from "../generated/prisma/client";

const db = new PrismaClient()

async function updateDB() {
    const userUpate = await db.user.update({
        where: { id: 2 },
        data: {
            email: "bod@gmail.com"
        }
    })
    console.log(userUpate)
}


updateDB()
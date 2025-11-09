import { PrismaClient } from "../generated/prisma/client";

const db = new PrismaClient()

async function deleteDB() {
    /**
     * Elimina y devuelve al usuario eliminado
     */
    try {
        const user = await db.user.delete({
            where: { id: 1 }
        })
        console.log(user);
    } catch (error) {
        console.error((error as Error).message)
    }
}


deleteDB()
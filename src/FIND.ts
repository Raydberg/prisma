import { PrismaClient } from "../generated/prisma/client";

const db = new PrismaClient()

async function find() {
    /**
     * Devuelve todo los usuarios
     */
    const usersMany = await db.user.findMany()

    const usersMany2 = await db.user.findMany({
        orderBy: {
            id: 'desc'
        }
    })

    const usersMany3 = await db.user.findMany({
        where: {
            email: {
                endsWith: "@prisma.io"
            }
        }
    })

    /**
     * Hacer consultas en base a la condicion dada
     */
    //? WHERE
    // const user = await db.user.findFirst({
    //     where: { id: 1 }
    // })
    //? OR
    const user = await db.user.findFirst({
        where: {
            OR: [
                { id: 3 },
                { email: "ryan@gmail.com" }
            ]
        }
    })


    //?RELACIONES
    //* Incluir los post en la consulta
    const userPost = await db.user.findMany({
        include: {
            posts: true
        }
    })

    console.log(userPost.forEach(user=>{
        
    }));
}


find()
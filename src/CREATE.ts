import { PrismaClient } from "../generated/prisma/client";

const db = new PrismaClient()

async function create() {
    /**
     * Crea varios usuario y los retorna
     */


    const usersReturn = await db.user.createManyAndReturn({
        data: [
            { name: 'Ray', email: 'ray@gmail.com' },
            { name: 'Gabriel', email: 'gabriel@gmail.com' }
        ],
        skipDuplicates: true
    })

    /**
     * Crea varios usuarios y solo retorna la cantidad
     */
    const users = await db.user.createMany({
        data: [
            { name: 'Ray', email: 'ray@gmail.com' },
            { name: 'Gabriel', email: 'gabriel@gmail.com' }
        ]
    })


    /**
     * Solo crea un usuario y retorna
     */
    const user = await db.user.create({
        data: { name: "test", email: "test@gmail.com" }
    })
    //? RELACIONES
    //? Creacion de un post con un usuario
    const post = await db.post.create({
        data: {
            title: "Publicacion 1",
            content: "El primer post",
            // authorId: user.id,
            author: {
                connect: {
                    id: user.id
                }
            }
        }
    })

    const userPost = await db.user.create({
        data: {
            name: "donna",
            email: "donna@gmail.com",
            posts: {
                create: {
                    title: "Mi segunda publicacion",
                    content: "Prisma doc"
                }
            }
        }
    })

    console.log(user)

}


create()
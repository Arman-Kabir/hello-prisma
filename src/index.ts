import { PrismaClient } from "@prisma/client";
import express, { Application } from "express";
import cors from 'cors';

const app: Application = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }))

const prisma = new PrismaClient();
const port = process.env.PORT || 3003;


async function main() {
    app.listen(port, () => {
        
    })
    // const getAllUsers = await prisma.user.findMany();
    // console.log(getAllUsers);
    // const postUser = await prisma.user.create({
    //     data:{
    //         email:'fahim2@ph.com',
    //         name:"fahim2",
    //         age:34
    //     }
    // });
    // console.log(postUser);

}

main();
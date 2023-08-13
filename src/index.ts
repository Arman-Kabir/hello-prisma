import { PrismaClient } from "@prisma/client";
import app from './app';

const prisma = new PrismaClient();
const port = process.env.PORT || 3003;


async function main() {
    app.listen(port, () => {
        console.log(`server running at ${port}`);
    })
}

main();



//////////////////////
//basic code to practice to understand prisma
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
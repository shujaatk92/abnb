import { getServerSession } from "next-auth/next";
import prisma from "@/app/libs/prismadb"

import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function getSession(){
    return await getServerSession(authOptions);
}
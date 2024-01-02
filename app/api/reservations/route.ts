import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request){
    
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return new NextResponse("Unauthorized", {status: 401})
    }

    const body = await request.json();

    const { listingId, totalPrice, startDate, endDate } = body;

    if(!listingId || !totalPrice || !startDate || !endDate){
        return new NextResponse("Something went wrong!", {status: 500});
    }

    const listingAndReservation = await prisma.listing.update({
        where:{
            id: listingId
        },
        data:{
            reservations:{
                create:{
                    userId: currentUser.id,
                    startDate,
                    endDate,
                    totalPrice
                }
            }
        }
    });

    return NextResponse.json(listingAndReservation);
}
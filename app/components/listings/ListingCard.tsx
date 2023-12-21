"use client"

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client"
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from "date-fns"
import Image from "next/image";
import HeartButon from "../HeartButon";

interface ListingCardProps {
    data: Listing;
    reservation?: Reservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
}
const ListingCard: React.FC<ListingCardProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser,
}) => {

    const router = useRouter();
    const { getByValue } = useCountries();
    const location = getByValue(data.locationValue);

    const handleCancle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if(disabled){
           return; 
        }

        onAction?.(actionId);

    }, [disabled, actionId, onAction]);

    const price = useMemo(() => {

        if(reservation){
            return reservation.totalPrice;
        }

        return data.price;

    }, [data.price, reservation]);

    const reservationDate = useMemo(() => {
        if(!reservation){
            return null;
        }

        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);

        return `${format(start, 'PP')} - ${format(end, 'PP')}`

    }, [reservation]);

    return(
        <div 
        onClick={() => router.push(`/listings/${data.id}`)}
        className="col-span-1 cursor-pointer group
        ">
            <div className="flex flex-col gap-2 w-full">
                <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                    <Image 
                    width={100}
                    height={100}
                    src={data.imageSrc}
                    alt="listing"
                    className="h-full w-full group-hover:scale-110 transition object-cover"
                    />
                    <div className="absolute top-3 right-3">
                    <HeartButon 
                    listingId={data.id}
                    currentUser={currentUser}
                    />
                    </div>
                </div>
                <div className="font-semibold font-lg">
                    {location?.region}, {location?.label}
                </div>
                <div className="font-light text-neutral-500">
                    {reservationDate || data.category}
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <div className="font-semibold">
                        $ {price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingCard
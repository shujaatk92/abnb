"use client"

import Heading from "@/app/components/Heading";
import HeartButon from "@/app/components/HeartButon";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import Image from "next/image";

interface ListingHeadProps {
    title: string;
    imageSrc: string;
    locationValue: string;
    id: string;
    currentUser?: SafeUser | null;
}
const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    imageSrc,
    locationValue,
    id,
    currentUser
}) => {

    const {getByValue}  = useCountries();
    const location = getByValue(locationValue);

    return(
        <>
        <Heading 
        title={title}
        subtitle={`${location?.region}, ${location?.label}`} 
        />
        <div className="w-full h-[60vh] relative overflow-hidden rounded-xl">
            <Image
            fill
            src={imageSrc}
            alt="image"
            className="object-cover w-full"
            />
            <div className="absolute top-5 right-5">
            <HeartButon 
            listingId={id}
            currentUser={currentUser}
            />
            </div>
        </div>
        </>
    )
}
export default ListingHead
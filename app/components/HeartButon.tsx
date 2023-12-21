"use client"
import { SafeUser } from "../types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

interface HeartButonProps {
    currentUser?: SafeUser | null;
    listingId: string;
}

const HeartButon: React.FC<HeartButonProps> = ({
    currentUser,
    listingId,
}) => {

    const hasFavorited = false;
    const toggleFavorite = () => {};

    return(
        <div onClick={toggleFavorite}
        className="relative hover:opacity-80 cursor-pointer transition"
        >
            <AiOutlineHeart 
            size={28}
            className="fill-white absolute -top-[2px] -right-[2px]"
            />
            <AiFillHeart
            size={24}
            className={
                hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'
            }
            />
        </div>
    )
}

export default HeartButon
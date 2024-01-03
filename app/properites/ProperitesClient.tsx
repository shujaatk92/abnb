"use client"
import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeListing, SafeUser } from "../types"
import { useCallback, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";

interface ProperitesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

export const ProperitesClient = ({listings, currentUser}: ProperitesClientProps) => {

    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onCancle = useCallback((id: string) => {

        setDeletingId(id);
        axios.delete(`/api/listings/${id}`)
        .then(() => {
            toast.success("Listing Deleted!");
            router.refresh();
        })
        .catch((error) => {
            toast.error(error?.response?.data?.error);
        })
        .finally(() => {
            setDeletingId('');
        })

    },[router]);

    return(
        <Container>
            <Heading 
            title="Properites"
            subtitle="List of your properites."
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {listings.map((listing) => (
                    <ListingCard 
                    key={listing.id}
                    data={listing}
                    actionId={listing.id}
                    onAction={onCancle}
                    disabled={deletingId === listing.id}
                    actionLabel="Delete Properity"
                    currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    )
}
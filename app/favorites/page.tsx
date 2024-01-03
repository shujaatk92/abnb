import getCurrentUser from "../actions/getCurrentUser";
import getFavoritesListings from "../actions/getFavoritelistings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import { FavoritesClient } from "./FavoritesClient";



const FavoritesPage = async () => {

    const listings = await getFavoritesListings();
    const currentUser = await getCurrentUser();

    if(!listings){
        return(
            <ClientOnly>
                <EmptyState 
                title="No favorites found."
                subtitle="Looks like you have no favorites listings."
                />
            </ClientOnly>
        )
    }
    return(
        <ClientOnly>
            <FavoritesClient 
            listings={listings}
            currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default FavoritesPage;
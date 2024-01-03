import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import { ProperitesClient } from "./ProperitesClient";
import getListing from "../actions/getListing";

const ProperitesPage = async() => {
    const currentUser = await getCurrentUser();
    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState 
                title="Unauthorized"
                subtitle="Please login"
                />
            </ClientOnly>
        )
    }
    const listings = await getListing({
        userId: currentUser.id
    });
    if(listings.length === 0){
        return(
            <ClientOnly>
                <EmptyState 
                title="No properites found."
                subtitle="Looks like you have no properites!"
                />
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <ProperitesClient 
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default ProperitesPage
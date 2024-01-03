import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import { ReservationsClient } from "./ReservationsClient";


const ReservationsPage = async () => {

    const currentUser = await getCurrentUser();

    if(!currentUser){
        <ClientOnly>
            <EmptyState 
            title="Unauthorized!"
            subtitle="Please login"
            />
        </ClientOnly>
    }

    const reservations = await getReservations(
        {authorId: currentUser?.id});

        if(reservations.length === 0){
            return(
                <ClientOnly>
                    <EmptyState 
                    title="Noreservations found."
                    subtitle="Looks like you have no reservation on your properties."
                    />
                </ClientOnly>
            );
        }

        return(
            <ReservationsClient 
            reservations={reservations}
            currentUser={currentUser}
            />
        )
}

export default ReservationsPage;
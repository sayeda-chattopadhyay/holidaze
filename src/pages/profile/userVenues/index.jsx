import VenueCardCretedByHost from "../usersVenue"; 
import { useVenues } from "../../../context/useVenues";

export default function UserVenues() {
	const { venues } = useVenues();
	return venues.map((venue) => <VenueCardCretedByHost userVenue={venue} key={venue.id} />);
}

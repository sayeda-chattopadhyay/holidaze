import { useParams } from "react-router-dom";
import ApiHook from "../../hooks/ApiHook";
import { VENUES_URL } from "../../constants/index";
import VenueDetails from "../specificVenue/VenueDetails";

const qs = "?_owner=true&_bookings=true";

const SpecificVenue = () => {
  const { id } = useParams();

  const {
    data: venue,
    isLoading,
    isError,
  } = ApiHook(`${VENUES_URL}/${id}${qs}`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="mt-20">
      <VenueDetails venue={venue} />
    </div>
  );
};

export default SpecificVenue;

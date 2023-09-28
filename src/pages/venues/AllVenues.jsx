import { useState } from "react";
import ApiHook from "../../hooks/ApiHook";
import { VENUES_URL } from "../../constants";
import Card from "../../components/cards/Card";
import SearchVenues from "../../components/search/SearchVenues";
import LoadingIndicator from "../../components/ui/LoadingIndicator";
import ErrorMessage from "../../components/ui/ErrorMessage";

const venuesLimit = 90;
const qs = `?sort=created&sortOrder=desc&&_owner=true&_bookings=true&limit=${venuesLimit}`;
//const qs = "?sort=created&sortOrder=Desc&&_owner=true&_bookings=true"; // this code is to check error message
const allVenuesUrl = VENUES_URL + qs;
// const allVenuesUrl = VENUES_URL + "?sort=created&sortOrder=desc&&_owner=true&_bookings=true";

const AllVenues = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError, errorMessage } = ApiHook(allVenuesUrl);

  if (isLoading) {
    return (
      <div>
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="px-10 py-10">
        <ErrorMessage message={errorMessage.message} />
      </div>
    );
  }

  const venues = data;

  const filteredVenues = venues.filter((venue) => {
    return search.toLowerCase() === ""
      ? true // Return true for all products if search is empty
      : venue.name.toLowerCase().includes(search.toLowerCase()) ||
          venue.location.city.toLowerCase().includes(search.toLowerCase()) ||
          venue.location.country.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <SearchVenues onSearch={setSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-start px-10 py-10 ">
        {filteredVenues.length === 0 ? (
          <div className="mx-auto text-center text-2xl font-bold ">
            No results found
          </div>
        ) : (
          filteredVenues.map((venue) => <Card key={venue.id} venue={venue} />)
        )}
      </div>
    </>
  );
};

export default AllVenues;

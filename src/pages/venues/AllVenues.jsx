import { useState } from "react";
import ApiHook from "../../hooks/ApiHook";
import { VENUES_URL } from "../../constants";
import Card from "../../components/cards/Card";
import SearchVenues from "../../components/search/SearchVenues";

const AllVenues = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = ApiHook(VENUES_URL);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center mt-10 border-4 border-green-800 px-10 py-10 ">
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

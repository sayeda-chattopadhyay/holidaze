// import { useState } from "react"
import ApiHook from "../../hooks/ApiHook";
import { VENUES_URL } from "../../constants";
import Card from "../../components/cards/Card";

const AllVenues = () => {
  const { data, isLoading, isError } = ApiHook(VENUES_URL);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const venues = data;

  console.log(venues);

  return (
    <>
      <div className="search"> Search</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center mt-10 border-4 border-green-800 px-10 py-10 ">
        {venues.map((venue, index) => (
          <Card key={index} venue={venue} />
        ))}
      </div>
    </>
  );
};

export default AllVenues;
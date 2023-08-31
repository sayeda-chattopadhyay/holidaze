const VenueDetails = ({ venue }) => {
  const {
    name,
    description,
    media,
    price,
    maxGuests,
    rating,
    created,
    updated,
    meta,
    location,
    owner,
    bookings,
  } = venue;
  console.log(venue);
  return (
    <div>
      <img className="w-full h-64 object-cover" src={media[0]} alt="Venue" />
      <div className="px-6 py-4 border border-b-gray-200">
        <h5 className="font-bold text-xl mb-2">{name}</h5>

        <p className="text-gray-700">Address: {location.address}</p>
        <p className="text-gray-700">City : {location.city}</p>
        <p className="text-gray-700">Country:{location.country}</p>
        <ul className="text-gray-700 ">
          {Object.entries(meta).map(([key, value]) => (
            <li key={key}>{value ? `${key}: Yes` : `${key}: No`}</li>
          ))}
        </ul>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-between">
        <div className="text-xl font-semibold">${price} / night</div>
      </div>
    </div>
  );
};

export default VenueDetails;

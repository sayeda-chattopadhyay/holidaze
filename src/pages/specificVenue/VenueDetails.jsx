import { FaWifi } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaPaw } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';

const VenueDetails = ({ venue }) => {
  const {
    id,
    description,
    maxGuests,
    name,
    media,
    price,
    location,
    meta,
    owner,
    rating,
  } = venue;
  console.log(venue);
  return (
    <div key={id}>
      <img className="w-full h-64 object-cover" src={media[0]} alt={name} />
      <div className="container mx-auto px-4 py-4 border border-red-600 flex-col md:flex md:flex-row justify-between mt-4">
        <div className="px-6 py-4 border border-b-gray-200">
          <h2 className="font-bold text-xl mb-2">{name.toUpperCase()}</h2>
          <h6>{price} nok/ night</h6>
          <p className="text-gray-700">Max Guests: {maxGuests}</p>
          <div>
            <h2 className="font-bold text-xl mb-2">Description</h2>
            <p>{description}</p>
          </div>
          <div>
            <h2>Address</h2>
            <p className="text-gray-700">Address: {location.address}</p>
            <p className="text-gray-700">City : {location.city}</p>
            <p className="text-gray-700">Country:{location.country}</p>
            <p className="text-gray-700">Continent:{location.continent}</p>
          </div>
          <div>
            <h2>Info</h2>
            <div className="flex gap-6 my-4">
            {meta.breakfast ? <FaUtensils /> : null}
            {meta.wifi ? <FaWifi /> : null}
            {meta.pets ? <FaPaw/> : null}
            {meta.parking ? <FaCar/> : null}
            </div> 

          </div>
          <div>
            <h2>Owner Details</h2>
            <img src={owner.avatar} alt={owner.name} />
            <p className="text-gray-700">Owner Name: {owner.name}</p>
            <p className="text-gray-700">Owner Name: {owner.email}</p>
          </div>
        </div>
        <div className="px-6 py-4 border border-b-gray-200">
          <h2>calender component</h2>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;

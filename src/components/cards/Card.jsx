import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ venue }) => {
  const { id, name, price, location, media, meta } = venue;
  console.log(venue);
  // console.log(id);

  // const qs = "?_owner=true&_bookings=true"

  return (
    <div className="container mx-auto mt-8 border border-red-500">
      <Link
        to={`/Venues/${id}`}
        className="max-w-sm rounded overflow-hidden shadow-md hover:bg-slate-100 hover:shadow-lg bg-red-400 transition duration-300 transform hover:-translate-y-1"
      >
        <img className="w-full h-64 object-cover" src={media[0]} alt="{name}" />
        <div className="px-6 py-4 border border-b-gray-200">
          <h5 className="font-bold text-xl mb-2">{name.toUpperCase()}</h5>

          <p className="text-gray-700">
            Location: {location.address}, {location.city}, {location.country}
          </p>
          <ul className="text-gray-700 mt-2">
            {Object.entries(meta).map(([key, value]) => (
              <li key={key} className="flex items-center">
                {value ? `${key}: Yes` : `${key}: No`}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center justify-between">
          <div className="text-xl font-semibold">${price} / night</div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  venue: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.shape({
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    media: PropTypes.arrayOf(PropTypes.string).isRequired,
    meta: PropTypes.shape({
      wifi: PropTypes.bool.isRequired,
      parking: PropTypes.bool.isRequired,
      breakfast: PropTypes.bool.isRequired,
      pets: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Card;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaWifi } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

import NoImage from "/src/assets/images/no-image.jpg";
const imageNotAvailable = "image not available";

const Card = ({ venue }) => {
  const { id, name, price, location, media, meta } = venue;
  console.log(venue);
  // console.log(id);

  // const qs = "?_owner=true&_bookings=true"

  return (
    <Link
      to={`/Venues/${id}`}
      className="container mx-auto mt-8 w-80 h-full"
    >
      <div className="max-w-sm rounded overflow-hidden shadow-md hover:bg-slate-100 hover:shadow-lg bg-grey-400 transition duration-300 transform hover:-translate-y-1 flex flex-col h-full">
        {media.length > 0 ? (
          <img className="w-full h-64 object-cover" src={media[0]} alt={name} />
        ) : (
          <img
            className="w-full h-64 object-cover"
            src={NoImage}
            alt={imageNotAvailable}
          />
        )}

        <div className="px-6 py-4 flex-grow">
          <h5 className="font-bold text-xl mb-2">{name.toUpperCase()}</h5>

          <p className="text-gray-700 mb-4 border-b-2 border-gray-200">
            {location.address}, {location.city}, {location.country}
          </p>
          <div className="flex gap-6 my-6 ">
            {meta.breakfast ? (
              <div>
                <FaUtensils />
                <p>Breakfast</p>
              </div>
            ) : null}

            {meta.wifi ? (
              <div>
                {" "}
                <FaWifi />
                <p>Wi fi</p>
              </div>
            ) : null}

            {meta.pets ? (
              <div>
                {" "}
                <FaPaw />
                <p>Pets</p>{" "}
              </div>
            ) : null}

            {meta.parking ? (
              <div>
                <FaCar />
                <p>Parking</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center justify-end">
          <div className="text-xl font-semibold">${price} / night</div>
        </div>
      </div>
    </Link>
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

// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";

import { Link } from "react-router-dom";
import NoImage from "/src/assets/images/no-image.jpg";
const imageNotAvailable = "image not available";
// import MediaComponent from "/src/components/ui/MediaComponent.jsx";

function VenueCardCretedByHost({ userVenue }) {
  const { id, name, created, location, maxGuests, media, price } = userVenue;

  console.log("venue Created By User:", userVenue);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <>
      <Link
        to={`/venueCreatedByHost/${id}`}
        className=" border border-red-700 conatainer max-w-xl mx-auto bg-white px-2 py-2 my-10 rounded-lg overflow-hidden shadow-md md:flex md:flex-row md:gap-10 justify-between items-center"
      >
        <div className="md:w-1/2">
          <img
            className="w-full h-48 object-cover rounded-lg shadow-sm mb-4 md:mb-0"
            src={media && media.length > 0 ? media[0] : ""}
            alt={name}
          />
        </div>
        <div className="p-4 md:w-1/2">
          <div className="flex items-start justify-between">
            <h2 className="font-semibold mb-2">{name}</h2>
          </div>
          <div className="flex items-center gap-4 text-sm mb-2 text-gray-600">
            <FaMapMarkerAlt />
            {location.city}, {location.country}
          </div>

          <div className="flex items-center gap-4 text-sm mb-2 text-gray-600">
            <BsPeopleFill /> {maxGuests}
          </div>
          <div className="flex items-center gap-4 text-sm mb-2 text-gray-600">
            <RiMoneyPoundCircleFill />
            {price}
          </div>

          <div className="flex items-center gap-4 text-sm mb-2 text-gray-600">
            <FaCalendar />
            Created: {formatDate(created)}
          </div>

          {/* <Link
              to={`/venueCreatedByHost/${id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              View More
            </Link> */}
        </div>
      </Link>
    </>
  );
}

export default VenueCardCretedByHost;

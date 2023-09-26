import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaEdit, FaMapMarkerAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

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
    <div className="container mx-auto px-10 py-10 max-w-2xl bg-gray-100 rounded-lg shadow-lg mt-10">
      <div className="container px-4 py-4">
        <div className="conatainer max-w-xl mx-auto bg-white px-2 py-2 rounded-lg overflow-hidden shadow-md md:flex md:flex-row md:gap-10 justify-between items-center">
          {media && media.length > 1 ? (
            <Carousel
              showThumbs={false}
              showStatus={false}
              showArrows={true} // Enable next and previous arrows
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      zIndex: "2",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: "blue", // Customize the arrow color here
                    }}
                  >
                    <BiSolidLeftArrow />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      zIndex: "2",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: "blue",
                      size: "24px", // Customize the arrow color here
                    }}
                  >
                    <BiSolidRightArrow />
                  </button>
                )
              }
            >
              {media.map((mediaItem, index) => (
                <div key={index}>
                  <img
                    className="w-full h-52 object-cover rounded-lg shadow-sm"
                    src={mediaItem}
                    alt={`${name} Image ${index + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          ) : (
            <img
              className="w-full h-48 object-cover md:w-1/2 rounded-lg shadow-sm"
              src={media[0]}
              alt={name}
            />
          )}
          {/* carousel for media end */}
          <div className="p-4 md:w-1/2">
            <div className="flex items-start justify-between">
              <h2 className="font-semibold mb-2">{name}</h2>
              <div className="flex gap-4">
                <FaEdit />
                <ImBin />
              </div>
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

            <Link
              to={`/venueCreatedByHost/${id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenueCardCretedByHost;

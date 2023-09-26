//import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";

import NoImage from "/src/assets/images/no-image.jpg";
const imageNotAvailable = "image not available";

const BookingVenueCard = ({ booking }) => {
  const {
    guests,
    dateFrom,
    dateTo,
    id,
    venue: { name, location, meta, media, price },
  } = booking;

  console.log("booking:", booking);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="container px-4 py-4 ">
      <div className="max-w-xl mx-auto bg-white px-2 py-2 rounded-lg overflow-hidden shadow-md md:flex md:flex-row md:gap-10 justify-between items-center">
        {media && media.length > 1 ? (
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
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
                    color: "blue",
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
                    size: "24px",
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
        ) : media && media.length === 1 ? (
          <img
            className="w-full h-48 object-cover md:w-1/2 rounded-lg shadow-sm"
            src={media[0]}
            alt={name}
          />
        ) : (
          <img
            className="w-full h-48 object-cover md:w-1/2 rounded-lg shadow-sm"
            src={NoImage}
            alt={imageNotAvailable}
          />
        )}



        {/* media end */}
        <div className="p-4 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">{name}</h2>
          <p className="text-sm text-gray-600 mb-2">
            {location.city} , {location.country}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Check-in: {formatDate(dateFrom)}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Check-out: {formatDate(dateTo)}
          </p>
          <p className="text-sm text-gray-600 mb-2">Guests: {guests}</p>
          {/* will add delete booking */}
          {/* <div className="flex justify-between mt-4">
            <Link
              to={`/venueBookedByUser/${id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              View More
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingVenueCard;

//vanue:{name,location,meta, media,price,rating},

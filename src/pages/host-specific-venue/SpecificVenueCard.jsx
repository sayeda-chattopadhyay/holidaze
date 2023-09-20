import { FaWifi } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import NoImage from "/src/assets/images/no-image.jpg";

const SpecificVenueCard = ({ specificVenue }) => {
  console.log("specificVenue", specificVenue);
  const {
    id,
    description,
    name,
    media,
    price,
    location,
    meta,
    owner,
    rating,
    bookings,
    maxGuests,
  } = specificVenue;
  console.log(specificVenue);
  return (
    <div key={id}>

      <div className="container max-w-5xl mx-auto px-4 py-4">
        <Carousel showStatus={false} showThumbs={false}>
          {media.map((imageUrl, index) => (
            <div key={`media-${index}`}>
              <img
                className=" object-cover mx-auto h-80 rounded-xl"
                src={imageUrl ? imageUrl : NoImage}
                alt={name}
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* details section */}
      <div className="container mx-auto px-4 py-4 border border-red-600 flex-col md:flex md:flex-row justify-between mt-4">
        <div className="w-full md:w-2/3 px-4 py-4 border border-red-600">
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
          <div className="flex gap-5">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-4 py-4 border border-red-600">
          <h2>Booking Details</h2>
          {bookings && bookings.length > 1 ? (
            bookings.map((booking) => {
              <div>Guests:{booking.guest} </div>;
            })
          ) : (
            <div>no bookings</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecificVenueCard;


// This is the page that shows the specific venue created by the user (host). 
//This page also render booking details for the specific venue.


import { FaWifi } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import NoImage from "/src/assets/images/no-image.jpg";
import VenueUpdateModal from "./updateVenue/VenueUpdateModal";
import Breadcrumb from "../../components/ui/Breadcrumb";

const SpecificVenueCard = ({ specificVenue }) => {
  console.log("specific Venue created by users:", specificVenue);

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

  let paths;
  if (name) {
    paths = [
      { name: "Home", path: "/" },
      { name: "Profile", path: "/profile" },

      {
        name: name.length > 15 ? name.substring(0, 15) + ".." : name,
        path: "/venues/${id}",
      },
    ];
  } else {
    [
      { name: "Home", path: "/" },
      { name: "Profile", path: "/profile" },
      { name: "Profile", path: "/profile" },
    ];
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div key={id}>
      <Breadcrumb paths={paths} />
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
      <div className="container mx-auto px-4 py-4 border shadow-sm flex-col md:flex md:flex-row justify-between mt-4">
        <div className="w-full md:w-2/3 px-4 py-4 border">
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
            <VenueUpdateModal specificVenue={specificVenue} />
            <button>Delete</button>
          </div>
        </div>
{/* booking details */}
        <div className="w-full md:w-1/3 px-4 py-4 border text-center ">
          <h2 className="font-bold text-xl mb-2  border-b-gray-500">Booking Details</h2>
          {bookings && bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <div key={index} className="mb-4">
                <p className="font-semibold">Booking {index + 1}</p>
                <p>Check-In: {formatDate(booking.dateFrom)}</p>
                <p>Check-Out: {formatDate(booking.dateTo)}</p>
              </div>
            ))
          ) : (
            <div>No bookings yet</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecificVenueCard;

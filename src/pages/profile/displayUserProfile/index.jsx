import PropTypes from "prop-types";
import AvatarModal from "../avatar/AvatarModal";
import { useState } from "react";
import BookingVenueCard from "../userBookings";
import UserVenues from "../userVenues";
import CreateVenueForm from "../createVenue/CreateVenueForm";
import noAvatarImage from "/src/assets/images/no-avatar.png";
import BreadCrumb from "../../../components/ui/Breadcrumb";
import { useVenues } from "../../../context/useVenues";

const DisplayProfile = ({ profile }) => {
  const { name, avatar, email, venueManager, bookings, venues } = profile;
  const [activeTab, setActiveTab] = useState("bookings");

  const { setAllVenues } = useVenues();

  setAllVenues(venues);

  const newAvatar = avatar ? avatar : noAvatarImage;

  const paths = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <>
      <BreadCrumb paths={paths} />
      {/* profile info */}
      <div className="container mx-auto px-10 py-10 max-w-2xl bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-10 md:space-x-4">
          <img
            src={newAvatar}
            alt={name}
            className="rounded-full w-32 h-32 md:w-50 md:h-50"
          />
          <div className="mt-4 md:mt-0">
            <h1 className="text-2xl font-bold">{name}</h1>
            <div>
              <p className="font-customFont text-lg">{email}</p>
              <p>Account Type: {venueManager ? "Venue Manager" : "Guest"}</p>
            </div>
            <AvatarModal />
          </div>
        </div>
      </div>
      {/* tab start */}
      <div className="container mx-auto mt-20">
        {venueManager ? (
          <div className="flex-col md:flex md:flex-row justify-between items-center max-w-sm mx-auto md:max-w-xl px-4 py-4">
            <div
              className={`border border-secondary-500 px-4 py-4 cursor-pointer ${
                activeTab === "bookings"
                  ? "bg-secondary-lighter text-white"
                  : "bg-white text-secondary hover:bg-red-100"
              }`}
              onClick={() => setActiveTab("bookings")}
            >
              <h4 className="text-2xl font-semibold text-center">
                Your Bookings
              </h4>
            </div>
            <div
              className={`border border-secondary-500 px-4 py-4  cursor-pointer ${
                activeTab === "venues"
                  ? "bg-secondary-lighter text-white"
                  : "bg-white text-secondary hover:bg-red-100"
              }`}
              onClick={() => setActiveTab("venues")}
            >
              <h4 className="text-2xl font-semibold text-center">
                Your Venues
              </h4>
            </div>
            <div
              className={`border border-secondary-500 px-4 py-4 cursor-pointer ${
                activeTab === "createVenue"
                  ? "bg-secondary-lighter text-white"
                  : "bg-white text-secondary hover:bg-red-100"
              }`}
              onClick={() => setActiveTab("createVenue")}
            >
              <h4 className="text-2xl font-semibold text-center">
                Create New Venue
              </h4>
            </div>
          </div>
        ) : (
          <div className="flex-col md:flex md:flex-row justify-between items-center max-w-sm mx-auto md:max-w-lg px-4 py-4 ">
            <div
              className={`flex-grow px-4 py-4 cursor-pointer ${
                activeTab === "bookings"
                  ? "border-b-4 border-blue-500 bg-red-500 text-white"
                  : "bg-white text-red-500 hover:bg-red-100 hover:text-red-700"
              }`}
              onClick={() => setActiveTab("bookings")}
            >
              <h3 className="text-xl font-customFont text-center">
                Your Upcoming Bookings
              </h3>
            </div>
          </div>
        )}
        {/* tab end */}
        {/* render booking, rented venues, create venue form */}
        {activeTab === "bookings" && (
          <div className="container mx-auto px-10 py-10 max-w-2xl bg-gray-100 rounded-lg shadow-lg mt-10">
            <h1 className="text-center text-xl md:text-2xl bg-gray-200 py-2 rounded-lg">
              Upcoming Booking
            </h1>
            {bookings && bookings.length > 0 ? (
              bookings.map((booking) => (
                <BookingVenueCard key={booking.id} booking={booking} />
              ))
            ) : (
              <p className="text-xl text-center py-10 text-secondary">
                No bookings yet
              </p>
            )}
          </div>
        )}
        {activeTab === "venues" && (
          <div className="container max-w-4xl mx-auto px-4 py-4 bg-gray-200 rounded-lg shadow-lg mt-10">
            <h1 className="text-center text-xl md:text-2xl bg-white py-4 rounded-lg max-w-xl mx-auto my-4">
              {venues && venues.length > 0
                ? `All venues created by ${name}`
                : `Hi ! ${name},  you have not created any venues yet`}
            </h1>
            {venues && venues.length > 0 ? <UserVenues /> : null}
          </div>
        )}
        {activeTab === "createVenue" && (
          <div className="container max-lg mx-auto px-4">
            {<CreateVenueForm />}
          </div>
        )}
      </div>
    </>
  );
};

DisplayProfile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    venueManager: PropTypes.bool.isRequired,
    bookings: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          .isRequired,
        created: PropTypes.string.isRequired,
        dateFrom: PropTypes.string.isRequired,
        dateTo: PropTypes.string.isRequired,
        guests: PropTypes.number.isRequired,
        venue: PropTypes.shape({
          name: PropTypes.string,
          // Add other venue properties here if needed
        }),
      })
    ),
  }).isRequired,
};

export default DisplayProfile;

import PropTypes from "prop-types";
import AvatarModal from "../avatar/AvatarModal";
import { useState } from "react";
import BookingVenueCard from "../userBookings";
import VenueCardCretedByHost from "../usersVenues";
import CreateVenueForm from "../createVenue/CreateVenueForm";
import noAvatarImage from "/src/assets/images/no-avatar.png";
import BreadCrumb from "../../../components/ui/Breadcrumb";

const DisplayProfile = ({ profile }) => {
  const { name, avatar, email, venueManager, bookings, venues } = profile;
  const [activeTab, setActiveTab] = useState("bookings");


  console.log("profile:", profile);
  console.log("bookings by profile:", bookings);

  const newAvatar = avatar ? avatar : noAvatarImage;

  const paths = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <>
      <BreadCrumb paths={paths} />
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
      <div className="container mx-auto mt-10">
        {venueManager ? (
          <div className="flex-col md:flex md:flex-row justify-between items-center max-w-sm mx-auto md:max-w-lg px-4 py-4 space-y-2">
            <div
              className={`border px-4 py-4 cursor-pointer ${
                activeTab === "bookings"
                  ? "bg-red-500 text-white"
                  : "bg-white text-red-500 hover:bg-red-100 hover:text-red-700"
              }`}
              onClick={() => setActiveTab("bookings")}
            >
              <h3 className="text-xl font-customFont text-center">
                Your Upcoming Bookings
              </h3>
            </div>
            <div
              className={`border border-red-500 px-4 py-4 cursor-pointer ${
                activeTab === "venues"
                  ? "bg-red-500 text-white"
                  : "bg-white text-red-500 hover:bg-red-100 hover:text-red-700"
              }`}
              onClick={() => setActiveTab("venues")}
            >
              <h1 className="text-3xl font-customFont text-center">
                Your Rented Venues
              </h1>
            </div>
            <div
              className={`border border-red-500 px-4 py-4 cursor-pointer ${
                activeTab === "expiredBookings"
                  ? "bg-red-500 text-white"
                  : "bg-white text-red-500 hover:bg-red-100 hover:text-red-700"
              }`}
              onClick={() => setActiveTab("createVenue")}
            >
              <h1 className="text-3xl font-customFont text-center">
                Create New Venue
              </h1>
            </div>
          </div>
        ) : (
          <div className="flex-col md:flex md:flex-row justify-between items-center max-w-sm mx-auto md:max-w-lg px-4 py-4 ">
            <div
              className={`border border-blue-500 px-4 py-4 cursor-pointer ${
                activeTab === "bookings"
                  ? "bg-red-500 text-white"
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
              <p>No bookings yet</p>
            )}
          </div>
        )}
        {activeTab === "venues" && (
          <div className="container mx-auto px-4 py-4  bg-gray-100 rounded-lg shadow-lg mt-10">
            <h1 className="text-center text-xl md:text-2xl bg-gray-200 py-2 rounded-lg">
              All venues created by {name}
            </h1>
            {venues && venues.length > 0 ? (
              venues.map((userVenue) => (
                <VenueCardCretedByHost
                  key={userVenue.id}
                  userVenue={userVenue}
                />
              ))
            ) : (
              <p>No Venues created by you</p>
            )}
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

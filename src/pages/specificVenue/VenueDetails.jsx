import { FaWifi } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import NoImage from "/src/assets/images/no-image.jpg";
import BookingForm from "./bookingVenue/BookingForm";
//import Calender from "./bookingVenue/Calender";

// import retrieveProfileName from "../../helper/retrieveProfileName"
// console.log("retrieveProfileName:", retrieveProfileName)

// const profileName = retrieveProfileName()
// console.log("profileName:", profileName)

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
  console.log("venue owner name", venue.owner);

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

      {/* <div className="container mx-auto px-4 py-4 border border-red-600 flex-col md:flex md:flex-row justify-between mt-4">
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
          <div>
            <h2>Owner Details</h2>
            <img src={owner.avatar} alt={owner.name} />
            <p className="text-gray-700"> Name: {owner.name}</p>
            <p className="text-gray-700">Email: {owner.email}</p>
          </div>
        </div>
        <div className="px-6 py-4 border border-b-gray-200">
          <h2>calender component</h2>
          <Calender />
          <BookingForm price={price} maxGuests={maxGuests} venueId={id} />
        </div>
      </div> */}
      <div className="container mx-auto px-4 py-4 border border-red-600 md:flex md:flex-row justify-between mt-4">
        <div className="w-full md:w-1/2 px-6 py-4 border border-b-gray-200">
          <div className="mt-4 ">
            <h2 className="font-bold text-xl mb-2 ">{name.toUpperCase()}</h2>
            <h6>Price:{price} nok/night</h6>
            <p className="t text-gray-700">Max Guests: {maxGuests}</p>
          </div>
          <div className="mt-4">
            <h2 className="font-bold text-xl mt-4">Description</h2>
            <p>{description}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-xl mt-4">Address</h2>
            <p className="text-gray-700">Address: {location.address}</p>
            <p className="text-gray-700">City: {location.city}</p>
            <p className="text-gray-700">Country: {location.country}</p>
            <p className="text-gray-700">Continent: {location.continent}</p>
          </div>

          <h2 className="font-bold text-xl mt-4">Info</h2>
          <div className="flex gap-6 my-4 justify-start mt-4">
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
                <p>Wi-Fi</p>
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
          <div>
            <h2 className="font-bold text-xl mt-6">Owner Details</h2>
            <div className="mt-4">
              <img
                src={owner.avatar}
                alt={owner.name}
                className="w-16 h-16 rounded-full"
              />
              <p className="mt-2 text-gray-700">Name: {owner.name}</p>
              <p className="mt-2 text-gray-700">Email: {owner.email}</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-6 py-4 border border-b-gray-200">
          <h2 className="font-bold text-xl text-center border-b-4">Book the Venue</h2>
          {/* <Calendar /> */}
          <BookingForm price={price} maxGuests={maxGuests} venueId={id} />
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;

//condition rendering

// import { FaWifi } from "react-icons/fa";
// import { FaUtensils } from "react-icons/fa";
// import { FaPaw } from "react-icons/fa";
// import { FaCar } from "react-icons/fa";
// import { Carousel } from "react-responsive-carousel";
// import NoImage from "/src/assets/images/no-image.jpg";
// import BookingForm from "./bookingVenue/BookingForm";
// import retrieveProfileName from "../../helper/retrieveProfileName";

// console.log("retrieveProfileName:", retrieveProfileName);

// const profileName = retrieveProfileName();
// console.log("profileName:", profileName);

// const VenueDetails = ({ venue }) => {
//   const {
//     id,
//     description,
//     maxGuests,
//     name,
//     media,
//     price,
//     location,
//     meta,
//     owner,
//     rating,
//   } = venue;
//   console.log("venue owner name", venue.owner);

//   const isUserLoggedIn = !!profileName;
//   const isUserProfileOwner = profileName === owner.name;

//   return (
//     <div key={id}>
//       <div className="container max-w-5xl mx-auto px-4 py-4">
//         <Carousel showStatus={false} showThumbs={false}>
//           {media.map((imageUrl, index) => (
//             <div key={`media-${index}`}>
//               <img
//                 className="object-cover mx-auto h-80 rounded-xl"
//                 src={imageUrl ? imageUrl : NoImage}
//                 alt={name}
//               />
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       <div className="container mx-auto px-4 py-4 border border-red-600 md:flex md:flex-row justify-between mt-4">
//         <div className="w-full md:w-1/2 px-6 py-4 border border-b-gray-200">
//           <div className="flex justify-center">
//             <img
//               src={owner.avatar}
//               alt={owner.name}
//               className="w-16 h-16 rounded-full"
//             />
//           </div>
//           <h2 className="font-bold text-xl mb-2 text-center">
//             {name.toUpperCase()}
//           </h2>
//           <h6 className="text-center">{price} nok/night</h6>
//           <p className="text-center text-gray-700">Max Guests: {maxGuests}</p>

//           <h2 className="font-bold text-xl mb-2">Description</h2>
//           <p>{description}</p>

//           <h2>Address</h2>
//           <p className="text-gray-700">Address: {location.address}</p>
//           <p className="text-gray-700">City: {location.city}</p>
//           <p className="text-gray-700">Country: {location.country}</p>
//           <p className="text-gray-700">Continent: {location.continent}</p>

//           <h2>Info</h2>
//           <div className="flex gap-6 my-4 justify-center">
//             {meta.breakfast ? (
//               <div>
//                 <FaUtensils />
//                 <p>Breakfast</p>
//               </div>
//             ) : null}

//             {meta.wifi ? (
//               <div>
//                 {" "}
//                 <FaWifi />
//                 <p>Wi-Fi</p>
//               </div>
//             ) : null}

//             {meta.pets ? (
//               <div>
//                 {" "}
//                 <FaPaw />
//                 <p>Pets</p>{" "}
//               </div>
//             ) : null}

//             {meta.parking ? (
//               <div>
//                 <FaCar />
//                 <p>Parking</p>
//               </div>
//             ) : null}
//           </div>

//           <h2>Owner Details</h2>
//           <p className="text-center text-gray-700">Name: {owner.name}</p>
//           <p className="text-center text-gray-700">Email: {owner.email}</p>
//         </div>

//         <div className="w-full md:w-1/2 px-6 py-4 border border-b-gray-200">
//           <h2>Calendar Component</h2>
//           {isUserLoggedIn ? (
//             isUserProfileOwner ? (
//               <p className="text-center">
//                 You cannot book your own venue.
//               </p>
//             ) : (
//               <BookingForm price={price} maxGuests={maxGuests} venueId={id} />
//             )
//           ) : (
//             <p className="text-center">Please login to book the venue.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VenueDetails;

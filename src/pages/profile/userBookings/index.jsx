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

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const imageSrc = media && media.length > 0 ? media[0] : NoImage;
  const altText = media && media.length > 0 ? name : imageNotAvailable;

  return (
    <div className="container px-4 py-4 ">
      <div className="max-w-xl mx-auto bg-white px-2 py-2 rounded-lg overflow-hidden shadow-md md:flex md:flex-row md:gap-10 justify-between items-center">
        <div className="md:w-1/2">
          <img
            className="w-full h-48 object-cover rounded-lg shadow-sm mb-4 md:mb-0"
            src={imageSrc}
            alt={altText}
          />
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default BookingVenueCard;



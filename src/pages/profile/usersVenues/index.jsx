const UserVenueCard = ({ userVenue }) => {
    console.log("userVenue", userVenue);
    const {id, name, description, created,location, maxGuests,media} = userVenue;

    console.log("name", name);
//   const {  media, created, maxGuests } = userVenue;

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="container px-4 py-4  ">
      <div className="max-w-xl mx-auto bg-white px-2 py-2 rounded-lg overflow-hidden shadow-md md:flex md:flex-row md:gap-10 justify-between items-center">
        <img
          className="w-full h-48 object-cover md:w-1/2 rounded-lg shadow-sm"
          src={media[0]}
          alt={name}
        />
        <div className="p-4 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">{name}</h2>
          <p className="text-sm text-gray-600 mb-2">
            Created: {formatDate(created)}
          </p>

          <p className="text-sm text-gray-600 mb-2">Max Guests: {maxGuests}</p>
          <div className="flex justify-between mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              View More
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1>Create New Venue</h1>
      </div>
    </div>
  );
};

export default UserVenueCard;
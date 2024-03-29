import { useState } from "react";
import PropTypes from "prop-types";
import { BsSearch } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";

const SearchVenues = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    onSearch(searchTerm);
  };

  const handleClearSearch = () => {
    setSearch("");
    onSearch("");
  };

  return (
    <div className="container max-w-4xl mx-auto mt-20">
      <div className="max-w-md rounded overflow-hidden mx-auto p-1 font-pins text-fontcolor">
        <div className="flex flex-col items-center sm:flex-row sm:items-center w-full max-w-lg pb-3 pt-3 px-6 bg-quaternary last:rounded-lg text-primary-darker mb-10">
          <h1 className="text-2xl font-bold text-center sm:text-left sm:mr-4 mb-4 sm:mb-0">
            Find Your Best Destination
          </h1>
          <div className="flex items-center border-2 border-gray-300 bg-white rounded-full py-2 px-2">
            <input
              className="w-full pl-4 pr-10 py-2 leading-tight focus:outline-none bg-white"
              type="text"
              placeholder="Search.."
              value={search}
              onChange={handleSearch}
            />
            {search.length > 0 ? (
              <BsXCircleFill
                className="w-6 h-6 text-gray-700"
                onClick={handleClearSearch}
              />
            ) : (
              <BsSearch className="w-6 h-6 text-primary-lighter" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add prop type validation
SearchVenues.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchVenues;

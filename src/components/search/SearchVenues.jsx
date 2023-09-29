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
      <h2>Your search Result: {search}</h2>
      <div className="max-w-md rounded overflow-hidden mx-auto p-1 font-pins text-fontcolor">
        <div className="w-full max-w-md pb-3 pt-3">
          <div className="flex items-center border-2 border-red-300 py-2 px-2">
            <input
              className="w-full pl-4 pr-10 py-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search for a venue"
              value={search}
              onChange={handleSearch}
            />
            {search.length > 0 ? (
              <BsXCircleFill
                className="w-6 h-6 text-gray-500"
                onClick={handleClearSearch}
              />
            ) : (
              <BsSearch className="w-6 h-6 text-gray-500" />
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

// event.preventDefault() to the form submission should be added

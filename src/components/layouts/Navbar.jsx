import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 py-4 px-8 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="text-white text-2xl font-semibold">
            Holidaze
          </NavLink>
        </div>
        <div className="md:flex space-x-6 font-bold hidden">
          <NavLink to="/" className="text-white hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/venues" className="text-white hover:text-gray-300">
            Venues
          </NavLink>
        </div>
        <div className="md:flex space-x-4 hidden">
          <NavLink
            to="/logIn"
            className="text-primary bg-white hover:bg-blue-800 hover:text-white border-2 transition ease-out duration-500 rounded-full px-3 py-2"
          >
            Login
          </NavLink>
          <NavLink
            to="/signUp"
            className="text-white hover:bg-white hover:text-primary border-2 transition ease-out duration-500 rounded-full px-3 py-2"
          >
            Signup
          </NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 md:hidden">
          <NavLink to="/" className="block text-white hover:text-gray-300 mb-2">
            Home
          </NavLink>
          <NavLink
            to="/venues"
            className="block text-white hover:text-gray-300 mb-2"
          >
            Venues
          </NavLink>
          <NavLink
            to="/logIn"
            className=" text-white hover:text-gray-300 mb-2 border-2 rounded-full px-3 py-2"
          >
            Login
          </NavLink>
          <NavLink
            to="/signUp"
            className="text-white hover:text-gray-300 mb-2 border-2 rounded-full px-3 py-2 "
          >
            Signup
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

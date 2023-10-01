import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../../context/authUtils.js";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { getAccessToken, handleLogout } = useAuth();

  const accessToken = getAccessToken();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary py-4 px-8 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="md:flex space-x-6 font-bold hidden">
          <NavLink
            to="/"
            className="text-white hover:text-yellow-300 hover:underline"
          >
            Home
          </NavLink>
          <NavLink to="/venues" className="text-white  hover:text-yellow-300 hover:underline">
            Venues
          </NavLink>
        </div>

        <div className="md:flex space-x-4 hidden">
          {!accessToken ? (
            // Show "Login" and "Signup" links when not logged in
            <>
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
            </>
          ) : (
            // Show "Profile" link and "Logout" button when logged in
            <>
              <NavLink
                to="/profile"
                className="text-primary bg-white hover:bg-blue-800 hover:text-white border-2 transition ease-out duration-500 rounded-full px-3 py-2"
              >
                Profile
              </NavLink>
              <button
                onClick={() => {
                  handleLogout();
                  navigate("/"); // Redirect to the home page after logout
                }}
                className="text-white hover:bg-white hover:text-primary border-2 transition ease-out duration-500 rounded-full px-3 py-2"
              >
                Logout
              </button>
            </>
          )}
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
      {/* hamburger open */}
      {isOpen && (
        <div className=" mt-2 md:hidden">
          <NavLink to="/" className="block text-white hover:text-gray-300 mb-2">
            Home
          </NavLink>
          <NavLink
            to="/venues"
            className="block text-white hover:text-gray-300 mb-2"
          >
            Venues
          </NavLink>

          {/* Display different navigation links/buttons based on the user's authentication status */}
          {!accessToken ? (
            <>
              <NavLink
                to="/logIn"
                className=" text-white hover:text-gray-300 mb-2 border-2 rounded-full px-3 py-2"
              >
                Login
              </NavLink>
              <NavLink
                to="/signUp"
                className="text-white hover:text-gray-300 mb-2 border-2 rounded-full px-3 py-2"
              >
                Signup
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/profile"
                className="text-primary bg-white hover:bg-blue-800 hover:text-white border-2 transition ease-out duration-500 rounded-full px-3 py-2"
              >
                Profile
              </NavLink>
              <button
                onClick={() => {
                  handleLogout();
                  navigate("/");
                }}
                className="text-white hover:bg-white hover:text-primary border-2 transition ease-out duration-500 rounded-full px-3 py-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

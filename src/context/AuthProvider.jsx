import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [profile, setProfile] = useState(null);

  // Function to get the user profile
  function getProfile() {
    return profile;
  }

  // Function to save data to local storage

  function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Function to load data from local storage
  function load(key) {
    try {
      const value = localStorage.getItem(key);
      return JSON.parse(value);
    } catch {
      return null;
    }
  }

  // Function to remove partcular data from local storage
  function remove(key) {
    localStorage.removeItem(key);
  }

  // Function to clear all local storage

  function clear() {
    localStorage.clear();
  }

  // Function to check if the user is logged in

  function isLogged() {
    return !!load("token");
  }

  // Function to get the access token
  function getAccessToken() {
    return load("token");
  }

  // Function to get the user's profile name
  function getProfileName() {
    const userProfile = load("profile");
    return userProfile ? userProfile.name : null;
  }

  useEffect(() => {
    // Load the user profile data from local storage when the component mounts
    const storedProfile = load("profile");
    if (storedProfile) {
      setProfile(storedProfile);
    }
  }, []);

  // Function to handle user logout

  function handleLogout() {
    clear();
    window.location.href = "/";
  }

  return (
    <AuthContext.Provider
      value={{
        save,
        load,
        remove,
        clear,
        isLogged,
        getAccessToken,
        getProfile,
        getProfileName,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

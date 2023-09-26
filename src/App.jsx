// import "./App.css";

import { Route, Routes } from "react-router-dom";
// pages

import HomePage from "./pages/home";
import SignUpPage from "./pages/signUp";
import LoginPage from "./pages/logIn";
import VenuesPage from "./pages/venues";
import SpecificVenue from "./pages/specificVenue";
import ProfilePage from "./pages/profile";
import ErrorPage from "./pages/notFoundPage";
import HostSpecificVenue from "./pages/venueCreatedByHost";
//import BookedVenueCard from "./pages/venueBookedByUser";

// layouts

import BaseLayout from "./components/layouts/BaseLayout";

// Auth

import { AuthProvider } from "./context/AuthProvider";

// function requireAuth(component) {
//   const accessToken = localStorage.getItem("token");
//   const loggedIn = Boolean(accessToken);

//   return loggedIn ? component : <Navigate to="/login" />;
// }

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/logIn" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/venues" element={<VenuesPage />} />
          <Route path="/venues/:id" element={<SpecificVenue />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/venueCreatedByHost/:id"
            element={<HostSpecificVenue />}
          />
          {/* <Route path="/venueBookedByUser/:id" element={<BookedVenueCard />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

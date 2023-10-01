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

// layouts

import BaseLayout from "./components/layouts/BaseLayout";

// Auth

import { AuthProvider } from "./context/AuthProvider";
import { VenueProvider } from "./context/VenueProvider";

function App() {
  return (
    <AuthProvider>
      <VenueProvider>
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
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </VenueProvider>
    </AuthProvider>
  );
}

export default App;

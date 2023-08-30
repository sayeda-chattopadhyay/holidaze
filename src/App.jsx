// import "./App.css";

import { Route, Routes } from "react-router-dom";
// pages

import HomePage from "./pages/home";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/logIn";
import VenuesPage from "./pages/venues";
import SpecificVenuePage from "./pages/specificVenue";
import ProfilePage from "./pages/profile";
import ErrorPage from "./pages/notFoundPage";

// layouts

import BaseLayout from "./components/layouts/BaseLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/logIn" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/venues" element={<VenuesPage />} />
          <Route path="/venues/:id" element={<SpecificVenuePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

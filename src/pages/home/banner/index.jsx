import { NavLink } from "react-router-dom";
import heroImage from "/src/assets/images/hero-image.jpg";

const HeroBanner = () => {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover relative"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-heading-4xl font-heading font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6x">
          Your Ultimate Destination for Seamless Holiday Adventures!
        </h1>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <NavLink
            to="/venues"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Explore Venues
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;




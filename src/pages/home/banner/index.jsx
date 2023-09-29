import { NavLink } from "react-router-dom";
const HeroBanner = () => {
  return (
    <section className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-heading-4xl font-heading font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6x text-right">
          Your Ultimate Destination for Seamless Holiday Adventures!
        </h1>
        <p className="mb-8 text-lg font-roboto text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          From grand galas to intimate gatherings, discover your ideal venue
          with us. Where your event´s story begins - find the perfect venue
          effortlessly.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <NavLink
            to="/venues"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Explore Venues
            {/* <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg> */}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

 import HeroBanner from "./banner";
// import SearchSection from "./searchSection";
import AllVenues from "../venues/AllVenues";
import SellingPoints from "./sellingPoint";
import BecomeAHost from "./becomeHost";

const HomePage = () => {
  return (
    <>
      <div className="mx-auto mt-40 max-w-7xl">
      <HeroBanner />
        {/* <SearchSection /> */}
        <AllVenues />
        <SellingPoints />
        <BecomeAHost />
      </div>
    </>
  );
};

export default HomePage;

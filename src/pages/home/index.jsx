 import HeroBanner from "./banner";
// import SearchSection from "./searchSection";
import AllVenues from "../venues/AllVenues";
import SellingPoints from "./sellingPoint";
import BecomeAHost from "./becomeHost";

const HomePage = () => {
  return (
    <>
     <HeroBanner />
      <div className="mx-auto mt-40 max-w-7xl">
        {/* <SearchSection /> */}
        <AllVenues />s
        <SellingPoints />
        <BecomeAHost />
      </div>
    </>
  );
};

export default HomePage;

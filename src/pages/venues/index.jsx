import AllVenues from "./AllVenues";
import Breadcrumb from "../../components/ui/Breadcrumb";
//import VenuesList from "./VenuesList";
//import UploadImageForm from "./VenuesList";

const VenuesPage = () => {
  const paths = [
    { name: "Home", path: "/" },
    { name: "Venues", path: "/venues" },
  ];

  return (
    <div className="mx-auto mt-40 max-w-7xl">
      <Breadcrumb paths={paths} />
      <AllVenues />

      {/* <VenuesList /> */}
    </div>
  );
};

export default VenuesPage;

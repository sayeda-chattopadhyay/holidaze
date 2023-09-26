// import { useParams } from "react-router-dom";
// import { useSpecificVenue } from "../../hooks/useSpecificVenue";
// import BookedVenueDetails from "./BookedVenueDetails";
// import LoadingIndicator from "../../components/ui/LoadingIndicator";
// import ErrorMessage from "../../components/ui/ErrorMessage";


// const BookedVenueCard = () => {
//   const { id } = useParams();
//   console.log("Specifc venue id:", id);

//   const { specificVenue, isLoading, isError } = useSpecificVenue(id);
//   console.log("specificVenue:", specificVenue);

//   if (isLoading || !specificVenue) {
//     return <div><LoadingIndicator/></div>;
//   }

//   if (isError) {
//     return <div><ErrorMessage/></div>;
//   }

//   return (
//     <div className="mt-20">
//       <BookedVenueDetails booking={specificVenue} />
//     </div>
//   );
// };

// export default BookedVenueCard;

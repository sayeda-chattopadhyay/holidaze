
import { useEffect, useState } from "react";
import { VENUES_URL } from "../../constants";

export function useSpecificVenue(id) {
  const url = `${VENUES_URL}/${id}?_bookings=true `;
  const [specificVenue, setSpecificVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function getSpecificVenue(url) {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await fetch(url);
      const json = await response.json();
      console.log(json);

      setSpecificVenue({ ...json, bookings: json.bookings });
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getSpecificVenue(url);
  }, [url]);

  return { specificVenue, isLoading, isError };
}

export default useSpecificVenue;

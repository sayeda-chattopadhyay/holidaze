import { useEffect, useState } from "react";
import { authFetch } from "../../helper/authorization";
import { PROFILE_URL } from "../../constants";

export function useSingleProfile(name) {
  const url = `${PROFILE_URL}${name}?_bookings=true&_venues=true&sortOrder=desc&sort=created`;
  const [singleProfile, setSingleProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function getSingleProfile(url) {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await authFetch(url);
      const json = await response.json();

      setSingleProfile(json);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getSingleProfile(url);
  }, [url]);

  return { singleProfile, isLoading, isError };
}

export default useSingleProfile;

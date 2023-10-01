import { useState, useEffect } from "react";

/**
 * Custom hook to fetch data from an API endpoint.
 * @param {string} url - The URL of the API endpoint to fetch data from.
 * @return {Object} An object containing fetched data, loading status, and error status.
 */

const ApiHook = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // Fetch data from API endpoint

  useEffect(() => {
    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("API request failed");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setIsError(true);
        setErrorMessage(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, isLoading, isError, errorMessage };
};

export default ApiHook;

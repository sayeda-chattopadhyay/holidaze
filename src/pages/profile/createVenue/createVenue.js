import { VENUES_URL } from "../../../constants";
import { authFetch } from "../../../helper/authorization";

export async function createVenue(formData) {
  const accessToken = localStorage.getItem("token");

  const url = `${VENUES_URL}`;

  try {
    const response = await authFetch(url, {
      method: "POST",

      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorMessage = `Failed to create venue. Status: ${response.status}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Create venue error", error.message);
    throw error;
  }
}

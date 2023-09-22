import { VENUES_URL } from "../../../constants";
import { authFetch } from "../../../helper/authorization";

export async function createVenue(formData) {
  console.log("formData", formData);

  const accessToken = localStorage.getItem("token");
  console.log("accessToken", accessToken);

  const url = `${VENUES_URL}`;
  console.log(url);

  try {
    const response = await authFetch(url, {
      method: "POST",

      body: JSON.stringify(formData),
    });

    console.log("response", response);

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

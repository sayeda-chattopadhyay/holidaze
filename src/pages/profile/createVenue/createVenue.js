import { VENUES_URL } from "../../../constants";
//import { authFetch } from "../../../helper/authorization";

export async function createVenue(formData) {
  const accessToken = localStorage.getItem("token");

  console.log("accessToken", accessToken);

  try {
    const url = VENUES_URL;
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(formData),
    });

    console.log("response", response);

    if (!response.ok) {
      throw new Error("Failed to create venue", response.status);
    }

    const data = await response.json();
    console.log("venueFormdata", data);
    return data;
  } catch (error) {
    console.log("Create venue error", error.message);
    throw error;
  }
}

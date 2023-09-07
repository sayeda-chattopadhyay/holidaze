import { PROFILE_URL } from "../../../constants/index.jsx";

export async function getProfileDetails() {
  try {
    const storedProfile = localStorage.getItem("profile");
    console.log("storedProfile", storedProfile);

    const profile = JSON.parse(storedProfile);
    console.log("profile", profile);

    const profileName = profile.name;
    console.log("profileName", profileName);

    const storedToken = localStorage.getItem("token");
    const token = JSON.parse(storedToken);

    console.log("token", token);

    // const qs = "?_bookings=true&_venues=true";

    const url = `${PROFILE_URL}${profileName}`;

    console.log(url);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // Handle any HTTP errors here
      throw new Error(`HTTP error: ${response.status}`);
    }

    const profileData = await response.json(); // Parse response JSON

    return profileData;
  } catch (error) {
    console.log(error);
    // Handle the error appropriately
    return null; // Return null or handle it in your application
  }
}

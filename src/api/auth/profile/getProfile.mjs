import { PROFILE_URL } from "../../../constants/index.jsx";
import { load } from "../../../storage/index.mjs";

const token = load("token");
const profile = load("profile");
const profileName = profile.name;
const getProfileUrl = `${PROFILE_URL}${profileName}`;
const qs = "?_bookings=true&_venues=true";

/**
 * Gets a users profile data
 * @returns {Promise<Object>} with users profile data
 */

export async function getProfileDetails() {
  try {
    const url = `${getProfileUrl}${qs}`;

    console.log(url);

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // const profile = await response.json(); // will return a promise instead of an object

    return response;
  } catch (error) {
    console.log(error);
  }
}

getProfileDetails();

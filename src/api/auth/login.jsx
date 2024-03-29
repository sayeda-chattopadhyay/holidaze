import { LOGIN_URL } from "../../constants";
import { useAuth } from "../../context/authUtils.js";

const loginURL = LOGIN_URL;
const method = "post";

export function useLogin() {
  const auth = useAuth();

  async function logIn(credentials) {
    try {
      const url = loginURL;

      const userToLoginObject = {
        headers: {
          "content-Type": "application/json",
        },
        method,
        body: JSON.stringify(credentials),
      };

      const response = await fetch(url, userToLoginObject);
      

      if (response.ok) {
        const { accessToken, ...profileDetails } = await response.json();

        // Save the token and profile using  auth functions
        auth.save("token", accessToken);
        auth.save("profile", profileDetails);

      
      } else {
        throw new Error("Incorrect username or password");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return { logIn };
}



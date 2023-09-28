import { REGISTER_URL } from "../../constants";
const url = REGISTER_URL;

export async function signUp(formData) {
  try {
    const response = await fetch(url, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Unauthorized: Please check your credentials");
      } else if (response.status === 404) {
        throw new Error("Resource not found");
      } else {
        throw new Error("An error has occurred");
      }
    }
    return response.json();
  } catch (error) {
    console.error("Error during sign-up:", error.message);
    throw error;
  }
}

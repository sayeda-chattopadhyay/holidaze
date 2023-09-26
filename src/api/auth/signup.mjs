import { REGISTER_URL } from "../../constants";

const url = REGISTER_URL;
console.log(url);


export async function signUp(formData) {
  console.log(formData);

  try {
    const response = await fetch(url, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("An error has occured", response.status);
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log("Register error", error.message);
    throw error;
  }
}




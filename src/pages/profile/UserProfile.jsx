import { getProfileDetails } from "../../api/auth/profile/getProfile.mjs";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await getProfileDetails();
        console.log("The response is:", response);
        const profile = await response.json();
        console.log("The profile is:", profile);
        setProfile(profile);
        setLoading(false);
      } catch (error) {
        console.log("The error is:", error);
        setError(true);
        setLoading(false);
      }
    }
    getProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There was an error</div>;
  }

  return (
    <div>
      <h1>Profile page</h1>
      {profile && (
        <div>
          <p>Name: {profile.name}</p>
          <p>Name: {profile.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

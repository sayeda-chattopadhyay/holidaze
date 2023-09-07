import { getProfileDetails } from "../../api/auth/profile/getProfile.mjs";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProfile() {
      try {
        const profileData = await getProfileDetails();
        console.log("The profile is:", profileData);
        setProfile(profileData);
        setLoading(false);
      } catch (error) {
        console.log("The error is:", error);
        setError(true);
        setLoading(false);
      }
    }
    getProfile();
  }, [profile]); // Include 'profile' in the dependency array

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
          <p>Email: {profile.email}</p> {/* Changed 'Name' to 'Email' */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;


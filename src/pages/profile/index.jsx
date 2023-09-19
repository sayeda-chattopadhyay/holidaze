import useSingleProfile from "../../hooks/useSingleProfile";
import retrieveProfileName from "../../helper/retrieveProfileName";
import DisplayProfile from "./displayUserProfile";

const ProfilePage = () => {
  const profileName = retrieveProfileName();

  const { singleProfile, isLoading, isError } = useSingleProfile(profileName);

  console.log("singleProfile", singleProfile);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong...</div>;

  return (
    <>
      <div className="mt-20">
        {" "}
        <DisplayProfile profile={singleProfile} />
      </div>
    </>
  );
};

export default ProfilePage;

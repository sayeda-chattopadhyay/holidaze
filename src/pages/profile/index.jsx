import useSingleProfile from "../../hooks/useSingleProfile";
import retrieveProfileName from "../../helper/retrieveProfileName";

const ProfilePage = () => {
  const profileName = retrieveProfileName();

  const { singleProfile, isLoading, isError } = useSingleProfile(profileName);

  console.log(singleProfile);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong...</div>;

  return (
    <>
      <div className="mt-20">
        {" "}
        i am User profile. will make profile page using grid.
        <h1>{singleProfile.name}</h1>
        <h1>{singleProfile.email}</h1>
      </div>
    </>
  );
};

export default ProfilePage;

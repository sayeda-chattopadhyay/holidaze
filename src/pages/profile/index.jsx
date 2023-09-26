import useSingleProfile from "../../hooks/useSingleProfile";
import retrieveProfileName from "../../helper/retrieveProfileName";
import DisplayProfile from "./displayUserProfile";
import LoadingIndicator from "../../components/ui/LoadingIndicator";
import ErrorMessage from "../../components/ui/ErrorMessage";

const ProfilePage = () => {
  const profileName = retrieveProfileName();

  const { singleProfile, isLoading, isError } = useSingleProfile(profileName);

  if (isLoading)
    return (
      <div>
        <LoadingIndicator />
      </div>
    );

  if (isError)
    return <ErrorMessage message="An error occurred while fetching data." />;

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

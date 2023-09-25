import { BeatLoader } from "react-spinners";

const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BeatLoader className="text-md-red-500" />
    </div>
  );
};

export default LoadingIndicator;

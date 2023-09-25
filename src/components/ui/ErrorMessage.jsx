const ErrorMessage = ({ message }) => {
  return (
    <div className="container max-w-sm mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-4 rounden-md mt-10 flex justify-center items-center">
      {message}
    </div>
  );
};

export default ErrorMessage;

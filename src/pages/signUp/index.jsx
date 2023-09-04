import TextSignUp from "./SignUpText";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <div className=" container max-w-4xl max-auto my-10 mx-10 p md:flex items-center justify-between border-4 border-red-600">
      <div>
        <TextSignUp />
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;

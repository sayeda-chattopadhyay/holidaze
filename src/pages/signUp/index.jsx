import TextSignUp from "./SignUpText";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <div className=" container max-w-5xl mx-auto my-10 p flex-reserve md:flex items-center justify-between border-4 border-red-600 gap-10">
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

import TextSignUp from "./SignUpText";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  
  return (
    <div className="container max-w-5xl mx-auto mt-20 my-10 px-4 py-4 flex-reserve gap-20  md:flex items-center justify-between ">
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

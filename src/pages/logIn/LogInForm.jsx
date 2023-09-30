import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLogin } from "../../api/auth/login.jsx";
import LoadingIndicator from "../../components/ui/LoadingIndicator";
//import { set } from "date-fns";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email address"),
  password: Yup.string().required("Please enter your password"),
});

const LogInForm = () => {
  const { logIn } = useLogin();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  // const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // add success message

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, actions) => {
      const credentials = {
        email: values.email,
        password: values.password,
      };

      try {
        setErrorMessage(null);
        setIsLoading(true);
        actions.setSubmitting(true);
        await logIn(credentials);
        // setSuccessMessage("You have successfully logged in!");
        navigate("/profile");
      } catch (error) {
        setErrorMessage(error.message);
        setIsLoading(false);
      } finally {
        actions.setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {isLoading && <LoadingIndicator />}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Log In
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                required
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={formik.isSubmitting} // Disable the button while submitting
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {formik.isSubmitting ? "Logging In..." : "Log In"}
            </button>
          </div>
        </form>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <NavLink to="/signup" className="font-bold text-blue-700">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LogInForm;

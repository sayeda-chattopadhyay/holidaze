import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { logIn } from "../../api/auth/login.mjs";

// Define your emailNoroffRegex or replace it with a valid regular expression
// const emailNoroffRegex = /your-regex-here/;

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    // .matches(emailNoroffRegex, "Invalid email format") // Use a valid regex here
    .required(
      "Please enter your noroff email address (e.g., name@stud.noroff.no)"
    ),
  password: Yup.string().required("Required"),
});

const LogInForm = () => {
  const navigate = useNavigate();
//   const [loginSuccess, setLogInSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema,

    onSubmit: async (values, action) => {
      const profile = {
        email: values.email,
        password: values.password,
      };

      logIn(profile);
      action.resetForm();

      setTimeout(() => {
        navigate("/profile"); // Redirect to profile page
      }, 2000);

      console.log("Form data:", profile);

      //   try {
      //     const response = await logIn(profile); // Call the login API

      //     console.log("Api response:", response);

      //     if (response.success) {   // need to change code here
      //         setLogInSuccess(true);

      //       console.log("Log in success:", loginSuccess);

      //       setTimeout(() => {
      //         navigate("/profile"); // Redirect to profile page
      //       }, 2000); // Redirect after 2 seconds (adjust as needed)
      //     }
      //   } catch (error) {
      //     console.log("Registration error:", error);
      //   }
    },
  });

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            log in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={formik.handleSubmit}
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log In
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account ?{" "}
            <NavLink to="/signup" className="font-bold text-blue-700">
              {" "}
              sign up
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogInForm;

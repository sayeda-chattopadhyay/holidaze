import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signUp } from "../../api/auth/signup.mjs";

// RegEx values

const emailNoroffRegex = /^[A-Z0-9._%+-]+@stud.noroff\.no$/i;

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "your name should be at least 3 character")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(emailNoroffRegex, "name@stud.noroff.no")
    .required(
      "Please enter your noroff email address (e,g- name@stud.noroff.no)"
    ),
  password: Yup.string().required("Required"),
  avatar: Yup.string().url("Invalid url"),
  venueManager: Yup.boolean(),
});

const SignUpForm = () => {
  const navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      avatar: "",
      venueManager: "",
    },

    onSubmit: async (values, action) => {
      const formData = {
        name: values.name,
        email: values.email,
        password: values.password,
        avatar: values.avatar,
        venueManager: values.venueManager,
      };

      action.resetForm();

      console.log("Form data:", formData);

      try {
        const response = await signUp(formData);
        console.log("Api response:", response);
        if (response.success) {
          setRegistrationSuccess(true);
          console.log("Registration success:", registrationSuccess);

          setTimeout(() => {
            navigate("/login"); // Redirect to login page
          }, 2000); // Redirect after 2 seconds (adjust as needed)
        }
      } catch (error) {
        console.log("Registration error:", error);
      }
    },

    validationSchema,
  });
  console.log("Formik error : ", formik.errors);
  console.log("Formik touched: ", formik.touched);
  console.log("Formik values: ", formik.values);

  return (
    <>
      {registrationSuccess && (
        <div className="text-green-500 text-sm mb-4 mt-20">
          Registration successful! You will be redirected to the login page.
        </div>
      )}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
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
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
            </div>
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
              <label
                htmlFor="avatar"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Avatar
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="avatar"
                  name="avatar"
                  type="avatar"
                  autoComplete="off"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.avatar}
                />
                {formik.touched.avatar && formik.errors.avatar ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.avatar}
                  </div>
                ) : null}
              </div>
            </div>

            <p>How do you like to register ?</p>

            {/* field set start*/}
            <fieldset className="flex flex-col gap-4 md:flex-row md:gap-12">
              <p>Do you want to rent out an accommodation??</p>
              <div>
                <input
                  value={true}
                  defaultChecked={formik.values.venueManager === true}
                  onChange={() => {
                    formik.setFieldValue("venueManager", true);
                  }}
                  type="radio"
                  id="yes"
                  name="venueManager"
                />
                <label htmlFor="yes" className="ml-1">
                  Yes
                </label>
              </div>
              <div>
                <input
                  value={false}
                  defaultChecked={formik.values.venueManager === false}
                  onChange={() => {
                    formik.setFieldValue("venueManager", false);
                  }}
                  type="radio"
                  id="no"
                  name="venueManager"
                />
                <label htmlFor="no" className="ml-1">
                  No
                </label>
              </div>
            </fieldset>
            {/* field set end */}
            {/* submit button */}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account ?{" "}
            <NavLink to="/login" className="font-bold text-blue-700">
              {" "}
              Log In
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;

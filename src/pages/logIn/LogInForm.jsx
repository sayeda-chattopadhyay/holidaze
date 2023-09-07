import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLogin } from "../../api/auth/login.jsx";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email address"),
  password: Yup.string().required("Please enter your password"),
});

const LogInForm = () => {
  const { logIn } = useLogin();
  const navigate = useNavigate();

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
        // Disable the submit button and show loading while waiting for the response
        actions.setSubmitting(true);

        // Call the login API
        await logIn(credentials);

        // Redirect to the profile page on successful login
        navigate("/profile");
      } catch (error) {
        // Handle login errors, display an error message, or enable the button for a retry
        console.error("Login error:", error);
        // You might want to notify the user of the error, e.g., set an error state.
      } finally {
        // Re-enable the submit button and reset the form
        actions.setSubmitting(false);
        actions.resetForm();
      }
    },
  });

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
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
              disabled={formik.isSubmitting} // Disable the button while submitting
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {formik.isSubmitting ? "Logging In..." : "Log In"}
            </button>
          </div>
        </form>

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

// end

// import { NavLink, useNavigate } from "react-router-dom";
// // import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useLogin } from "../../api/auth/login.jsx";

// // Define your emailNoroffRegex or replace it with a valid regular expression
// // const emailNoroffRegex = /your-regex-here/;

// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email("Invalid email format")
//     // .matches(emailNoroffRegex, "Invalid email format") // Use a valid regex here
//     .required(
//       "Please enter your noroff email address (e.g., name@stud.noroff.no)"
//     ),
//   password: Yup.string().required("Required"),
// });

// const LogInForm = () => {

//   const { logIn } = useLogin();

//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },

//     validationSchema,

//     onSubmit: async (values, action) => {
//       const credentials = {
//         email: values.email,
//         password: values.password,
//       };

//       logIn(credentials); // Call the login API

//       action.resetForm();

//       setTimeout(() => {
//         navigate("/profile"); // Redirect to profile page
//       }, 2000);

//       console.log("Login Form data:", credentials);

//     },
//   });

//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             className="mx-auto h-10 w-auto"
//             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//             alt="Your Company"
//           />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             log in
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form
//             className="space-y-6"
//             onSubmit={formik.handleSubmit}
//             method="POST"
//           >
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Email
//               </label>
//               <div className="mt-2">
//                 <input
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="off"
//                   required
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.email}
//                 />
//                 {formik.touched.email && formik.errors.email ? (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors.email}
//                   </div>
//                 ) : null}
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Password
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="off"
//                   required
//                   onChange={formik.handleChange}
//                   value={formik.values.password}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.password && formik.errors.password ? (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors.password}
//                   </div>
//                 ) : null}
//               </div>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Log In
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500">
//             Already have an account ?{" "}
//             <NavLink to="/signup" className="font-bold text-blue-700">
//               {" "}
//               sign up
//             </NavLink>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LogInForm;

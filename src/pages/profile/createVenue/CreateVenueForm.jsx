import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Name must be at least 6 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  description: Yup.string()
    .min(20, "Description must be at least 20 characters")
    .max(500, "Description must be at most 500 characters")
    .required("Description is required"),
  price: Yup.number() // more than zero
    .required("Price is required")
    .positive("Price must be positive")
    .integer("Price must be an integer"),
  maxGuests: Yup.number()
    .required("Required")
    .positive("Must be positive")
    .integer("Must be an integer"),
  address: Yup.string()
    .min(6, "Address must be at least 6 characters")
    .max(50, "Address must be at most 50 characters")
    .required("Address is required"),
  city: Yup.string()
    .min(6, "City must be at least 6 characters")
    .max(50, "City must be at most 50 characters")
    .required("City is required"),
  zip: Yup.string()
    .min(6, "Zip must be at least 6 characters")
    .max(50, "Zip must be at most 50 characters")
    .required("Zip is required"),
  country: Yup.string()
    .min(6, "Country must be at least 6 characters")
    .max(50, "Country must be at most 50 characters")
    .required("Country is required"),
  continent: Yup.string()
    .min(6, "Continent must be at least 6 characters")
    .max(50, "Continent must be at most 50 characters")
    .required("Continent is required"),
  media: Yup.string().url("Must be a valid URL").required("Required"),

  meta: Yup.object().shape({
    wifi: Yup.boolean(),
    parking: Yup.boolean(),
    breakfast: Yup.boolean(),
    pets: Yup.boolean(),
  }),
});

const CreateVenueForm = () => {
  const [mediaArray, setMediaArray] = useState([]);
  console.log("mediaArray", mediaArray);

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
      media: [],
      price: 0,
      maxGuests: 1,
      location: {
        address: "",
        city: "",
        zip: "",
        country: "",
        continent: "",
      },
      meta: {
        wifi: false,
        parking: false,
        breakfast: false,
        pets: false,
      },
    },

    onSubmit: (values, action) => {
      console.log("Form submitted with values:", values);

      const formData = {
        name: values.name,
        description: values.description,
        price: values.price,
        maxGuests: values.maxGuests,
        rating: 0, // Default rating
        media: mediaArray,
        location: {
          address: values.address,
          city: values.city,
          zip: values.zip,
          country: values.country,
          continent: values.continent,
          lat: 0, // Default latitude
          lng: 0, // Default longitude
        },
        meta: {
          wifi: values.meta.wifi,
          parking: values.meta.parking,
          breakfast: values.meta.breakfast,
          pets: values.meta.pets,
        },
      };
      // api call
      action.resetForm();
      console.log("formData", formData);
    },
    validationSchema,
  });

  // console.log("Formik error : ", errors);
  // console.log("Formik touched: ", touched);
  console.log("Formik values: ", values);

  const removeMedia = (index) => {
    const updatedMedia = [...mediaArray];
    updatedMedia.splice(index, 1);
    setMediaArray(updatedMedia);
  };

  function pushToMediaArray() {
    const mediaValue = document.getElementById("media").value;
    const urlRegex = /(ftp|http|https):\/\/[^ "]+$/;
    if (urlRegex.test(mediaValue)) {
      const newMediaArray = [...mediaArray, mediaValue];
      setMediaArray(newMediaArray);
      document.getElementById("media").value = "";
    } else {
      return null;
    }
  }

  return (
    <div className="container px-4 py-4 border border-red-600">
      <h1>Create Venue</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
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
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {touched.name && errors.name ? (
              <div className="text-red-500 text-sm">{errors.name}</div>
            ) : null}
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            price
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="price"
              name="price"
              type="number"
              autoComplete="off"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {touched.price && errors.price ? (
              <div className="text-red-500 text-sm">{errors.price}</div>
            ) : null}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
          </div>
          <div className="mt-2">
            <textarea
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="description"
              name="description"
              type="text"
              autoComplete="off"
              required
              placeholder="Please provide a description for your venue"
              rows="3"
              onChange={handleChange}
              value={values.description}
              onBlur={handleBlur}
            />
            {touched.description && errors.description ? (
              <div className="text-red-500 text-sm">{errors.description}</div>
            ) : null}
          </div>
        </div>
        <div>
          {/* location */}
          <label
            htmlFor="address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Address
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="address"
              name="address"
              type="text"
              autoComplete="off"
              required
              placeholder="Please provide a valid address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
            {touched.address && errors.address ? (
              <div className="text-red-500 text-sm">{errors.address}</div>
            ) : null}
          </div>
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            City
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="city"
              name="city"
              type="text"
              autoComplete="off"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
            />
            {touched.city && errors.city ? (
              <div className="text-red-500 text-sm">{errors.city}</div>
            ) : null}
          </div>
        </div>
        <div>
          <label
            htmlFor="zip"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Zip
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="zip"
              name="zip"
              type="number"
              autoComplete="off"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.zip}
            />
            {touched.zip && errors.zip ? (
              <div className="text-red-500 text-sm">{errors.zip}</div>
            ) : null}
          </div>
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="country"
              name="country"
              type="text"
              autoComplete="off"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
            />
            {touched.country && errors.country ? (
              <div className="text-red-500 text-sm">{errors.country}</div>
            ) : null}
          </div>
        </div>
        <div>
          <label
            htmlFor="continent"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Continent
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="continent"
              name="continent"
              type="text"
              autoComplete="off"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.continent}
            />
            {touched.continent && errors.continent ? (
              <div className="text-red-500 text-sm">{errors.continent}</div>
            ) : null}
          </div>
        </div>
        <div>
          <label
            htmlFor="maxGuests"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Maximum number of guests
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="maxGuests"
              name="maxGuests"
              type="number"
              min="1"
              autoComplete="off"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.maxGuests}
            />
            {touched.maxGuests && errors.maxGuests ? (
              <div className="text-red-500 text-sm">{errors.maxGuests}</div>
            ) : null}
          </div>
        </div>

        <div className="my-8 flex flex-col items-start">
          <label
            htmlFor="Images"
            className="block font-paragraph text-sm font-medium leading-6 text-gray-900"
          >
            Add Images
          </label>
          {mediaArray && (
            <div className="mt-4 flex flex-wrap gap-4">
              {mediaArray.map((media, index) => (
                <div key={index} className="relative h-24 w-24 rounded-md">
                  <img
                    src={media}
                    alt="Images of the Accommodation"
                    className="block h-full w-full rounded-md leading-6"
                  />
                  <button
                    type="button"
                    onClick={() => removeMedia(index)}
                    className="absolute bottom-0 right-0 z-10 rounded-md bg-red-700 p-1 text-xs text-white"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-2 w-full">
            <input
              type="url"
              name="media"
              id="media"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Add valid Image url here"
              className="block w-full rounded-md border-0 px-2 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={pushToMediaArray}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
          {touched.media && errors.media ? (
            <div className="text-red-600">{errors.media}</div>
          ) : null}
        </div>
        <div>
          {/* meta data start */}
          <div className="mt-6">
            <h3 className="mb-4 font-semibold text-gray-900">Add facilities</h3>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    id="wifi"
                    name="meta.wifi"
                    type="checkbox"
                    onBlur={handleBlur}
                    checked={values.meta.wifi}
                    onChange={() => {
                      setFieldValue("meta.wifi", !values.meta.wifi);
                    }}
                    // checked={values.wifi}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="wifi"
                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Wi-fi
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    id="parking"
                    name="meta.parking"
                    type="checkbox"
                    onBlur={handleBlur}
                    checked={values.meta.parking}
                    onChange={() => {
                      setFieldValue("meta.parking", !values.meta.parking);
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="react-checkbox-list"
                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Parking
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    id="breakfast"
                    name="meta.breakfast"
                    type="checkbox"
                    onBlur={handleBlur}
                    checked={values.meta.breakfast}
                    onChange={() => {
                      setFieldValue("meta.breakfast", !values.meta.breakfast);
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="angular-checkbox-list"
                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Breakfast
                  </label>
                </div>
              </li>
              <li className="w-full dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    id="pets"
                    name="meta.pets"
                    type="checkbox"
                    onBlur={handleBlur}
                    checked={values.meta.pets}
                    onChange={() => {
                      setFieldValue("meta.pets", !values.meta.pets);
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="laravel-checkbox-list"
                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Pets
                  </label>
                </div>
              </li>
            </ul>
          </div>

          {/* meta data end */}

          <button
            type="submit"
            className=" mt-4 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Venue
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateVenueForm;

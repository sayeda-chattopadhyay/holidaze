import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createBooking } from "./createBookingApiCall";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = ({ price, maxGuests }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDays, setTotalDays] = useState(0);

  const { id } = useParams();

  const navigate = useNavigate();

  const initialValues = {
    dateFrom: null,
    dateTo: null,
    guests: 0,
    venueId: id,
  };

  const handleSubmit = async (values) => {
    const bookingFormData = {
      dateFrom: values.dateFrom,
      dateTo: values.dateTo,
      guests: values.guests,
      venueId: values.venueId,
    };

    try {
      const response = await createBooking(bookingFormData);

      if (response) {
        toast.success("Booking Successful!", {
          position: "bottom-center",
          autoClose: 1000,
        });

        setTimeout(() => {
          navigate("/profile");
        }, 2000);

        const start = new Date(values.dateFrom);
        const end = new Date(values.dateTo);
        const timeDiff = Math.abs(end - start);
        const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        const totalPrice = price * numberOfNights;
        setTotalAmount(totalPrice);
        formik.resetForm();
      } else {
        throw new Error("Booking failed");
      }
    } catch (error) {
      toast.error("Booking failed. Please try again later.", {
        position: "bottom-center",
        autoClose: 2000, // Close toast after 5 seconds
      });
    }
  };

  const validationSchema = Yup.object().shape({
    dateFrom: Yup.date().required("Start Date is required"),
    dateTo: Yup.date()
      .required("End Date is required")
      .min(Yup.ref("dateFrom"), "End Date must be after Start Date"),
    guests: Yup.number()
      .required("Number of guests is required")
      .min(1, "Number of guests must be at least 1")
      .max(maxGuests, `Max number of guests is ${maxGuests}`),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleDatesSelected = ({ startDate, endDate }) => {
    formik.setFieldValue("dateFrom", startDate);
    formik.setFieldValue("dateTo", endDate);

    // Calculate the total amount based on selected dates and price
    if (startDate && endDate) {
      const daysDifference = Math.ceil(
        (endDate - startDate) / (1000 * 60 * 60 * 24)
      );

      setTotalDays(daysDifference);

      const newTotalAmount = daysDifference * price;
      setTotalAmount(newTotalAmount);
    }
  };

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-sm mx-auto mt-8 p-4 bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="dateFrom"
            className="block text-gray-700 font-bold mb-2"
          >
            Start Date
          </label>
          <DatePicker
            selected={formik.values.dateFrom}
            onChange={(date) => {
              formik.setFieldValue("dateFrom", date);
              handleDatesSelected({
                startDate: date,
                endDate: formik.values.dateTo,
              });
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="Start Date"
            minDate={new Date()}
            isClearable={true}
            className="border border-red-800 px-4 py-2 rounded w-full"
          />
          {formik.errors.dateFrom && formik.touched.dateFrom && (
            <div className="text-red-500 mt-2">{formik.errors.dateFrom}</div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="dateTo"
            className="block text-gray-700 font-bold mb-2"
          >
            End Date
          </label>
          <DatePicker
            selected={formik.values.dateTo}
            onChange={(date) => {
              formik.setFieldValue("dateTo", date);
              handleDatesSelected({
                startDate: formik.values.dateFrom,
                endDate: date,
              });
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="End Date"
            minDate={new Date()}
            isClearable={true}
            className="border border-red-800 px-4 py-2 rounded w-full"
          />
          {formik.errors.dateTo && formik.touched.dateTo && (
            <div className="text-red-500 mt-2">{formik.errors.dateTo}</div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="guests"
            className="block text-gray-700 font-bold mb-2"
          >
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formik.values.guests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-red-800 px-4 py-2 rounded w-full"
          />
          {formik.errors.guests && formik.touched.guests && (
            <div className="text-red-500 mt-2">{formik.errors.guests}</div>
          )}
        </div>
        <div className="mb-4">
          <p className="text-gray-700 font-bold">Total Days: {totalDays}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 font-bold">
            Total Amount: ${totalAmount}
          </p>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
          >
            Book Now
          </button>
        </div>
        <ToastContainer />
      </form>
    </>
  );
};

export default BookingForm;

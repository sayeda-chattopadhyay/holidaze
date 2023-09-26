// // import { useState } from "react";
// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";

// // const Calender = ({onDatesSelected}) => {
// //   const [date, setDate] = useState(new Date());
// //   const [startDate, setStartDate] = useState(new Date());
// //   const [endDate, setEndDate] = useState();

// //   const handleChange = (range) => {
// //     const [startDate, endDate] = range;
// //     setStartDate(startDate);
// //     setEndDate(endDate);

// //     onDatesSelected({ startDate: startDate, endDate: endDate });
// //   };

// //   return (
// //     <>
// //       <DatePicker
// //         selected={startDate}
// //         onChange={handleChange}
// //         startDate={startDate}
// //         endDate={endDate}
// //         selectsRange
// //         minDate={new Date()}
// //         dateFormat="dd/MM/yyyy"
// //         className="border border-red-800"
// //         isClearable
// //       />
// //     </>
// //   );
// // };

// // export default Calender;

// import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Calendar = ({ onDatesSelected }) => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const handleStartDateChange = (date) => {
//     setStartDate(date);
//     onDatesSelected({ startDate: date, endDate });
//   };

//   const handleEndDateChange = (date) => {
//     setEndDate(date);
//     onDatesSelected({ startDate, endDate: date });
//   };

//   return (
//     <>
//       <div className="flex gap-4">
//         <DatePicker
//           selected={startDate}
//           onChange={handleStartDateChange}
//           startDate={startDate}
//           selectsStart
//           endDate={endDate}
//           minDate={new Date()}
//           dateFormat="dd/MM/yyyy"
//           placeholderText="Start Date"
//           className="border border-red-800"
//           isClearable
//         />
//         <DatePicker
//           selected={endDate}
//           onChange={handleEndDateChange}
//           startDate={startDate}
//           selectsEnd
//           endDate={endDate}
//           minDate={startDate || new Date()}
//           dateFormat="dd/MM/yyyy"
//           placeholderText="End Date"
//           className="border border-red-800"
//           isClearable
//         />
//       </div>
//     </>
//   );
// };

// export default Calendar;

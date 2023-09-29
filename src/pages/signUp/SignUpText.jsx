import { NavLink } from "react-router-dom";
import CardImage from "/src/assets/images/card-image.jpg";

const TextSignUp = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mx-auto max-w-xl">
      <img src={CardImage} alt="Image of a venue" className="w-full h-auto" />
      <div className="p-4">
        <h1 className="text-3xl font-heading mb-2">Holidaze</h1>
        <p className="text-gray-600 font-paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
          ex.
        </p>
        <NavLink
          to="/venues"
          className="bg-secondary text-white px-4 py-2 mt-4 inline-block hover:bg--600 rounded-lg"
        >
          Explore venues
        </NavLink>
      </div>
    </div>
  );
};

export default TextSignUp;

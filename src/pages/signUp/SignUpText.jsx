import { NavLink } from "react-router-dom";

const TextSignUp = () => {
  return (
    <>
      <h1>Holidaze</h1>
      <img src="/src/assets/images/card-image.jpg" alt="image of a venue" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, ex.
      </p>
      <NavLink to="/venues">Explore venues</NavLink>
    </>
  );
};

export default TextSignUp;

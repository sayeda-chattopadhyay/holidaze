import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <NavLink to="/" className="text-white text-2xl font-semibold">
        Holidaze
      </NavLink>
    </div>
  );
};

export default Logo;

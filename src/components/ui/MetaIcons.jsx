
import { FaUtensils, FaWifi, FaPaw, FaCar } from 'react-icons/fa';

const MetaIcons = ({ meta }) => {
  return (
    <div className="flex gap-6">
      {meta.breakfast ? (
        <div>
          <FaUtensils />
          <p>Breakfast</p>
        </div>
      ) : null}

      {meta.wifi ? (
        <div>
          {" "}
          <FaWifi />
          <p>Wi fi</p>
        </div>
      ) : null}

      {meta.pets ? (
        <div>
          {" "}
          <FaPaw />
          <p>Pets</p>{" "}
        </div>
      ) : null}

      {meta.parking ? (
        <div>
          <FaCar />
          <p>Parking</p>
        </div>
      ) : null}
    </div>
  );
};

export default MetaIcons;

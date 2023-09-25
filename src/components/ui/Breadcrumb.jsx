//import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { BsSlashLg } from "react-icons/bs";

const Breadcrumb = ({ paths }) => (
  <div className="mx-auto max-w-7xl md:px-12 mt-10">
    <nav aria-label="max-w-7xl mx-auto">
      <ol className="mb-6 ml-8 flex flex-row">
        {paths.map((path, index) => (
          <li
            key={index}
            className="flex items-center font-paragraph text-sm text-gray-800 underline"
          >
            {index < paths.length - 1 ? (
              <>
                <Link to={path.path}>{path.name}</Link>
                <BsSlashLg />
              </>
            ) : (
              <span className="text-gray-500">{path.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  </div>
);

export default Breadcrumb;

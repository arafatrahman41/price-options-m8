import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div>
      <li className="hover:bg-gray-500 hover:text-white">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
    route: PropTypes.object
};

export default Link;

import PropTypes from "prop-types";
import { FaRegCircleCheck } from "react-icons/fa6";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center gap-2">
        <FaRegCircleCheck className="text-green-600" /> {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;

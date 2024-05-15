import PropTypes from "prop-types";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 29.99,
      features: [
        "Access to cardio area",
        "Basic workout equipment",
        "Locker room access",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 49.99,
      features: [
        "Access to cardio area",
        "Full range of workout equipment",
        "Locker room access",
        "Group fitness classes",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 79.99,
      features: [
        "Access to cardio area",
        "Full range of workout equipment",
        "Locker room access",
        "Group fitness classes",
        "Personal training sessions",
        "Sauna and spa access",
      ],
    },
  ];

  return (
    <div  className='space-y-5'>
        <h2 className="text-4xl">Best Price in the town</h2>
        <div className="grid md:grid-cols-3 gap-5">
        {
            priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
        </div>
    </div>
  );
};

PriceOptions.propTypes = {};

export default PriceOptions;

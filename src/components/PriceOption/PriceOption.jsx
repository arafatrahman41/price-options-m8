import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option
    return (
        <div className='bg-gray-300 rounded-lg p-4 text-white text-center space-y-3 flex flex-col'>
            <h2>
                <span className='text-5xl '>{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h4 className='text-4xl'>{name}</h4>
           <div className='pl-4 flex-grow'>
           <ul>
           {
                features.map((feature, i) => <Feature feature={feature} key={i}></Feature>)
            }
           </ul>
           </div>
           <button className='btn bg-gray-500 text-white border-none w-full hover:bg-gray-400'>Buy now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
};

export default PriceOption;
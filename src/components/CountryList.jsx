import CountryCard from './CountryCard';
import PropTypes from 'prop-types';

const CountryList = ({ countries }) => {
return (
    <div className="country-list">
{countries.map((country) => (
        <div key={country.name} className="country-card">
        <h2>{country.name}</h2>
        <CountryCard country={country} />
        </div>
    ))}
    </div>
);
};

CountryList.propTypes = {
countries: PropTypes.arrayOf(
    PropTypes.shape({
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    })
).isRequired,
};

export default CountryList;

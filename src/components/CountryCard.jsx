import PropTypes from 'prop-types';

const CountryCard = ({ country }) => {
return (
    <div className="card">
    <img src={country.flag} alt={`${country.name} Flag`} />
    <h3>{country.name}</h3>
    <p>Capital: {country.capital}</p>
    <p>Region: {country.region}</p>
    </div>
);
};

CountryCard.propTypes = {
country: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    // Vous pouvez ajouter d'autres validations de propriétés ici si nécessaire
}).isRequired,
};

export default CountryCard;

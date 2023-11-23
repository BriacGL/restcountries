import PropTypes from 'prop-types';

const CountryCard = ({ country }) => {
let capitalDisplay = country.capital;

  // Vérifier si `capital` est un array et le transformer en string s'il l'est
if (Array.isArray(country.capital)) {
    capitalDisplay = country.capital.join(', ');
}

return (
    <div className="card">
    <img src={country.flag} alt={`${country.name} Flag`} />
    <h3>{country.name}</h3>
    <p>Capital: {capitalDisplay}</p>
    <p>Region: {country.region}</p>
    </div>
);
};

CountryCard.propTypes = {
country: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    capital: PropTypes.oneOfType([
      PropTypes.string, // Accepter les strings
      PropTypes.arrayOf(PropTypes.string), // Ou un array de strings
    ]),
    region: PropTypes.string.isRequired,
}).isRequired,
};

export default CountryCard;

import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';
import { fetchCountries } from './services/restCountriesApi';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (region) => {
    setSearchTerm(region); // Mettre à jour le terme de recherche
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesData = await fetchCountries();
        // Filtrer les données pour garantir que `capital` est une chaîne de caractères
        const filtered = countriesData.map((country) => ({
          flag: country.flag,
          name: country.name,
          capital: Array.isArray(country.capital) ? country.capital.join(', ') : country.capital,
          region: country.region,
        }));
        setCountries(filtered);
        setFilteredCountries(filtered);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterCountries = () => {
      // Utiliser `countries` pour filtrer les données au lieu de `filteredCountries`
      const filtered = countries.filter((country) =>
        country.region.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
    };

    filterCountries();
  }, [searchTerm, countries]);

  return (
    <div className="app">
      <h1>Country Explorer</h1>
      <SearchBar handleSearch={handleSearch} />
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default App;

import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';
import { fetchCountries } from './services/restCountriesApi';

const App = () => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (region) => {
    setSearchTerm(region); // Mettre à jour le terme de recherche
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesData = await fetchCountries();
        setFilteredCountries(countriesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterCountries = async () => {
      try {
        const countriesData = await fetchCountries();
        // Filtrer les pays en fonction du terme de recherche
        const filtered = countriesData.filter((country) =>
          country.region.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(filtered);
      } catch (error) {
        console.error(error);
      }
    };

    filterCountries();
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>Country Explorer</h1>
      <SearchBar handleSearch={handleSearch} />
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default App;
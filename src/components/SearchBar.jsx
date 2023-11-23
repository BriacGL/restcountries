import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ handleSearch }) => {
const [searchValue, setSearchValue] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchValue);
};

return (
    <div className="search-bar">
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Search by region..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
    </form>
    </div>
);
};

SearchBar.propTypes = {
handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;

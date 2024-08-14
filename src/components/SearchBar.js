import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearchClick = () => {
    onSearch(location, maxPrice);
  };

  return (
    <div className="search-bar-container">
      <div className="search-inputs">
        <input
          type="text"
          className="search-input"
          placeholder="Enter a location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          className="search-input"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button className="search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

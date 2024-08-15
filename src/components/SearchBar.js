import React, { useState } from 'react';

const SearchBar = ({ onSearch, category, setCategory, categories }) => {
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearchClick = () => {
    onSearch(location, maxPrice);
    setLocation("");  // Clear the location input after search is triggered
    setMaxPrice("");  // Clear the max price input after search is triggered
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
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="category-select"
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button className="search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

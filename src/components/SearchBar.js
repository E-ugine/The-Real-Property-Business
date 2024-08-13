import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar-container">
      <div>
       
      </div>
      <div className="search-inputs">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Enter a location" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;

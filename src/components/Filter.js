import React from 'react';

function Filter({ search, setSearch, setSortBy, category, setCategory, categories = [] }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search description"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {Array.isArray(categories) && categories.map((cat, index) => (
          <option key={index} value={cat}>
           
          </option>
        ))}
      </select>
      <button onClick={() => setSortBy("location")}>Sort by location</button>
      <button onClick={() => setSortBy("category")}>Sort by Category</button>
    </div>
  );
}

export default Filter;

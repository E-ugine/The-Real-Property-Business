import React from 'react';

function Filter({ search, setSearch, category, setCategory, categories = [] }) {
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
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;

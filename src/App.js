import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import PropertiesList from './components/PropertiesList';
import PropertiesToBuy from './components/PropertiesToBuy';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import PropertyDetails from './components/PropertyDetails'; 

function App() {
  const [properties, setProperties] = useState([]);
  const [selectedHomes, setSelectedHomes] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [location, setLocation] = useState("");  
  const [maxPrice, setMaxPrice] = useState("");  
  const [user, setUser] = useState(null); 

  useEffect(()=> {
    fetch('http://localhost:3000/properties')
    .then((resp) => resp.json())
    .then((data) => {
      setProperties(data)
    })
  },[])

  function handleBuyHome(propertyToBuy) {
    if (!selectedHomes.find((property) => property.id === propertyToBuy.id)) {
      setSelectedHomes([...selectedHomes, propertyToBuy]);
    }
  }

  const handleSearch = (searchLocation, searchMaxPrice) => {
    setLocation(searchLocation);
    setMaxPrice(searchMaxPrice);
  };

  const filteredProperties = properties
    .filter(property => property.location.includes(search))
    .filter(property => category === "" || property.category === category)
    .filter(property => location === "" || property.location.includes(location)) 
    .filter(property => maxPrice === "" || property.price <= parseInt(maxPrice)); 

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === "location") {
      return a.location.localeCompare(b.location);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <Router>
      <div>
        <NavBar user={user} />
        <Routes>
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/" element={user ? (
            <>
              <SearchBar 
                search={search}
                setSearch={setSearch}
                onSearch={handleSearch} 
              />
              <Filter
                search={search}
                setSearch={setSearch}
                setSortBy={setSortBy}
                category={category}
                setCategory={setCategory}
                categories={categories}
              />
              <Hero />
              <PropertiesList 
                properties={sortedProperties} 
                onAdd={handleBuyHome}
                onDelete={(id) => setSelectedHomes(selectedHomes.filter(property => property.id !== id))} 
              />
              <PropertiesToBuy 
                properties={selectedHomes} 
                onAdd={handleBuyHome} 
              />
            </>
          ) : (
            <Navigate to="/login" />
          )} />
          <Route path="/property/:id" element={<PropertyDetails properties={properties} />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

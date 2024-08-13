import React, {useState, useEffect} from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import PropertiesList from './components/PropertiesList';
import PropertiesToBuy from './components/PropertiesToBuy';
import Search from './components/Search';

import './App.css'

function App() {

  const [properties, setProperties] = useState([]);
  const[selectedHomes, setSelectedHomes] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:3000/properties')
    .then((resp) => resp.json())
    .then((data) => {
      setProperties(data)
    })
  },[])

  function handleBuyHome(propertyToBuy){
   if (selectedHomes.find((property) => property.id === propertyToBuy.id)) {
    setSelectedHomes([...selectedHomes, propertyToBuy])
   }
  }


  return (
    <div>
      
      <NavBar/>
     <Search/>
      <Hero/>
      <PropertiesList  properties = {properties} />
      <PropertiesToBuy properties = { selectedHomes} onAdd= {handleBuyHome} />
     

    </div>
  )
}

export default App;



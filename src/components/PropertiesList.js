import React from 'react';
import PropertiesCard from './PropertiesCard';

function PropertiesList({ properties, onAdd, onDelete, location, maxPrice }) {
  const filteredProperties = properties.filter((property) => {
    const matchesLocation = location ? property.location.toLowerCase().includes(location.toLowerCase()) : true;
    const matchesMaxPrice = maxPrice ? property.price <= parseFloat(maxPrice) : true;
    return matchesLocation && matchesMaxPrice;
  });

  return (
    <div className='properties-container'>
      <h2 className='properties-list-title'>Buy Your Dream Home Now!</h2>
      <div className='properties-form'>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertiesCard 
              key={property.id}
              property={property}
              onAdd={onAdd}
              onDelete={onDelete}
            />
          ))
        ) : (
          <p>No properties match your search criteria.</p>
        )}
      </div>
    </div>
  );
}

export default PropertiesList;

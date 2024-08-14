import React from 'react';
import PropertiesCard from './PropertiesCard';

function PropertiesList({ properties, onAdd, onDelete }) {
  return (
    <div className='properties-container'>
      <h2 className='properties-list-title'>Buy Your Dream Home Now!</h2>
      <div className='properties-form'>
        {properties.map((property) => (
          <PropertiesCard 
            key={property.id}
            property={property}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default PropertiesList;

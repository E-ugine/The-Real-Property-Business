// src/components/PropertiesList.js
import React from 'react';
import PropertiesForm from './PropertiesForm';

function PropertiesList({ properties, onAdd }) {
  return (
    <div className='properties-container'>
      <h2 className='properties-list-title'>Buy Your Dream Home Now!</h2>
      <div className='properties-form'>
        {properties.map((property) => (
          <PropertiesForm 
            key={property.id}
            property={property}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );
}

export default PropertiesList;

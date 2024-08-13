// src/components/PropertiesForm.js
import React from 'react';

function PropertiesForm({ property, onAdd }) {
  return (
    <div className='properties-form'>
      <h3>{property.location}</h3>
      <img src={property.image_url} alt={property.description} />
      <a href='#'>View</a>
      <button 
        className='add-button' 
        onClick={() => onAdd(property)}
      >
        AddToHome
      </button>
    </div>
  );
}

export default PropertiesForm;

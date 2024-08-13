// src/components/PropertiesForm.js
import React from 'react';

function PropertiesForm({ property, onAdd }) {
  return (
    <div className='properties-form'>
      <h3>{property.location}</h3>
      <img className='images' src={property.image_url} alt={property.description} />
      <a href='#'>View</a> 

      <div>
      <button 
        className='add-button' 
        onClick={() => onAdd(property)}
      >
        Add
      </button>
      </div>
    </div>
    
    
  );
}

export default PropertiesForm;

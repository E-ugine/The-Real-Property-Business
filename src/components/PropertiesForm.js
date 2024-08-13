// src/components/PropertiesForm.js
import React from 'react';

function PropertiesForm({ property, onAdd }) {
  return (
    <div className='properties-form'>
      <div>
      <img className='images' src={property.image_url} alt={property.description} />
      <h3>{property.location}</h3> 
      <a href='#'>View</a> 
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

import React from 'react';
import PropertiesCard from './PropertiesCard';

function PropertiesToBuy({ properties = [], onRemove }) {
  return (
    <div className='properties-to-buy'>
      <h2 className='properties-to-buy-title'>My Properties</h2>
      <div className='properties-form'>
        {properties.map((property) => (
          <div key={property.id} className='properties-card'>
            <div>
              <img className='images' src={property.image_url} alt={property.description} />
              <h3>{property.location}</h3>
              <button 
                className='remove-button' 
                onClick={() => onRemove(property.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertiesToBuy;

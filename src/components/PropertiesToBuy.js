import React from 'react';
import PropertiesCard from './PropertiesCard';

function PropertiesToBuy({ properties = [], onAdd }) {
  return (
    <div className='properties-to-buy'>
      <h2 className='properties-to-buy-title'>My Properties</h2>
      <div className='properties-form'>
        {properties.map((property) => (
          <PropertiesCard
            key={property.id}
            property={property}
            onClick={() => onAdd(property)}
          />
        ))}
      </div>
    </div>
  );
}

export default PropertiesToBuy;

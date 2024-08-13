import React from 'react'
import PropertiesForm from './PropertiesForm';

function PropertiesToBuy({properties, onAdd}) {
  return (
    <div className='properties-to-buy' >
      <h2>My Properties</h2>
      <div className='properties-form'>
      {properties.map((property) => {
        return <PropertiesForm key={property.id}
        property={property}
        onClick = {() => onAdd(property.id)}
        />
      })}
      </div>
    </div>
  )
}
export default PropertiesToBuy;

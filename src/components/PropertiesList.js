import React from 'react'
import PropertiesForm from './PropertiesForm';

 function PropertiesList({properties}) {

 
  return (
    <div className='properties-list'>
     <h2>Buy Your Dream Home Now!</h2>
     <div className='properties-form'>
      {properties.map((property) => {
      return  <PropertiesForm 
          key={property.id}
          property = {property}

          />
      })}
     </div>
    </div>
  )
}
export default PropertiesList;

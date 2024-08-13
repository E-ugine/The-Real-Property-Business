import React from 'react'

 function PropertiesForm({property, onClick}) {
  return (
    <div className='properties-form' onClick={onClick}>
         <h3> {property.location} </h3>
      <img src = {property.image_url} alt= {property.name} />
      <button className='add-button'> AddToHome</button>
    </div>
  )
}
export default PropertiesForm;

import React from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetails({ properties }) {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className='property-details'>
      <img className='images' src={property.image_url} alt={property.description} />
      <h2>{property.location}</h2>
      <p>{property.description}</p>
      <p>Price: {property.price}</p>
      <p>Category: {property.category}</p>
      <p>Contact: {property.contact}</p>
    </div>
  );
}

export default PropertyDetails;

import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetails({ properties }) {
  const [property, setProperty] = useState({});
  const params = useParams();
  const propertyId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:3000/properties/${propertyId}`)
    .then(r => r.json())
    .then(data => setProperty(data))
    .catch(error => console.error(error));
  }, [propertyId]);

  return (
    <div className='property-details'>
      <img className='images' src={property.image_url} alt={property.description} />
      <h2>{property.location}</h2>
      <p> <strong>Description: </strong> {property.description}</p>
      <p> <strong>Price: </strong> {property.price}</p>
      <p> <strong>Category: </strong>{property.category}</p>

     
    </div>
  );
}

export default PropertyDetails;

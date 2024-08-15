import React from 'react';
import { Link } from 'react-router-dom';

function PropertiesCard({ property, onAdd, onDelete }) {
  const handleDelete = () => {
    fetch(`http://localhost:3000/properties/${property.id}`, {
      method: 'DELETE',
    })
      .then(() => onDelete(property.id))
      .catch((error) => console.error('Error deleting property:', error));
  };

  return (
    <>
    <div className='properties-card'>
     
        <div className='property-image'>
        <img className='images' src={property.image_url} alt={property.description} />
        </div>
        <h3>{property.location}</h3>
        <Link to={`/property/${property.id}`}>View</Link>
       
          <div className='button-div'>
          <button className='edit-button'>
            Edit
          </button>
        
        <button 
          className='add-button' 
          onClick={() => onAdd(property)}
        >
          Add
        </button>
        <button 
          className='delete-button' 
          onClick={handleDelete}
        >
          Delete
        </button>
          </div>
      
    </div>
    </>
  );
}

export default PropertiesCard;

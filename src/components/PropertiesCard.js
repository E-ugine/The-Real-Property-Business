import React from 'react';
import { Link } from 'react-router-dom';

function PropertiesCard({ property, onAdd, onDelete }) {
  return (
    <div className='properties-form'>
      <div>
        <img className='images' src={property.image_url} alt={property.description} />
        <h3>{property.location}</h3>
        <Link to={`/property/${property.id}`}>View</Link>
<Link to={`/edit/${property.id}`}></Link>

        <button 
          className='add-button' 
          onClick={() => onAdd(property)}
        >
          Add
        </button>
        <button 
          className='delete-button' 
          onClick={() => onDelete(property.id)}
        >
          Delete
        </button>
        <Link to={`/edit/${property.id}`}>
          <button className='edit-button'>
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PropertiesCard;

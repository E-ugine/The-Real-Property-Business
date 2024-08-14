import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PropertiesForm({ onUpdate }) {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/properties/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setProperty(data);
        setLocation(data.location);
        setDescription(data.description);
        setImageUrl(data.image_url);
        setCategory(data.category);
      });
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    const updatedProperty = {
      ...property,
      location,
      description,
      image_url: imageUrl,
      category,
    };

    fetch(`http://localhost:3000/properties/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProperty),
    })
    .then((resp) => resp.json())
    .then((data) => {
      onUpdate(data);
      navigate("/");//After an update, the page should redirect to home page.
    });
  }

  return (
    <div>
      <h2>Update Property</h2>
      {property && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <button type="submit">Update Property</button>
        </form>
      )}
    </div>
  );
}

export default PropertiesForm;

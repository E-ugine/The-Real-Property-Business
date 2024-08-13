import React , {useEffect, useState} from 'react'

 function PropertiesList() {

  const [properties, setProperties] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3000/properties')
    .then((resp) => resp.json())
    .then((data) => {
      setProperties(data)
    })
  },[])

  return (
    <div>
      <ul>
        {properties.map((property) => {
          return <l key={property.id}>
            {property.location}
           {property.description}
           {property.size}
          <img src={property.image_url} alt= "A beautiful home" />
          </l>
        })}
      </ul>
    </div>
  )
}
export default PropertiesList;

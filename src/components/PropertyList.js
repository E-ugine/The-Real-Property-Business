import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";

function PropertyList() {
    const [properties, setProperties] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/properties")
        .then((r) => r.json())
        .then((data) => setProperties(data))
        .catch((error) => console.error("error fetching properties", error))
    }, [])


    return(
        <div>
            <ul>
                {properties.map(property => (
                    <PropertyCard key={property.id} property={property}/>
                ))}
            </ul>
            

        </div>
    );
}


export default PropertyList;

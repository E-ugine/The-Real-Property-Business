import React from "react";

function PropertyCard({property}){
    return(
        <div>
            <ul>
                {property.location}
                {property.category}
                {property.size}
                {property.description}
                {property.price}
                <img src={property.image_url} alt={property.description}/>
            </ul>
        </div>
    );
}



export default PropertyCard;
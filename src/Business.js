import React from "react";
import './Business.css';

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

function Business() {
    return (
        <div className="container">
            <div className="image_container">
                <img src={business.imageSrc} alt=""></img>
            </div>

           <div className="text_div">

            <h2>{business.name}</h2>

            <div className="container_child">
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.state}</p>
                <p>{business.zipCode}</p>
            </div>

            <div className="container_child">
                <p>{business.category}</p>
                <p>{business.rating}</p>
                <p>{business.reviewCount}</p>
            </div>

           </div>

        </div>
    );
}

export default Business;
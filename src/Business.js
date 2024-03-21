import React from "react";
import styles from './Business.module.css';

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
};

function Business() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={business.imageSrc} alt=""></img>
            </div>
            <h2>{business.name}</h2>
            <div className={styles.businessInfo}>
                <div className={styles.locationContainer}>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.state} ${business.zipCode}`}</p>
                </div>

                <div className={styles.reviewContainer}>
                    <h3 className={styles.category}>{business.category}</h3>
                    <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div>
           </div>
        </div>
    );
}

export default Business;
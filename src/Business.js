import React from "react";
import styles from './Business.module.css';


function Business(props) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={props.businessObject.imageSrc} alt=""></img>
            </div>
            <h2>{props.businessObject.name}</h2>
            <div className={styles.businessInfo}>
                <div className={styles.locationContainer}>
                    <p>{props.businessObject.address}</p>
                    <p>{props.businessObject.city}</p>
                    <p>{`${props.businessObject.state} ${props.businessObject.zipCode}`}</p>
                </div>

                <div className={styles.reviewContainer}>
                    <h3 className={styles.category}>{props.businessObject.category}</h3>
                    <h3 className={styles.rating}>{`${props.businessObject.rating} stars`}</h3>
                    <p>{`${props.businessObject.reviewCount} reviews`}</p>
                </div>
           </div>
        </div>
    );
}

export default Business;
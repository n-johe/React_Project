import React from "react";
import Business from "./Business";
import styles from './BusinessList.module.css'


function BusinessList(props) {
    return (
        <div className={styles.container}>
            {props.businesses.map(business => {
                return <Business business={business} key={business.id}/>;
            })}
        </div>
    );
}

export default BusinessList;
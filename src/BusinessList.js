import React from "react";
import Business from "./Business";
import styles from './BusinessList.module.css'


function BusinessList(prop) {
    return (
        <div className={styles.container}>
            {prop.businesses.map(business => {
                return <Business businessObject={business}/>;
            })}
        </div>
    );
}

export default BusinessList;
import React from "react";
import Business from "./Business";
import styles from './BusinessList.module.css'


function BusinessList() {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li><Business/></li>
                <li><Business/></li>
                <li><Business/></li>
                <li><Business/></li>
                <li><Business/></li>
                <li><Business/></li>
            </ul>
        </div>
    );
}

export default BusinessList;
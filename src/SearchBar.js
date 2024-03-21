import React from "react";
import styles from './SearchBar.module.css'

function searchBar() {

    return (
        <div className={styles.container}>
            <ul className={styles.options}>
                <li>Best Match</li>
                <li>Highest Rated</li>
                <li>Most Reviewed</li>
            </ul>
            <div className={styles.fields}>
                <input placeholder="Category"/>
                <input placeholder="Location"/>
            </div>
            <div className={styles.submit}>
                <button type="submit">Let's Go</button>
            </div>
        </div>
    );

}

export default searchBar;
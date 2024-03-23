import React, {useState} from "react";
import styles from './SearchBar.module.css';

function SearchBar() {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [option, setOption] = useState('Best Match');

    const eventHandler = () => {
        console.log(`Searching Yelp with ${term} in ${location} with option ${option}`);
    };

    return (
        <div className={styles.container}>
            <ul className={styles.options}>
                <li className={option === 'Best Match' ? styles.activeOption : ''}
                onClick={() => {setOption('Best Match')}}>Best Match</li>
                <li className={option === 'Highest Rated' ? styles.activeOption : ''}
                onClick={() => {setOption('Highest Rated')}}>Highest Rated</li>
                <li className={option === 'Most Reviewed' ? styles.activeOption : ''}
                onClick={() => {setOption('Most Reviewed')}}>Most Reviewed</li>
            </ul>
            <div className={styles.fields}>
                <input placeholder="Category" onChange={(event) => {setTerm(event.target.value)}}/>
                <input placeholder="Location" onChange={(event) => {setLocation(event.target.value)}}/>
            </div>
            <div className={styles.submit}>
                <button type="submit" onClick={eventHandler}>Let's Go</button>
            </div>
        </div>
    );

}

export default SearchBar;
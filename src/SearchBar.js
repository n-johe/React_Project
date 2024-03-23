import React, {useState} from "react";
import styles from './SearchBar.module.css';



function SearchBar(props) {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [option, setOption] = useState('best_match');

    const eventHandler = (event) => {
       event.preventDefault();
       props.searchYelp(term, location, option);
    };

    return (
        <div className={styles.container}>
            <ul className={styles.options}>
                <li className={option === 'best_match' ? styles.activeOption : ''}
                onClick={() => {setOption('best_match')}}>Best Match</li>
                <li className={option === 'rating' ? styles.activeOption : ''}
                onClick={() => {setOption('rating')}}>Highest Rated</li>
                <li className={option === 'review_count' ? styles.activeOption : ''}
                onClick={() => {setOption('review_count')}}>Most Reviewed</li>
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
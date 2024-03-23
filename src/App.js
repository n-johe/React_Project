import React, {useState} from 'react';
import styles from './App.module.css';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';
import {search} from '../src/utils/getData';


function App() {

  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await search(term, location, sortBy);
    setBusinesses(businesses);
  }

  return (
    <div className={styles.container}>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;

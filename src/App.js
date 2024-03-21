import styles from './App.module.css';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className={styles.container}>
      <SearchBar/>
      <BusinessList/>
    </div>
  );
}

export default App;

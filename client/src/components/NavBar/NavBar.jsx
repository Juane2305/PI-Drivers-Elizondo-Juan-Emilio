import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'

import styles from './navBar.module.css'
import FilterDrivers from '../Filters/FilterDrivers';




const NavBar = ({handleChange, handleSubmit}) => {





    return (
        <div className={styles.container}>
            <Link to='/create'>
                <button className={styles.button}>Create a new driver</button>
            </Link>
            <div className={styles.searchBar}>
                <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
            </div>
            <FilterDrivers/>
        </div>
    );
};

export default NavBar;
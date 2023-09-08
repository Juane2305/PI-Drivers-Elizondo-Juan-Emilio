import styles from './searchBar.module.css'

const SearchBar = ({handleChange, handleSubmit}) => {
    return (
        <div className={styles.container}>
            <form onChange={ handleChange } >
                <input type="search" placeholder="Ingresa un nombre..." />
                <button type='submit' onClick={ handleSubmit }>Buscar</button>
            </form>
        </div>
    );
};

export default SearchBar;
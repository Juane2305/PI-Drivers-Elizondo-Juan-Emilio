import SearchBar from '../SearchBar/SearchBar'

const NavBar = ({handleChange, handleSubmit}) => {
    return (
        <div>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    );
};

export default NavBar;
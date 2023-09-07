

const SearchBar = () => {
    return (
        <div>
            <form>
                <input type="search" value={name} placeholder="Ingresa un nombre..." />
                <button>Buscar</button>
            </form>
        </div>
    );
};

export default SearchBar;
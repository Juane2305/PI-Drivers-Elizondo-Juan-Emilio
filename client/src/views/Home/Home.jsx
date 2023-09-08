import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllDrivers, getByName } from "../../redux/actions";
import CardList from "../../components/CardList/CardList";
import NavBar from "../../components/NavBar/NavBar";
import styles from './home.module.css'


const Home = () => {

    const dispatch = useDispatch();
    const allDrivers = useSelector((state)=> state.allDrivers);
    const [searchString, setSearchString] = useState("");

    const handleChange = (e) => {
        e.preventDefault()
        setSearchString(e.target.value)
    }
    //*Filtro con el BackEnd

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(getByName(searchString))
    }

    //*Filtro sobre el estado
    // const [filtered, setFiltered] = useState(allDrivers);
    


    

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const filtered = allDrivers.filter(driver=>driver.name.toLowerCase().includes(searchString.toLowerCase()))
    //     setFiltered(filtered)
    // }



    useEffect(() => {
        dispatch(getAllDrivers())
    }, [dispatch])

    

    return (
        <div className={styles.home}>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <CardList allDrivers={allDrivers}/>
        </div>
    );
};

export default Home;
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllDrivers, getByName } from "../../redux/actions";
import CardList from "../../components/CardList/CardList";
import NavBar from "../../components/NavBar/NavBar";
import styles from './home.module.css'
import Pagination from "./Pagination/Pagination";


const Home = () => {

    const dispatch = useDispatch();
    const allDrivers = useSelector((state)=> state.allDrivers);
    const [driversQt, setDriversQt] = useState(9)
    const [currentPage, setCurrentPage] = useState(1)
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



    //Pagination
    const indexFin = currentPage * driversQt;
    const indexIni = indexFin - driversQt;

    const nDrivers = allDrivers.slice(indexIni, indexFin)

    const nPages = Math.ceil(allDrivers.length / driversQt);



    useEffect(() => {
        dispatch(getAllDrivers())
    }, [dispatch])

    

    return (
        <div className={styles.home}>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <CardList nDrivers={nDrivers}/>
            <Pagination 
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            nPages={nPages}
            />
        </div>
    );
};

export default Home;
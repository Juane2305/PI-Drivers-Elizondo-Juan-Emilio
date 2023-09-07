import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllDrivers } from "../../redux/actions";
import CardList from "../../components/CardList/CardList";




const Home = () => {

    const dispatch = useDispatch();
    const drivers = useSelector((state)=> state.allDrivers)

    useEffect(() => {
        dispatch(getAllDrivers())
    }, [dispatch])

    // const [drivers, setDrivers] = useState([{nombre:'Juane'},{nombre:'Teo'}]);

    return (
        <div>
            <h1>Home</h1>
            <CardList drivers={drivers}/>
        </div>
    );
};

export default Home;
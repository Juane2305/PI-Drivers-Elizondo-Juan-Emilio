import style from './styles/card.module.css'
import {Link} from 'react-router-dom'


const Card = ({driver}) => {

    return (
        <div className={style.card}>
            <Link to={`/home/${driver.id}`}>
                <img src={driver.image} alt="driver image" className={style.image}/>
                <div className={style.nameTeams}>
                    <p className={style.name}>{`${driver.name} ${driver.lastname}`}</p>
                    <p>Teams: {driver.team}</p>
                </div>   
            </Link>    
        </div>
    );
};

export default Card;
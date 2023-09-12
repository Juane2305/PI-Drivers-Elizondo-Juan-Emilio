import style from './styles/card.module.css'
import {Link} from 'react-router-dom'


const Card = ({driver}) => {

    return (
        <div className={style.card}>
            <Link className={style.link} to={`/home/${driver.id}`}>
                <img src={driver.image} alt="driver image" className={style.image}/>
                <div className={style.nameTeams}>
                    <p className={style.name}>{`${driver.name} ${driver.lastname}`}</p>
                    <p><strong>Team/s:</strong> {driver.team}</p>
                </div>   
            </Link>    
        </div>
    );
};

export default Card;
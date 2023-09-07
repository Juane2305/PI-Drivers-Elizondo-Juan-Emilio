import style from './styles/styles.module.css'

const Card = ({driver}) => {

    return (
        <div className={style.card}>
            <img src={driver.image} alt="driver image" className={style.image}/>
            <h1>{`${driver.name} ${driver.lastname}`}</h1>
            <h2>Teams: {driver.team}</h2>
            
        </div>
    );
};

export default Card;
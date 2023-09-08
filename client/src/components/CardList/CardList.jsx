import Card from "../Card/Card";
import style from './cardList.module.css'

const CardList = ({allDrivers}) => {

    const driversList = allDrivers;

    return (
        <div className={style.cardList}>
            {driversList?.map(driver => (
                <Card key={driver.id} driver={driver}/>
            ))}
        </div>
        
    );
};

export default CardList;
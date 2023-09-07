import Card from "../Card/Card";
import style from './style.module.css'

const CardList = ({drivers}) => {

    const driverList = drivers

    return (
        <div className={style.cardList}>
            {driverList?.map(driver => (
                <Card driver={driver}/>
            ))}
        </div>
        
    );
};

export default CardList;
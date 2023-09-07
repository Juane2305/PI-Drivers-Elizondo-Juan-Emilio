import React from 'react';
import { useEffect } from 'react';
import { getAllDrivers } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux'


const Card = () => {

    const dispatch = useDispatch();
    const allDrivers = useSelector(state => state.allDrivers)
    console.log(allDrivers);
    

    useEffect(() => {
        dispatch(getAllDrivers());
      }, [dispatch])


    return (
        <div>
            <h1>HOME PAGE</h1>
            {allDrivers.map((driver) => {
                return(
                    <h2 key={driver.id}>{`${driver.name}  ${driver.lastname}`}</h2>
                )
            })}
        </div>
    );
};

export default Card;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterByOrigin, getAllDrivers, getAllTeams, filterByTeam, orderByBirthdateAsc, orderByBirthdateDesc, orderByName, getByName } from '../../redux/actions';
import styles from './filters.module.css'

const FilterDrivers = () => {

    // constants 

    const dispatch = useDispatch();
    const [team, setTeam] = useState('all')


    // Functions


    const teams = useSelector((state) => state.allTeams).sort(
        function(a, b) {
            if(a < b) return -1;
            else return 1
        }
    )


    const handleOrderByName = (event) => {
        dispatch(orderByName(event.target.value));
    }

    const handleOrderByBirthdateAsc = (event) => {
        dispatch(orderByBirthdateAsc(event.target.value));
    }

    const handleOrderByBirthdateDesc = (event) => {
        dispatch(orderByBirthdateDesc(event.target.value))
    }

    const handleFilterByOrigin = (event) => {
        dispatch(filterByOrigin(event.target.value))
    }

    const handleFilterByTeam = (event) => {
        setTeam(event.target.value)
        dispatch(filterByTeam(event.target.value));
    }


    useEffect(() => {
        dispatch(getAllDrivers())
        dispatch(getAllTeams())
    },[dispatch]);



    return (
        <div>
            <div className="filters">
                <div>Filter by origin</div>
                <select onChange={event => {handleFilterByOrigin(event)}}>
                    <option value="all">All Drivers</option>
                    <option value="api">Api drivers</option>
                    <option value="from_DB">My drivers</option>
                </select>
            </div>


            <div>Filter by team</div>
            <select value={team} onChange={event=>{handleFilterByTeam(event)}}>
                <option value="all">All teams</option>
                {teams.map((team) =>{
                    return(
                        <option value={team} key={team}>
                            {team}
                        </option>
                    )
                })}
            </select>



            <div>Order by name</div>
            <select onChange={event => {handleOrderByName(event)}}>
                <option value='name'>By Name</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
            </select>



            <div>Order by birthdate</div>
            <select>
                <option value='asc' onClick={event => {handleOrderByBirthdateAsc(event)}}>Asc</option>
                <option value='desc' onClick={handleOrderByBirthdateDesc}>Desc</option>
            </select>

            
        </div>
    );
};

export default FilterDrivers;
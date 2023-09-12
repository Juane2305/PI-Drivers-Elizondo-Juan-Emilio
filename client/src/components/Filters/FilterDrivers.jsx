import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterByOrigin, getAllDrivers, getAllTeams, filterByTeam } from '../../redux/actions';
import Card from '../Card/Card'
import styles from './filters.module.css'

const FilterDrivers = () => {

    // constants 

    const dispatch = useDispatch();
    const drivers = useSelector(state=> state.driversFiltered);
    const [order, setOrder] = useState('');
    const [team, setTeam] = useState('all')


    // Functions


    const teams = useSelector((state) => state.allTeams).sort(
        function(a, b) {
            if(a < b) return -1;
            else return 1
        }
    )

    const handleFilterByOrigin = (event) => {
        dispatch(filterByOrigin(event.target.value))
        setOrder(`Ordered ${event.target.value}`)
    }

    const handleFilterByTeam = (event) => {
        setTeam(event.target.value)
        dispatch(filterByTeam(event.target.value));
        setOrder(`Ordered ${event.target.value}`)
    }


    useEffect(() => {
        dispatch(getAllDrivers())
        dispatch(getAllTeams())
    },[dispatch]);

    return (
        <div>
            <div className="filters">
                <select onChange={event => {handleFilterByOrigin(event)}}>
                    <option value="All">All Drivers</option>
                    <option value="api">Api drivers</option>
                    <option value="from_DB">My drivers</option>
                </select>
            </div>
            <div>Filter drivers by team</div>
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

            
        </div>
    );
};

export default FilterDrivers;
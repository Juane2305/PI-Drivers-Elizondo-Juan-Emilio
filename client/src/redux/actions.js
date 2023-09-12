import axios from "axios";
import { GET_ALL_DRIVERS, GET_BY_NAME, GET_BY_DETAIL, RESET_DETAIL, GET_ALL_TEAMS, CREATE_NEW_DRIVER, FILTER_BY_BIRTHDATE, FILTER_BY_ORIGIN, FILTER_BY_TEAM } from "./action-types";

export const getAllDrivers = () => {
    return async function(dispatch){
        const response = await axios('http://localhost:3001/drivers')
        return dispatch({ type: GET_ALL_DRIVERS, payload: response.data});
    }
}


export const getByName = (name) => {
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/drivers/?name=${name}`)
        return dispatch({ type: GET_BY_NAME, payload: response.data});
    }
}



export const getByDetail = (id) => {
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/drivers/${id}`)
        return dispatch({ type: GET_BY_DETAIL, payload: response.data});
    }
}

export const resetDetail = ()=> {
    return{
        type: RESET_DETAIL
    }
}

export const getAllTeams = () => {
    return async function(dispatch){
        const response = await axios('http://localhost:3001/teams')
        let teamsList = response.data.map((team) => team.name)
        return dispatch({type: GET_ALL_TEAMS, payload: teamsList})
    }
}



export const createNewDriver = (payload) => {
    return async function(dispatch){
        const newDriver = await axios.post('http://localhost:3001/drivers', payload);
        return newDriver
    }
}


export const filterByOrigin = (origin) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin
    }
}

export const filterByTeam = (payload) => {
    return{
        type: FILTER_BY_TEAM,
        payload
    }
}
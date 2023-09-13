import axios from "axios";
import { GET_ALL_DRIVERS, GET_BY_NAME,ORDER_BY_NAME, GET_BY_DETAIL, RESET_DETAIL, GET_ALL_TEAMS, FILTER_BY_ORIGIN, FILTER_BY_TEAM, ORDER_BY_BIRTHDATE_ASC, ORDER_BY_BIRTHDATE_DESC } from "./action-types";

export const getAllDrivers = () => {
    return async function(dispatch){
        const response = await axios('http://localhost:3001/drivers')
        return dispatch({ type: GET_ALL_DRIVERS, payload: response.data});
    }
}

export const getAllTeams = () => {
    return async function(dispatch){
        const response = await axios('http://localhost:3001/teams')
        let teamsList = response.data.map((team) => team.name)
        return dispatch({type: GET_ALL_TEAMS, payload: teamsList})
    }
}

export const orderByName = (payload) => {
    return{ type: ORDER_BY_NAME, payload }
}

export const orderByBirthdateAsc = (drivers) => {
    const result = [...drivers].sort((a, b) => new Date(b.birthdate).getTime() - new Date(a.birthdate).getTime())
    return { type: ORDER_BY_BIRTHDATE_ASC, payload: result }
}

export const orderByBirthdateDesc = (drivers) => {
    const result = [...drivers].sort((a, b) => new Date(a.birthdate).getTime() - new Date(b.birthdate).getTime())
    return { type: ORDER_BY_BIRTHDATE_DESC, payload: result }
}


export const filterByOrigin = (payload) => {
    return { type: FILTER_BY_ORIGIN, payload }
}


export const filterByTeam = (payload) => {
    return{
        type: FILTER_BY_TEAM,
        payload
    }
}



export const getByName = (name) => {
    return async function(dispatch){
        try {
            const response = await axios(`http://localhost:3001/drivers/?name=${name}`)
            return dispatch({ type: GET_BY_NAME, payload: response.data});

        } catch (error) {
            console.log(error)
        }
        
    }
}



export const getByDetail = (id) => {
    return async function(dispatch){
        let response = await axios(`http://localhost:3001/drivers/${id}`)
        return dispatch({ type: GET_BY_DETAIL, payload: response.data});
    }
}

export const createNewDriver = (payload) => {
    return async function(dispatch){
        const newDriver = await axios.post('http://localhost:3001/drivers', payload);
        return newDriver
    }
}

export const resetDetail = ()=> {
    return{
        type: RESET_DETAIL
    }
}